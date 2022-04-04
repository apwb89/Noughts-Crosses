const divGridElement = [...document.querySelectorAll("div")];
const divInnerText = divGridElement.map((x) => x.innerText);
const winnerText = document.querySelector(".winner");

let currentTurn = "X";
const changeTurn = () => {
  if (currentTurn === "X") {
    currentTurn = "O";
  } else {
    currentTurn = "X";
  }
};

let arr = [];
console.log("arr:", arr);
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
  winners.forEach((winner) => {
    winner.forEach(() => {
      const firstValue = arr[winner[0]];
      if (firstValue) {
        if (firstValue === arr[winner[1]] && firstValue === arr[winner[2]]) {
          winnerText.innerText = `${firstValue} wins!`;
        }
      }
    });
  });
};

divGridElement[0].addEventListener("click", () => {
  if (!divGridElement[0].innerText) {
    divGridElement[0].innerText = currentTurn;
    arr[0] = divGridElement[0].innerText;
    changeTurn();
    checkWinningLine();
  }
});
divGridElement[1].addEventListener("click", () => {
  if (!divGridElement[1].innerText) {
    divGridElement[1].innerText = currentTurn;
    changeTurn();
    arr[1] = divGridElement[1].innerText;
    checkWinningLine();
  }
});
divGridElement[2].addEventListener("click", () => {
  if (!divGridElement[2].innerText) {
    divGridElement[2].innerText = currentTurn;
    changeTurn();
    arr[2] = divGridElement[2].innerText;
    checkWinningLine();
  }
});
divGridElement[3].addEventListener("click", () => {
  if (!divGridElement[3].innerText) {
    divGridElement[3].innerText = currentTurn;
    changeTurn();
    arr[3] = divGridElement[3].innerText;
    checkWinningLine();
  }
});
divGridElement[4].addEventListener("click", () => {
  if (!divGridElement[4].innerText) {
    divGridElement[4].innerText = currentTurn;
    changeTurn();
    arr[4] = divGridElement[4].innerText;
    checkWinningLine();
  }
});
divGridElement[5].addEventListener("click", () => {
  if (!divGridElement[5].innerText) {
    divGridElement[5].innerText = currentTurn;
    changeTurn();
    arr[5] = divGridElement[5].innerText;
    checkWinningLine();
  }
});
divGridElement[6].addEventListener("click", () => {
  if (!divGridElement[6].innerText) {
    divGridElement[6].innerText = currentTurn;
    changeTurn();
    arr[6] = divGridElement[6].innerText;
    checkWinningLine();
  }
});
divGridElement[7].addEventListener("click", () => {
  if (!divGridElement[7].innerText) {
    divGridElement[7].innerText = currentTurn;
    changeTurn();
    arr[7] = divGridElement[7].innerText;
    checkWinningLine();
  }
});
divGridElement[8].addEventListener("click", () => {
  if (!divGridElement[8].innerText) {
    divGridElement[8].innerText = currentTurn;
    changeTurn();
    arr[8] = divGridElement[8].innerText;
    checkWinningLine();
  }
});
