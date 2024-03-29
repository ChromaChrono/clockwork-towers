let root;
let container;

// Creates a single digit
const createNumber = (num) => {
  const number = document.createElement("div");
  number.classList.add("number");
  number.textContent = `${num}`;
  return number;
};

// Generates an array of numbers
const createNumbers = (total) => {
  const arrayOfNumbers = [];
  for (let i = total; i >= 0; i--) {
    arrayOfNumbers.push(createNumber(i));
  }
  return arrayOfNumbers;
};

// Creates tower for units column for seconds
const createUnitsSecondHand = () => {
  const hand = document.createElement("div");
  hand.id = "unitsSecondHand";
  hand.classList.add("units-second-hand", "hand");
  return hand;
};

// Creates tower for tens column for seconds
const createTensSecondHand = () => {
  const hand = document.createElement("div");
  hand.id = "tensSecondHand";
  hand.classList.add("tens-second-hand", "hand");
  return hand;
};

// Creates unit column for minutes
const createUnitsMinuteHand = () => {
  const hand = document.createElement("div");
  hand.id = "unitsMinuteHand";
  hand.classList.add("units-minute-hand", "hand");
  return hand;
};

// Create tens column for minutes
const createTensMinuteHand = () => {
  const hand = document.createElement("div");
  hand.id = "tensMinuteHand";
  hand.classList.add("tens-minute-hand", "hand");
  return hand;
};

// Creates units column for hours
const createUnitsHourHand = () => {
  const hand = document.createElement("div");
  hand.id = "unitsHourHand";
  hand.classList.add("units-hour-hand", "hand");
  return hand;
};

// Creates tens column for hours
const createTensHourHand = () => {
  const hand = document.createElement("div");
  hand.id = "tensHourHand";
  hand.classList.add("tens-hour-hand", "hand");
  return hand;
};

// el is document element
const getWidthOfElement = (el) => {
  return el.getBoundingClientRect().width;
};

// Main function that gets exported
const createClockBody = function (root) {
  // Makes root global
  root = root;
  // Makes container global
  container = root.getElementById("clock");

  const child = document.createElement("div");
  const highlight = document.createElement("div");
  highlight.classList.add("highlight");
  child.classList.add("clock-body");
  const clockBody = container.appendChild(child);
  clockBody.appendChild(highlight);

  getWidthOfElement(clockBody);

  const arrayOfHands = [
    { hand: createUnitsHourHand(), numbers: 2 },
    { hand: createTensHourHand(), numbers: 9 },
    { hand: createUnitsMinuteHand(), numbers: 5 },
    { hand: createTensMinuteHand(), numbers: 9 },
    { hand: createUnitsSecondHand(), numbers: 5 },
    { hand: createTensSecondHand(), numbers: 9 },
  ];

  // Width of clock body
  const clockWidth = getWidthOfElement(clockBody);

  // Create numbers for clock
  arrayOfHands.forEach((hand) => {
    createNumbers(hand.numbers).forEach((e) => {
      e.style.width = `${clockWidth / 6 - 2}px`;
      e.style.height = `${clockWidth / 6}px`;
      hand.hand.appendChild(e);
    });
  });

  arrayOfHands.forEach((hand) => {
    clockBody.appendChild(hand.hand);
  });
};

export { createClockBody };
