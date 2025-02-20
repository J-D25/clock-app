const main = document.querySelector("main");
/* Worldtime */
fetch("https://worldtimeapi.org/api/ip").then((response) => response.json().then((worldtime) => {
    if (worldtime) {
        /* Converting UNIX to time */
        let unixTimestamp = worldtime.unixtime;
        let utcOffset = worldtime.utc_offset;
        // JavaScript works in milliseconds, convert time into milliseconds by multiplying it by 1000.
        let date = new Date((unixTimestamp + (parseInt(utcOffset) * 3600)) * 1000);
        // Hours part from the timestamp
        let hours = date.getUTCHours();
        // Minutes part from the timestamp
        let minutes = date.getUTCMinutes();
        if (minutes < 10) {
            minutes = "0" + date.getUTCMinutes();
        }
        // Will display time in 11:10 format
        let formatTime = hours + ':' + minutes;
        /* End converting UNIX to time */

        // Greetings
        let greetings = 'good ';
        if (hours >= 5 && hours <= 11) {
            greetings += 'morning';
        } else if (hours >= 12 && hours <= 17) {
            greetings += 'afternoon';
        } else {
            greetings += 'evening';
        }

        let currentWeather = "moon";
        if (hours >= 5 && hours <= 17) {
            currentWeather = "sun";
        }

        const currentlyPicto = document.querySelector('.currently_picto');
        const greeting = document.getElementById('greeting');
        const currentHour = document.getElementById('currently_hour');
        const abbreviation = document.getElementById('abbreviation');
        const currentTimezone = document.getElementById('current_timezone_span');
        const dayYear = document.getElementById('day_of_the_year_span');
        const dayWeek = document.getElementById('day_of_the_week_span');
        const weekNumber = document.getElementById('week_number_span');

        if (currentWeather === "moon") {
            main.classList.add("night");
        } else {
            if (main.classList.contains("night")) {
                main.classList.remove("night");
            }
        }

        currentlyPicto.setAttribute("src", "assets/images/desktop/icon-" + currentWeather + ".svg");
        greeting.textContent = greetings;
        currentHour.textContent = formatTime;
        currentHour.setAttribute("datetime", date.toISOString().slice(0, 19));
        abbreviation.textContent = worldtime.abbreviation;
        currentTimezone.textContent = worldtime.timezone;
        dayYear.textContent = worldtime.day_of_year;
        dayWeek.textContent = worldtime.day_of_week;
        weekNumber.textContent = worldtime.week_number;
    }
}));

/* Citation */
function getQuote() {
    fetch("https://api.quotable.io/random").then((response) => response.json().then((quote) => {
        if (quote.content) {
            document.getElementById('quote_citation').textContent = `“` + quote.content + `”`;
        }
        if (quote.author) {
            document.getElementById('quote_author').textContent = quote.author;
        }
    }));
}
getQuote(); // Lancement au chargement du script
const quoteRefresh = document.getElementById("quote_refresh");
quoteRefresh.addEventListener("click", (e) => {
    getQuote(); // Lancement au clic sur le bouton
})

/* GeoApi */
fetch("http://ip-api.com/json/").then((response) => response.json().then((geo) => {
    if (geo) {
        const citySpan = document.getElementById('city');
        const countrySpan = document.getElementById('country');
        citySpan.textContent = geo.city;
        countrySpan.textContent = geo.countryCode;
    }
}));

/* Button More */
const btnMore = document.getElementById("more");
const btnMoreText = document.getElementById("more_text");
let expand = 0;
btnMore.addEventListener("click", () => {
    expand++;
    btnMore.classList.toggle("less");
    if (expand % 2 === 0) {
        btnMoreText.textContent = "more";
    } else {
        btnMoreText.textContent = "less";
    }
    main.classList.toggle("expand");
})