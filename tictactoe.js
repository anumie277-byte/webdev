document.addEventListener("DOMContentLoaded", () => {
  const boxes = Array.from(document.querySelectorAll(".tic-tac-toe-box"));
  const statusEl = document.getElementById("status");
  const resetBtn = document.getElementById("resetBtn");
  const newGameBtn = document.getElementById("newGameBtn");

  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let gameActive = true;

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function setBoxState(box, val) {
    box.classList.remove("empty", "x", "o");
    if (!val) {
      box.classList.add("empty");
      box.textContent = "";
      return;
    }
    box.textContent = val;
    box.classList.add(val.toLowerCase());
  }

  function handleBoxClick(e) {
    const box = e.currentTarget;
    const index = Number(box.dataset.index);
    if (!gameActive || board[index]) return;

    board[index] = currentPlayer;
    setBoxState(box, currentPlayer);

    const winCombo = checkWin(currentPlayer);
    if (winCombo) {
      statusEl.textContent = `${currentPlayer} wins!`;
      gameActive = false;
      highlightWin(winCombo);
      return;
    }

    if (board.every((cell) => cell !== "")) {
      statusEl.textContent = "Draw!";
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusEl.textContent = `Turn: ${currentPlayer}`;
  }

  function checkWin(player) {
    for (const combo of winningCombos) {
      if (combo.every((i) => board[i] === player)) return combo;
    }
    return null;
  }

  function highlightWin(combo) {
    combo.forEach((i) => boxes[i].classList.add("win"));
  }

  function clearHighlights() {
    boxes.forEach((b) => b.classList.remove("win"));
  }

  function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    boxes.forEach((b) => setBoxState(b, ""));
    clearHighlights();
    statusEl.textContent = "Click a square to start — X goes first.";
  }

  boxes.forEach((box) => box.addEventListener("click", handleBoxClick));
  resetBtn.addEventListener("click", resetGame);
  newGameBtn.addEventListener("click", resetGame);

  const statusEl = document.getElementById("status");
  const resetBtn = document.getElementById("resetBtn");
  const newGameBtn = document.getElementById("newGameBtn");
  const boxes = document.querySelectorAll(".tic-tac-toe-box");
});
