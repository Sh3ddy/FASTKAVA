function updateCafes() {
  let cafes = document.getElementById("cafes").value;
  document.getElementById("cafesValue").innerHTML = cafes;
  let test2 = document.getElementById("cafes");
  let test = document.getElementById("cafesValue");

  setBubble(test2, test);
}

function updateDrinks() {
  let drinks = document.getElementById("drinks").value;
  document.getElementById("drinksValue").innerHTML = drinks;

  let test2 = document.getElementById("drinks");
  let test = document.getElementById("drinksValue");

  setBubble(test2, test);
}

function updateMonths() {
  let months = document.getElementById("months").value;
  document.getElementById("monthsValue").innerHTML = months;

  let test2 = document.getElementById("months");
  let test = document.getElementById("monthsValue");
  setBubble(test2, test);
}

function calculateProfit() {
  let cafes = document.getElementById("cafes").value;
  let drinks = document.getElementById("drinks").value;
  let months = document.getElementById("months").value;
  let allprofit = cafes * drinks * 30 * months * 30;
  let profit = allprofit - 500 - allprofit * 0.381 - 2500 - 1400;

  document.getElementById("expense1").value = 2500 * months * cafes;
  document.getElementById("expense2").value = 200 * months * cafes;
  document.getElementById("expense3").value = 1200 * months * cafes;

  document.getElementById("expense").value = Math.round(allprofit * 0.381, 0);
  document.getElementById("profit").value = Math.round(profit, 0);
}

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.3}px))`;
}
