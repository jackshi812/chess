const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"];
const squares = files.flatMap((file) => ranks.map((rank) => `${file}${rank}`));

const board = document.querySelector("#board");
const targetSquare = document.querySelector("#target-square");
const feedback = document.querySelector("#feedback");
const scoreValue = document.querySelector("#score");
const streakValue = document.querySelector("#streak");
const accuracyValue = document.querySelector("#accuracy");
const newTargetButton = document.querySelector("#new-target");
const resetButton = document.querySelector("#reset");
const showLabels = document.querySelector("#show-labels");
const flipBoard = document.querySelector("#flip-board");
const soundEnabled = document.querySelector("#sound-enabled");

let audioContext;

const state = {
  target: "",
  score: 0,
  streak: 0,
  attempts: 0,
  correct: 0,
  flipped: false,
  lastSquare: "",
  lastResult: ""
};

function boardFiles() {
  return state.flipped ? [...files].reverse() : files;
}

function boardRanks() {
  return state.flipped ? ranks : [...ranks].reverse();
}

function squareColor(fileIndex, rankIndex) {
  const fileNumber = files.indexOf(fileIndex);
  const rankNumber = Number(rankIndex) - 1;
  return (fileNumber + rankNumber) % 2 === 0 ? "dark" : "light";
}

function drawBoard() {
  board.innerHTML = "";
  board.classList.toggle("hide-labels", !showLabels.checked);

  boardRanks().forEach((rank) => {
    boardFiles().forEach((file) => {
      const coordinate = `${file}${rank}`;
      const square = document.createElement("button");
      square.type = "button";
      square.className = `square ${squareColor(file, rank)}`;
      square.dataset.square = coordinate;
      square.setAttribute("role", "gridcell");
      square.setAttribute("aria-label", coordinate);

      if (state.lastSquare === coordinate && state.lastResult) {
        square.classList.add(state.lastResult === "correct" ? "recent-correct" : "recent-wrong");
      }

      const fileLabel = shouldShowFileLabel(rank) ? file : "";
      const rankLabel = shouldShowRankLabel(file) ? rank : "";
      square.innerHTML = `
        ${rankLabel ? `<span class="coord rank-label">${rankLabel}</span>` : ""}
        ${fileLabel ? `<span class="coord">${fileLabel}</span>` : ""}
      `;
      square.addEventListener("click", () => handleGuess(coordinate));
      board.append(square);
    });
  });
}

function shouldShowFileLabel(rank) {
  return state.flipped ? rank === "8" : rank === "1";
}

function shouldShowRankLabel(file) {
  return state.flipped ? file === "h" : file === "a";
}

function getAudioContext() {
  if (!soundEnabled.checked) {
    return null;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function playTone(frequency, startTime, duration, options = {}) {
  const context = getAudioContext();

  if (!context) {
    return;
  }

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const volume = options.volume ?? 0.08;
  const attack = options.attack ?? 0.01;
  const release = options.release ?? 0.08;

  oscillator.type = options.type ?? "sine";
  oscillator.frequency.setValueAtTime(frequency, startTime);

  gain.gain.setValueAtTime(0.001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + attack);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration + release);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + release + 0.02);
}

function playCorrectSound() {
  const context = getAudioContext();

  if (!context) {
    return;
  }

  const now = context.currentTime;
  playTone(659.25, now, 0.08, { volume: 0.07 });
  playTone(880, now + 0.09, 0.12, { volume: 0.08 });
}

function playWrongSound() {
  const context = getAudioContext();

  if (!context) {
    return;
  }

  const now = context.currentTime;
  playTone(196, now, 0.14, { type: "triangle", volume: 0.07, release: 0.12 });
  playTone(146.83, now + 0.06, 0.16, { type: "triangle", volume: 0.05, release: 0.12 });
}

function pickTarget() {
  let next = squares[Math.floor(Math.random() * squares.length)];

  if (squares.length > 1) {
    while (next === state.target) {
      next = squares[Math.floor(Math.random() * squares.length)];
    }
  }

  state.target = next;
  state.lastSquare = "";
  state.lastResult = "";
  targetSquare.textContent = next;
  feedback.textContent = "Find this square on the board.";
  feedback.className = "feedback";
  drawBoard();
}

function handleGuess(coordinate) {
  state.attempts += 1;
  state.lastSquare = coordinate;

  if (coordinate === state.target) {
    playCorrectSound();
    state.score += 10 + Math.min(state.streak, 5);
    state.streak += 1;
    state.correct += 1;
    state.lastResult = "correct";
    feedback.textContent = `${coordinate} is right. Nice.`;
    feedback.className = "feedback correct";
    updateStats();
    drawBoard();
    window.setTimeout(pickTarget, 450);
    return;
  }

  state.streak = 0;
  state.lastResult = "wrong";
  playWrongSound();
  feedback.textContent = `${coordinate} is not it. Try ${state.target}.`;
  feedback.className = "feedback wrong";
  updateStats();
  drawBoard();
}

function updateStats() {
  const accuracy = state.attempts === 0 ? 100 : Math.round((state.correct / state.attempts) * 100);
  scoreValue.textContent = String(state.score);
  streakValue.textContent = String(state.streak);
  accuracyValue.textContent = `${accuracy}%`;
}

function resetTrainer() {
  state.score = 0;
  state.streak = 0;
  state.attempts = 0;
  state.correct = 0;
  state.lastSquare = "";
  state.lastResult = "";
  updateStats();
  pickTarget();
}

newTargetButton.addEventListener("click", pickTarget);
resetButton.addEventListener("click", resetTrainer);
showLabels.addEventListener("change", drawBoard);
flipBoard.addEventListener("change", () => {
  state.flipped = flipBoard.checked;
  drawBoard();
});

resetTrainer();
