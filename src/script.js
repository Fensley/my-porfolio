const TimeUpdate = () => {
  const day = document.querySelector(".todaydate");
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const nowDay = weekday[date.getDay()];
  day.innerHTML = nowDay;

  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  document.querySelector(".timenow").innerHTML = time;
};
setInterval(() => {
  TimeUpdate();
}, 1000);

//
