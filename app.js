// Weather App - demo mode with placeholder data (no network calls)
// Swap the MOCK object below for real API data when ready.

const MOCK = {
  place: {
    name: "New York",
    admin: "New York",
    country: "United States",
  },
  current: {
    temp: 23,
    feelsLike: 25,
    desc: "Partly cloudy",
    icon: "⛅",
    wind: 14,
    humidity: 62,
    precip: 0.0,
    pressure: 1014,
  },
  hourly: [
    { time: "14:00", icon: "⛅", temp: 23 },
    { time: "15:00", icon: "⛅", temp: 23 },
    { time: "16:00", icon: "🌤️", temp: 22 },
    { time: "17:00", icon: "🌤️", temp: 21 },
    { time: "18:00", icon: "🌥️", temp: 20 },
    { time: "19:00", icon: "🌥️", temp: 19 },
    { time: "20:00", icon: "🌙", temp: 18 },
    { time: "21:00", icon: "🌙", temp: 17 },
    { time: "22:00", icon: "🌙", temp: 17 },
    { time: "23:00", icon: "🌙", temp: 16 },
    { time: "00:00", icon: "🌙", temp: 16 },
    { time: "01:00", icon: "🌙", temp: 15 },
    { time: "02:00", icon: "☁️", temp: 15 },
    { time: "03:00", icon: "☁️", temp: 15 },
    { time: "04:00", icon: "☁️", temp: 14 },
    { time: "05:00", icon: "☁️", temp: 14 },
    { time: "06:00", icon: "🌅", temp: 15 },
    { time: "07:00", icon: "🌅", temp: 16 },
    { time: "08:00", icon: "🌤️", temp: 18 },
    { time: "09:00", icon: "🌤️", temp: 19 },
    { time: "10:00", icon: "☀️", temp: 21 },
    { time: "11:00", icon: "☀️", temp: 22 },
    { time: "12:00", icon: "☀️", temp: 23 },
    { time: "13:00", icon: "⛅", temp: 23 },
  ],
  daily: [
    { day: "Today", icon: "⛅", max: 24, min: 14 },
    { day: "Tomorrow", icon: "🌧️", max: 21, min: 13 },
    { day: "Wed", icon: "🌧️", max: 19, min: 12 },
    { day: "Thu", icon: "🌤️", max: 22, min: 13 },
    { day: "Fri", icon: "☀️", max: 26, min: 15 },
    { day: "Sat", icon: "☀️", max: 27, min: 16 },
    { day: "Sun", icon: "⛅", max: 25, min: 15 },
  ],
};

const el = (id) => document.getElementById(id);

function renderCurrent(place, c) {
  el("place-name").textContent = place.name;
  el("place-detail").textContent = [place.admin, place.country]
    .filter(Boolean)
    .join(", ");
  el("current-icon").textContent = c.icon;
  el("current-desc").textContent = c.desc;
  el("current-temp").textContent = `${c.temp}°`;
  el("feels-like").textContent = `Feels like ${c.feelsLike}°`;
  el("wind").textContent = `${c.wind} km/h`;
  el("humidity").textContent = `${c.humidity}%`;
  el("precip").textContent = `${c.precip.toFixed(1)} mm`;
  el("pressure").textContent = `${c.pressure} hPa`;
  el("current-card").classList.remove("hidden");
}

function renderHourly(hours) {
  const list = el("hourly-list");
  list.innerHTML = "";
  for (const h of hours) {
    const tile = document.createElement("div");
    tile.className = "hour-tile";
    tile.innerHTML = `
      <span class="time">${h.time}</span>
      <span class="icon">${h.icon}</span>
      <span class="temp">${h.temp}°</span>
    `;
    list.appendChild(tile);
  }
  el("hourly-card").classList.remove("hidden");
}

function renderDaily(days) {
  const list = el("daily-list");
  list.innerHTML = "";
  for (const d of days) {
    const row = document.createElement("div");
    row.className = "day-row";
    row.innerHTML = `
      <span class="day-name">${d.day}</span>
      <span class="icon">${d.icon}</span>
      <span class="range">
        <strong>${d.max}°</strong>
        / ${d.min}°
      </span>
    `;
    list.appendChild(row);
  }
  el("daily-card").classList.remove("hidden");
}

function render(mock) {
  renderCurrent(mock.place, mock.current);
  renderHourly(mock.hourly);
  renderDaily(mock.daily);
}

// Search just relabels the card in demo mode
el("search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = el("search-input").value.trim();
  if (!q) return;
  MOCK.place = { name: q, admin: "Demo", country: "Placeholder" };
  render(MOCK);
  el("search-input").value = "";
});

el("locate-btn").addEventListener("click", () => {
  MOCK.place = { name: "My Location", admin: "Demo", country: "Placeholder" };
  render(MOCK);
});

// Show the demo result immediately on load
render(MOCK);
