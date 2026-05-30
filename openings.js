const openingFiles = ["a", "b", "c", "d", "e", "f", "g", "h"];
const openingRanks = ["8", "7", "6", "5", "4", "3", "2", "1"];

const openings = [
  {
    id: "italian",
    name: "Italian Game",
    side: "White repertoire",
    practiceColor: "white",
    summary: "A direct opening for developing quickly, fighting for the center, and aiming pieces at Black's king.",
    steps: [
      {
        move: "1. e4",
        from: "e2",
        to: "e4",
        title: "Claim central space",
        explanation: "White moves the king pawn two squares to take space in the center.",
        motivation: "This opens lines for the queen and bishop, and it starts the fight for d5 and f5.",
        arrows: [
          { from: "e2", to: "e4", type: "move" },
          { from: "f1", to: "c4", type: "idea" }
        ]
      },
      {
        move: "1... e5",
        from: "e7",
        to: "e5",
        title: "Meet center with center",
        explanation: "Black mirrors White and places a pawn on e5.",
        motivation: "Black stops White from getting the whole center and opens lines for Black's bishop and queen.",
        arrows: [
          { from: "e7", to: "e5", type: "move" },
          { from: "f8", to: "c5", type: "idea" }
        ]
      },
      {
        move: "2. Nf3",
        from: "g1",
        to: "f3",
        title: "Develop with a threat",
        explanation: "White brings the kingside knight toward the center.",
        motivation: "The knight attacks Black's e5 pawn, helps control d4, and prepares White to castle.",
        arrows: [
          { from: "g1", to: "f3", type: "move" },
          { from: "f3", to: "e5", type: "pressure" }
        ]
      },
      {
        move: "2... Nc6",
        from: "b8",
        to: "c6",
        title: "Defend and develop",
        explanation: "Black develops the queenside knight to a natural square.",
        motivation: "The knight protects the e5 pawn and fights for the d4 square.",
        arrows: [
          { from: "b8", to: "c6", type: "move" },
          { from: "c6", to: "e5", type: "defense" }
        ]
      },
      {
        move: "3. Bc4",
        from: "f1",
        to: "c4",
        title: "Aim at the weak point",
        explanation: "White develops the bishop to an active diagonal.",
        motivation: "The bishop points at f7, the pawn defended only by Black's king at the start of the game.",
        arrows: [
          { from: "f1", to: "c4", type: "move" },
          { from: "c4", to: "f7", type: "pressure" }
        ]
      },
      {
        move: "3... Bc5",
        from: "f8",
        to: "c5",
        title: "Match activity",
        explanation: "Black develops the bishop to a strong central diagonal.",
        motivation: "Black pressures f2, keeps pieces active, and prepares to castle safely.",
        arrows: [
          { from: "f8", to: "c5", type: "move" },
          { from: "c5", to: "f2", type: "pressure" }
        ]
      }
    ]
  },
  {
    id: "london",
    name: "London System",
    side: "White repertoire",
    practiceColor: "white",
    summary: "A reliable setup where White develops smoothly, supports d4, and builds a sturdy center.",
    steps: [
      {
        move: "1. d4",
        from: "d2",
        to: "d4",
        title: "Start with the queen pawn",
        explanation: "White places a pawn in the center and opens the queen's bishop.",
        motivation: "The d-pawn controls e5 and c5, giving White stable central space.",
        arrows: [
          { from: "d2", to: "d4", type: "move" },
          { from: "c1", to: "f4", type: "idea" }
        ]
      },
      {
        move: "1... d5",
        from: "d7",
        to: "d5",
        title: "Challenge the center",
        explanation: "Black answers with a central pawn of their own.",
        motivation: "Black stops White from expanding for free and creates a balanced pawn structure.",
        arrows: [
          { from: "d7", to: "d5", type: "move" },
          { from: "d5", to: "e4", type: "pressure" }
        ]
      },
      {
        move: "2. Bf4",
        from: "c1",
        to: "f4",
        title: "Develop before closing in",
        explanation: "White develops the dark-squared bishop outside the pawn chain.",
        motivation: "The bishop becomes active early, supports e3 later, and eyes the c7 and h2 diagonals.",
        arrows: [
          { from: "c1", to: "f4", type: "move" },
          { from: "f4", to: "c7", type: "pressure" }
        ]
      },
      {
        move: "2... Nf6",
        from: "g8",
        to: "f6",
        title: "Develop toward the center",
        explanation: "Black brings a knight to its best natural square.",
        motivation: "The knight controls e4 and d5, making it harder for White to push through the center.",
        arrows: [
          { from: "g8", to: "f6", type: "move" },
          { from: "f6", to: "e4", type: "pressure" }
        ]
      },
      {
        move: "3. e3",
        from: "e2",
        to: "e3",
        title: "Support the center",
        explanation: "White reinforces the d4 pawn and opens a path for the light-squared bishop.",
        motivation: "The London is about building a solid setup before choosing where to attack.",
        arrows: [
          { from: "e2", to: "e3", type: "move" },
          { from: "e3", to: "d4", type: "defense" }
        ]
      },
      {
        move: "3... e6",
        from: "e7",
        to: "e6",
        title: "Prepare development",
        explanation: "Black supports the d5 pawn and opens the bishop on f8.",
        motivation: "Black builds a sturdy center and gets ready to castle after developing the bishop.",
        arrows: [
          { from: "e7", to: "e6", type: "move" },
          { from: "f8", to: "d6", type: "idea" }
        ]
      },
      {
        move: "4. Nf3",
        from: "g1",
        to: "f3",
        title: "Finish the basic setup",
        explanation: "White develops the kingside knight and gets closer to castling.",
        motivation: "The knight protects d4, controls e5, and supports the calm London structure.",
        arrows: [
          { from: "g1", to: "f3", type: "move" },
          { from: "f3", to: "d4", type: "defense" }
        ]
      }
    ]
  },
  {
    id: "caro-kann",
    name: "Caro-Kann Defense",
    side: "Black repertoire",
    practiceColor: "black",
    summary: "A solid answer to 1. e4 where Black supports a central d5 break without blocking the light-squared bishop.",
    steps: [
      {
        move: "1. e4",
        from: "e2",
        to: "e4",
        title: "White takes space",
        explanation: "White starts with the king pawn and claims central squares.",
        motivation: "This is the most common first move because it opens pieces and fights for the center immediately.",
        arrows: [
          { from: "e2", to: "e4", type: "move" },
          { from: "e4", to: "d5", type: "pressure" }
        ]
      },
      {
        move: "1... c6",
        from: "c7",
        to: "c6",
        title: "Prepare d5",
        explanation: "Black moves the c-pawn one square to support a central pawn push.",
        motivation: "Instead of copying with e5, Black prepares d5 with extra support and keeps the bishop on c8 free.",
        arrows: [
          { from: "c7", to: "c6", type: "move" },
          { from: "c6", to: "d5", type: "defense" }
        ]
      },
      {
        move: "2. d4",
        from: "d2",
        to: "d4",
        title: "Build the full center",
        explanation: "White places a second pawn in the center.",
        motivation: "White wants space and control, especially over e5 and c5.",
        arrows: [
          { from: "d2", to: "d4", type: "move" },
          { from: "d4", to: "e5", type: "pressure" }
        ]
      },
      {
        move: "2... d5",
        from: "d7",
        to: "d5",
        title: "Strike back",
        explanation: "Black immediately challenges White's e4 pawn.",
        motivation: "The Caro-Kann is solid because Black fights the center with a pawn that is supported by c6.",
        arrows: [
          { from: "d7", to: "d5", type: "move" },
          { from: "d5", to: "e4", type: "pressure" }
        ]
      },
      {
        move: "3. Nc3",
        from: "b1",
        to: "c3",
        title: "Defend e4",
        explanation: "White develops a knight while protecting the attacked e4 pawn.",
        motivation: "This keeps White's center intact and brings a piece closer to the fight.",
        arrows: [
          { from: "b1", to: "c3", type: "move" },
          { from: "c3", to: "e4", type: "defense" }
        ]
      },
      {
        move: "3... dxe4",
        from: "d5",
        to: "e4",
        title: "Clarify the center",
        explanation: "Black captures on e4 and removes White's advanced pawn.",
        motivation: "Black reduces White's central space and asks White to spend time recapturing.",
        arrows: [
          { from: "d5", to: "e4", type: "move" },
          { from: "c6", to: "d5", type: "defense" }
        ]
      },
      {
        move: "4. Nxe4",
        from: "c3",
        to: "e4",
        title: "Recapture with development",
        explanation: "White uses the knight to win back the pawn.",
        motivation: "The knight lands in the center, but Black can now develop smoothly and attack it later.",
        arrows: [
          { from: "c3", to: "e4", type: "move" },
          { from: "e4", to: "f6", type: "idea" }
        ]
      },
      {
        move: "4... Bf5",
        from: "c8",
        to: "f5",
        title: "Develop the free bishop",
        explanation: "Black develops the light-squared bishop before locking it behind e6.",
        motivation: "This is one reason Caro-Kann players like c6: the bishop can become active early.",
        arrows: [
          { from: "c8", to: "f5", type: "move" },
          { from: "f5", to: "e4", type: "pressure" }
        ]
      }
    ]
  }
];

