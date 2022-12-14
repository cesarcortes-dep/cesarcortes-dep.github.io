import data from "./data.json" assert { type: "json" };

let daylyArray = data.map((item) => item.timeframes.daily);
let weeklyArray = data.map((item) => item.timeframes.weekly);
let monthlyArray = data.map((item) => item.timeframes.monthly);

let bgColors = [
  "hsl(15, 100%, 70%)",
  " hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  " hsl(264, 64%, 52%)",
  " hsl(43, 84%, 65%)",
];

console.log(daylyArray);
console.log(weeklyArray);
console.log(monthlyArray);

let dailyBtn = document.querySelector("#daily");
let weeklyBtn = document.querySelector("#weekly");
let monthlyBtn = document.querySelector("#monthly");

let secondSecction = document.querySelector(".second-section");

dailyBtn.addEventListener("click", () => {
  drawElments(daylyArray);
});

weeklyBtn.addEventListener("click", () => {
  drawElments(weeklyArray);
});
monthlyBtn.addEventListener("click", () => {
  drawElments(monthlyArray);
});
function drawElments(array) {
  secondSecction.innerHTML = "";
  array.forEach((element, index) => {
    let title = data[index].title;
    let titleLowerCase = title.toLowerCase();

    if (titleLowerCase == "self care") {
      titleLowerCase = "self-care";
    }
    secondSecction.innerHTML += `
        <div class="card">
            <div class="card__background" style="background-color: ${bgColors[index]};">
            <img class="card__image" src="./images/icon-${titleLowerCase}.svg" alt="">
            </div>
            <div class="card__details">
            <div class="card__activity">
                <p class="card__title"> ${title}</p>
                <img  src="./images/icon-ellipsis.svg" alt="three dots">
            </div>
            <div class="card__time">
                <p class="card__hour">${element.current}hrs</p>
                <p class="card__previous">Previous - ${element.previous}hrs</p>
            </div>
            </div>
        </div> `;
  });
}
