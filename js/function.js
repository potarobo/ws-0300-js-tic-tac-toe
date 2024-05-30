const circle = document.querySelector('.circle');
const cross = document.querySelector('.cross');
const cells = document.querySelectorAll('.cell');
const restart = document.querySelector('.button-restart');
const result = document.querySelector('.result');
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board = Array(9).fill(null);

cells.forEach((cell) => {
  cell.addEventListener('click', (e) => {
    const cell = e.target;
    const index = parseInt(cell.dataset.key, 10);

    if (!cell.classList.contains('checked') && !winPatterns.some((pattern) => pattern.every((i) => board[i] === '○') || pattern.every((i) => board[i] === '×'))) {
      if (circle.classList.contains('active')) {
        cell.textContent = '○';
        board[index] = '○';
      } else {
        cell.textContent = '×';
        board[index] = '×';
      }
      cell.classList.add('checked');

      let winner = null;
      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          winner = board[a];
          break;
        }
      }

      if (winner) {
        result.textContent = `${winner} win!!`;
      } else if (board.every((cell) => cell !== null)) {
        result.textContent = 'draw';
      } else {
        circle.classList.toggle('active');
        cross.classList.toggle('active');
      }
    }
  });
});

restart.addEventListener('click', () => {
  window.location.reload();
});