const pieceLabels = {
  white: { king: "♚", queen: "♛", rook: "♜", bishop: "♝", knight: "♞", pawn: "♟" },
  black: { king: "♚", queen: "♛", rook: "♜", bishop: "♝", knight: "♞", pawn: "♟" }
};

const boardElement = document.querySelector("#opening-board");
const arrowsElement = document.querySelector("#opening-arrows");
const tabsElement = document.querySelector("#opening-tabs");
const moveListElement = document.querySelector("#move-list");
const openingNameElement = document.querySelector("#opening-name");
const openingSideElement = document.querySelector("#opening-side");
const openingSummaryElement = document.querySelector("#opening-summary");
const moveCounterElement = document.querySelector("#opening-move-counter");
const moveElement = document.querySelector("#opening-move");
const titleElement = document.querySelector("#opening-step-title");
const textElement = document.querySelector("#opening-step-text");
const motivationElement = document.querySelector("#opening-motivation");
const practiceStatusElement = document.querySelector("#practice-status");
const previousButton = document.querySelector("#previous-move");
const nextButton = document.querySelector("#next-move");
const restartPracticeButton = document.querySelector("#restart-practice");
const studyModeButton = document.querySelector("#study-mode");
const practiceModeButton = document.querySelector("#practice-mode");

