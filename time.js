const dailyBtn = document.querySelector("#daily-btn");
const weeklyBtn = document.querySelector("#weekly-btn");
const monthlyBtn = document.querySelector("#monthly-btn");

const hours = document.querySelector(".hours");
const lastTime = document.querySelector(".last-time");

function dailyData() {
  fetch(
    "https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json"
  )
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.daily.current = "hrs";
        lastTime[i].innerHTML =
          "Last Daily - " + data[i].timeframes.daily.previous + "hrs";
      });
    });
}

function weekendData() {
  fetch(
    "https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json"
  )
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.weekly.current = "hrs";
        lastTime[i].innerHTML =
          "Last Daily - " + data[i].timeframes.weekly.previous + "hrs";
      });
    });
}

function monthlyData() {
  fetch(
    "https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json"
  )
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.monthly.current = "hrs";
        lastTime[i].innerHTML =
          "Last Daily - " + data[i].timeframes.monthly.previous + "hrs";
      });
    });
}

dailyBtn.addEventListener("click", () => {
  dailyBtn.classList.remove("text-btn");
  weeklyBtn.classList.add("text-btn");
  monthlyBtn.classList.add("text-btn");
  dailyData();
});

weeklyBtn.addEventListener("click", () => {
  dailyBtn.classList.remove("text-btn");
  weeklyBtn.classList.add("text-btn");
  monthlyBtn.classList.add("text-btn");
  weekendData();
});
monthlyBtn.addEventListener("click", () => {
  dailyBtn.classList.remove("text-btn");
  weeklyBtn.classList.add("text-btn");
  monthlyBtn.classList.add("text-btn");
  monthlyData();
});
