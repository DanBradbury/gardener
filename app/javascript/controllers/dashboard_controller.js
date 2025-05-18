import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["weatherForecast"];

  connect() {
    this.renderWeatherForecast();
    this.setCurrentDate();
  }

  renderWeatherForecast() {
    // Weather data
    const weatherForecast = [
      { day: "Today", temp: 72, condition: "Sunny", icon: "sun" },
      { day: "Tomorrow", temp: 68, condition: "Cloudy", icon: "cloud" },
      { day: "Wednesday", temp: 65, condition: "Rain", icon: "cloud-rain" },
      { day: "Thursday", temp: 70, condition: "Partly Cloudy", icon: "cloud" },
      { day: "Friday", temp: 75, condition: "Sunny", icon: "sun" },
    ];

    // Weather Icons SVG paths
    const weatherIcons = {
      sun: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>`,
      cloud: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>`,
      "cloud-rain": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="16" y1="13" x2="16" y2="21"></line>
                      <line x1="8" y1="13" x2="8" y2="21"></line>
                      <line x1="12" y1="15" x2="12" y2="23"></line>
                      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
                    </svg>`,
    };

    // Render weather forecast
    this.weatherForecastTarget.innerHTML = ""; // Clear existing content
    weatherForecast.forEach((day) => {
      const weatherCard = document.createElement("div");
      weatherCard.className = "weather-card";

      weatherCard.innerHTML = `
        <p class="weather-day">${day.day}</p>
        <div class="weather-icon">${weatherIcons[day.icon]}</div>
        <p class="weather-temp">${day.temp}°F</p>
        <p class="weather-condition">${day.condition}</p>
      `;

      this.weatherForecastTarget.appendChild(weatherCard);
    });
  }

  setCurrentDate() {
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = now.toLocaleDateString("en-US", options);
    document.querySelector(".current-date").textContent = formattedDate;
  }
}