let mode = "study";
let currentOpeningIndex = 0;
let currentStepIndex = 0;
let practiceBoard = startingPosition();
let practiceStepIndex = 0;
let selectedSquare = "";
let lastPracticeMove = null;
let practiceFeedback = "";

function startingPosition() {
  const board = {};
  const backRank = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

  openingFiles.forEach((file, index) => {
    board[`${file}1`] = { color: "white", type: backRank[index] };
    board[`${file}2`] = { color: "white", type: "pawn" };
    board[`${file}7`] = { color: "black", type: "pawn" };
    board[`${file}8`] = { color: "black", type: backRank[index] };
  });

  return board;
}

function applyMove(board, move) {
  const piece = board[move.from];

  if (!piece) {
    return;
  }

  delete board[move.from];
  board[move.to] = piece;
}

function activeOpening() {
  return openings[currentOpeningIndex];
}

function moveColor(stepIndex) {
  return stepIndex % 2 === 0 ? "white" : "black";
}

function positionAfter(opening, stepIndex) {
  const board = startingPosition();

  opening.steps.slice(0, stepIndex + 1).forEach((step) => applyMove(board, step));

  return board;
}

function squareColor(file, rank) {
  const fileNumber = openingFiles.indexOf(file);
  const rankNumber = Number(rank) - 1;
  return (fileNumber + rankNumber) % 2 === 0 ? "dark" : "light";
}

function squareCenter(square) {
  const fileIndex = openingFiles.indexOf(square[0]);
  const rankIndex = openingRanks.indexOf(square[1]);

  return {
    x: (fileIndex + 0.5) * 12.5,
    y: (rankIndex + 0.5) * 12.5
  };
}

function drawTabs() {
  tabsElement.innerHTML = "";

  openings.forEach((opening, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "opening-tab";
    button.textContent = opening.name;
    button.dataset.opening = opening.id;
    button.setAttribute("aria-pressed", String(index === currentOpeningIndex));
    button.addEventListener("click", () => {
      currentOpeningIndex = index;
      currentStepIndex = 0;
      resetPractice();
      renderOpening();
    });
    tabsElement.append(button);
  });
}

