# Weather App 🌤️

A simple weather showcase app with a modern card-style UI (rounded corners, glassmorphism).

## Features
- Search any city by name
- "Use my location" via browser geolocation
- Current conditions: temperature, feels-like, description, icon
- Info tiles: wind, humidity, precipitation, pressure
- Next 24 hours hourly forecast (scrollable cards)
- 7-day forecast with daily highs/lows

## How to run
No build step needed. It uses the free [Open-Meteo](https://open-meteo.com/) APIs (no API key required).

Option 1 - just open the file:
```
open index.html
```

Option 2 - serve locally:
```bash
cd project/weather-app
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Files
- `index.html` - page structure (cards)
- `style.css` - styling, card view + rounded corners
- `app.js` - geocoding + weather fetching + rendering
