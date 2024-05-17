const circle = document.querySelector('.circle');
const cross = document.querySelector('.cross');
const cells = document.querySelectorAll('.cell');
const restart = document.querySelector('.button-restart');
const winPatterns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (!cell.classList.contains('checked')) {
      if (circle.classList.contains('active')) {
        cell.textContent = '○';
        cell.classList.add('checked');
      } else {
        cell.textContent = '×';
        cell.classList.add('checked');
      }
      circle.classList.toggle('active');
      cross.classList.toggle('active');
    }
  });
});

restart.addEventListener('click', () => {});