function drawBoard() {
  const opening = activeOpening();
  const step = visibleStep(opening);
  const board = mode === "practice" ? practiceBoard : positionAfter(opening, currentStepIndex);
  const highlights = new Set();
  const lastMoveSquares = new Set();

  if (mode === "study" && step) {
    highlights.add(step.from);
    highlights.add(step.to);
  }

  if (mode === "practice" && selectedSquare) {
    highlights.add(selectedSquare);
  }

  if (mode === "practice" && lastPracticeMove) {
    lastMoveSquares.add(lastPracticeMove.from);
    lastMoveSquares.add(lastPracticeMove.to);
  }

  boardElement.innerHTML = "";
  boardElement.classList.toggle("is-practice", mode === "practice");

  openingRanks.forEach((rank) => {
    openingFiles.forEach((file) => {
      const coordinate = `${file}${rank}`;
      const square = document.createElement("div");
      const piece = board[coordinate];
      square.className = `opening-square ${squareColor(file, rank)}`;
      square.dataset.square = coordinate;
      square.setAttribute("role", "gridcell");
      square.setAttribute("aria-label", piece ? `${coordinate} ${piece.color} ${piece.type}` : coordinate);

      if (mode === "practice") {
        square.tabIndex = 0;
        square.addEventListener("click", () => handlePracticeSquare(coordinate));
        square.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handlePracticeSquare(coordinate);
          }
        });
      }

      if (highlights.has(coordinate)) {
        square.classList.add(mode === "practice" ? "is-selected" : "is-highlighted");
      }

      if (lastMoveSquares.has(coordinate)) {
        square.classList.add("is-highlighted");
      }

      if (file === "a") {
        const rankLabel = document.createElement("span");
        rankLabel.className = "coord rank-label";
        rankLabel.textContent = rank;
        square.append(rankLabel);
      }

      if (rank === "1") {
        const fileLabel = document.createElement("span");
        fileLabel.className = "coord";
        fileLabel.textContent = file;
        square.append(fileLabel);
      }

      if (piece) {
        const pieceElement = document.createElement("span");
        pieceElement.className = `opening-piece ${piece.color}`;
        pieceElement.textContent = pieceLabels[piece.color][piece.type];
        square.append(pieceElement);
      }

      boardElement.append(square);
    });
  });

  drawArrows(step ? step.arrows : []);
}

function drawArrows(arrows) {
  arrowsElement.innerHTML = `
    <defs>
      <marker id="arrow-move" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z"></path>
      </marker>
      <marker id="arrow-idea" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z"></path>
      </marker>
      <marker id="arrow-pressure" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z"></path>
      </marker>
      <marker id="arrow-defense" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z"></path>
      </marker>
    </defs>
  `;

  arrows.forEach((arrow) => {
    const start = squareCenter(arrow.from);
    const end = squareCenter(arrow.to);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("class", `opening-arrow ${arrow.type}`);
    line.setAttribute("x1", String(start.x));
    line.setAttribute("y1", String(start.y));
    line.setAttribute("x2", String(end.x));
    line.setAttribute("y2", String(end.y));
    line.setAttribute("marker-end", `url(#arrow-${arrow.type})`);
    arrowsElement.append(line);
  });
}

function drawMoveList() {
  const opening = activeOpening();
  const activeIndex = mode === "practice" ? Math.min(practiceStepIndex, opening.steps.length - 1) : currentStepIndex;
  moveListElement.innerHTML = "";

  opening.steps.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "move-step";
    button.textContent = step.move;
    button.disabled = mode === "practice";
    button.setAttribute("aria-current", index === activeIndex ? "step" : "false");

    if (mode === "practice" && index < practiceStepIndex) {
      button.classList.add("is-complete");
    }

    button.addEventListener("click", () => {
      if (mode === "practice") {
        return;
      }

      currentStepIndex = index;
      renderOpening();
    });
    moveListElement.append(button);
  });
}

function updateLessonText() {
  const opening = activeOpening();
  const step = visibleStep(opening);
  openingNameElement.textContent = opening.name;
  openingSideElement.textContent = opening.side;
  openingSummaryElement.textContent = opening.summary;
  moveCounterElement.textContent = `${mode === "practice" ? "Practice" : "Move"} ${visibleStepIndex(opening) + 1} of ${opening.steps.length}`;
  moveElement.textContent = step.move;
  titleElement.textContent = step.title;
  textElement.textContent = step.explanation;
  motivationElement.textContent = step.motivation;
  practiceStatusElement.hidden = mode !== "practice";
  practiceStatusElement.textContent = practiceFeedback;
  previousButton.hidden = mode === "practice";
  nextButton.hidden = mode === "practice";
  restartPracticeButton.hidden = mode !== "practice";
  previousButton.disabled = mode === "study" && currentStepIndex === 0;
  nextButton.disabled = mode === "study" && currentStepIndex === opening.steps.length - 1;
  studyModeButton.setAttribute("aria-pressed", String(mode === "study"));
  practiceModeButton.setAttribute("aria-pressed", String(mode === "practice"));
}

