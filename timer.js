const year = new Date().getFullYear();
const fourthOfJuly = new Date("Jun 29, 2025, 19:15").getTime();

// countdown
let timer = setInterval(function () {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = fourthOfJuly - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>днів</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>годин</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>хвилин</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>секунд</div> \
</div>";

}, 1000);