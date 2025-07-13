function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add zero padding
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("clock").textContent = timeString;

  // Indian date format: DD/MM/YYYY
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
  const year = now.getFullYear();
  const dateString = `${day}/${month}/${year}`;

  document.getElementById("date").textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);