function visibleStepIndex(opening) {
  if (mode === "study") {
    return currentStepIndex;
  }

  return Math.min(practiceStepIndex, opening.steps.length - 1);
}

function visibleStep(opening) {
  return opening.steps[visibleStepIndex(opening)];
}

function expectedPracticeStep() {
  const opening = activeOpening();
  const step = opening.steps[practiceStepIndex];

  if (!step || moveColor(practiceStepIndex) !== opening.practiceColor) {
    return null;
  }

  return step;
}

function practicePrompt(prefix = "") {
  const opening = activeOpening();
  const step = expectedPracticeStep();

  if (!step) {
    practiceFeedback = `${prefix}Line complete. Restart practice to run it again.`;
    return;
  }

  const colorName = opening.practiceColor === "white" ? "White" : "Black";
  practiceFeedback = `${prefix}${colorName} to move: ${step.move}.`;
}

function applyPracticeMove(step) {
  applyMove(practiceBoard, step);
  lastPracticeMove = { from: step.from, to: step.to };
}

function playBotReplies(prefix = "") {
  const opening = activeOpening();
  const botMoves = [];

  while (practiceStepIndex < opening.steps.length && moveColor(practiceStepIndex) !== opening.practiceColor) {
    const botStep = opening.steps[practiceStepIndex];
    applyPracticeMove(botStep);
    practiceStepIndex += 1;
    botMoves.push(botStep.move);
  }

  const botPrefix = botMoves.length ? `${prefix}Bot played ${botMoves.join(", ")}. ` : prefix;
  practicePrompt(botPrefix);
}

function resetPractice() {
  practiceBoard = startingPosition();
  practiceStepIndex = 0;
  selectedSquare = "";
  lastPracticeMove = null;
  practiceFeedback = "";
  playBotReplies();
}

function handlePracticeSquare(coordinate) {
  const opening = activeOpening();
  const expected = expectedPracticeStep();

  if (!expected) {
    practiceFeedback = "Line complete. Restart practice to run it again.";
    renderOpening();
    return;
  }

  const piece = practiceBoard[coordinate];

  if (!selectedSquare) {
    if (!piece || piece.color !== opening.practiceColor) {
      practicePrompt("Choose one of your pieces. ");
      renderOpening();
      return;
    }

    selectedSquare = coordinate;
    practiceFeedback = `Selected ${coordinate}. Choose the destination square.`;
    renderOpening();
    return;
  }

  if (selectedSquare === coordinate) {
    selectedSquare = "";
    practicePrompt();
    renderOpening();
    return;
  }

  if (piece && piece.color === opening.practiceColor) {
    selectedSquare = coordinate;
    practiceFeedback = `Selected ${coordinate}. Choose the destination square.`;
    renderOpening();
    return;
  }

  if (selectedSquare === expected.from && coordinate === expected.to) {
    applyPracticeMove(expected);
    practiceStepIndex += 1;
    selectedSquare = "";
    playBotReplies(`Correct: ${expected.move}. `);
    renderOpening();
    return;
  }

  selectedSquare = "";
  practiceFeedback = `Not this line. Try ${expected.move}: ${expected.title}.`;
  renderOpening();
}

function renderOpening() {
  drawTabs();
  drawBoard();
  drawMoveList();
  updateLessonText();
}

previousButton.addEventListener("click", () => {
  currentStepIndex = Math.max(0, currentStepIndex - 1);
  renderOpening();
});

nextButton.addEventListener("click", () => {
  const opening = activeOpening();
  currentStepIndex = Math.min(opening.steps.length - 1, currentStepIndex + 1);
  renderOpening();
});

restartPracticeButton.addEventListener("click", () => {
  resetPractice();
  renderOpening();
});

studyModeButton.addEventListener("click", () => {
  mode = "study";
  renderOpening();
});

practiceModeButton.addEventListener("click", () => {
  mode = "practice";
  resetPractice();
  renderOpening();
});

resetPractice();
renderOpening();
