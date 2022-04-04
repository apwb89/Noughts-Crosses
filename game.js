const divGridElement = [...document.querySelectorAll('div')];
const divInnerText = divGridElement.map((x) => x.innerText);
const winnerText = document.querySelector('.winner');

const startGame = () => {
    let isWinner = false;

  let currentTurn = 'X';
  const changeTurn = () => {
    if (currentTurn === 'X') {
      currentTurn = 'O';
    } else {
      currentTurn = 'X';
    }
  };

  let arr = [];

  const checkWinningLine = () => {

    const winners = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
    ];

    if(isWinner === false) {
        winners.forEach((winner) => {
          winner.forEach(() => {
            const firstValue = arr[winner[0]];
            if (firstValue) {
              if (firstValue === arr[winner[1]] && firstValue === arr[winner[2]]) {
                winnerText.innerText = `${firstValue} wins!`;
                isWinner = true;
                divGridElement[winner[0]].style.background = "#90EE90";
                divGridElement[winner[1]].style.background = "#90EE90";
                divGridElement[winner[2]].style.background = "#90EE90";
              }
            }
          });
        });
    }
  };

  divGridElement.forEach((div, i) =>
    div.addEventListener('click', () => {
      if (!div.innerText) {
        div.innerText = currentTurn;
        arr[i] = div.innerText;
        changeTurn();
        checkWinningLine();
      }
    })
  );
};
startGame();

const reset = () => {
  location.reload();
  startGame();
};
