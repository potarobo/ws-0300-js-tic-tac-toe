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

    // セルが既にチェックされているか、ゲームが終わっている場合は何もしない
    if (cell.classList.contains('checked') || result.textContent !== 'starting...') return;

    // 現在のプレイヤーのマークをセルに表示し、ボードを更新
    const currentPlayer = circle.classList.contains('active') ? '○' : '×';
    cell.textContent = currentPlayer;
    board[index] = currentPlayer;
    cell.classList.add('checked');

    // 勝敗の判定
    let winner = winPatterns.some((pattern) => {
      return pattern.every((i) => {
        return board[i] === currentPlayer;
      });
    });

    if (winner) {
      result.textContent = `${currentPlayer} win!!`;
    } else if (board.every((cell) => cell !== null)) {
      result.textContent = 'draw';
    } else {
      circle.classList.toggle('active');
      cross.classList.toggle('active');
    }
  });
});

restart.addEventListener('click', () => {
  window.location.reload();
});
