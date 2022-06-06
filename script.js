fetch("http://worldtimeapi.org/api/ip").then((response) => response.json().then((data) =>{
/* Converting UNIX to time */
    let unixTimestamp = data.unixtime
    //Since JavaScript works in milliseconds, you should convert 
    // the time into milliseconds by multiplying it by 1000.
    let date = new Date(unixTimestamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Will display time in 11:10 format
    let formatTime = hours + ':' + minutes.substr(-2);
/* End converting UNIX to time */

 //Good morning...
 let good = '';
 if (hours >= 5 && hours <= 11) {
    good = 'morning';
 } else if (hours >= 12 && hours <= 17) {
    good = 'afternoon';
 } 
 else {
    good = 'evening';
 }

///////// Insertion auto si les élements SPAN avec les ID existent dans le HTML
    document.getElementById('current_timezone_span').textContent = data.timezone;
    document.getElementById('day_of_the_year_span').textContent = data.day_of_year;
    document.getElementById('day_of_the_week_span').textContent = data.day_of_week;
    document.getElementById('week_number_span').textContent = data.week_number;
    document.getElementById('good_day').textContent = `good `+good;
    document.getElementById('currently_hour').textContent = formatTime;
    document.getElementById('abbreviation').textContent = data.abbreviation;
/////////

///////// Création et insertion des éléments SPAN dans l'HTML
// let infoContent = document.getElementById("info_content");
    
//     let currentTimezone = document.getElementById("current_timezone");
//     const currentTimezone_span = document.createElement("SPAN");
//     let currentTimezone_spanContent = document.createTextNode(data.timezone);
//     currentTimezone_span.appendChild(currentTimezone_spanContent);
//     currentTimezone_span.setAttribute("id", "current_timezone_span");
//     currentTimezone_span.setAttribute("class", "info_content_span");
//     infoContent.insertBefore(currentTimezone_span, currentTimezone.nextSibling);

//     let dayOfTheYear = document.getElementById("day_of_the_year");
//     const dayOfTheYear_span = document.createElement("SPAN");
//     let dayOfTheYear_spanContent = document.createTextNode(data.day_of_year);
//     dayOfTheYear_span.appendChild(dayOfTheYear_spanContent);
//     dayOfTheYear_span.setAttribute("id", "day_of_the_year_span");
//     dayOfTheYear_span.setAttribute("class", "info_content_span");
//     infoContent.insertBefore(dayOfTheYear_span, dayOfTheYear.nextSibling);

//     let dayOfTheWeek = document.getElementById("day_of_the_week");
//     const dayOfTheWeek_span = document.createElement("SPAN");
//     let dayOfTheWeek_spanContent = document.createTextNode(data.day_of_week);
//     dayOfTheWeek_span.appendChild(dayOfTheWeek_spanContent);
//     dayOfTheWeek_span.setAttribute("id", "day_of_the_week_span");
//     dayOfTheWeek_span.setAttribute("class", "info_content_span");
//     infoContent.insertBefore(dayOfTheWeek_span, dayOfTheWeek.nextSibling);

//     let weekNumber = document.getElementById("week_number");
//     const weekNumber_span = document.createElement("SPAN");
//     let weekNumber_spanContent = document.createTextNode(data.week_number);
//     weekNumber_span.appendChild(weekNumber_spanContent);
//     weekNumber_span.setAttribute("id", "week_number_span");
//     weekNumber_span.setAttribute("class", "info_content_span");
//     infoContent.insertBefore(weekNumber_span, weekNumber.nextSibling);

// let mainContent = document.getElementById("main_content");
// let currently = document.getElementById('currently')

//     const goodDay_span = document.createElement("SPAN");
//     let goodDay_spanContent = document.createTextNode(`good `+good);
//     goodDay_span.appendChild(goodDay_spanContent);
//     goodDay_span.setAttribute("id", "good_day");
//     mainContent.insertBefore(goodDay_span, currently);

//     const currentlyHour_span = document.createElement("SPAN");
//     let currentlyHour_spanContent = document.createTextNode(formatTime);
//     currentlyHour_span.appendChild(currentlyHour_spanContent);
//     currentlyHour_span.setAttribute("id", "currently_hour");
//     mainContent.insertBefore(currentlyHour_span, currently.nextSibling);

//     const abbreviation_span = document.createElement("SPAN");
//     let abbreviation_spanContent = document.createTextNode(data.abbreviation);
//     abbreviation_span.appendChild(abbreviation_spanContent);
//     abbreviation_span.setAttribute("id", "abbreviation");
//     let currently_hour = document.getElementById('currently_hour')
//     mainContent.insertBefore(abbreviation_span, currently_hour.nextSibling);
/////////
}));

fetch("https://programming-quotes-api.herokuapp.com/Quotes/random").then((response) => response.json().then((quote) =>{
///////// Insertion auto si les élements SPAN avec les ID existent dans le HTML
    document.getElementById('quote_citation').textContent =`"`+quote.en+`"`;
    document.getElementById('quote_author').textContent = quote.author;
/////////

///////// Création et insertion des éléments SPAN dans l'HTML
    // let goodDay = document.getElementById("good_day");
    // let mainContent = document.getElementById("main_content");

    // const quoteCitation_span = document.createElement("SPAN");
    // let quoteCitation_spanContent = document.createTextNode(`"`+quote.en+`"`);
    // quoteCitation_span.appendChild(quoteCitation_spanContent);
    // quoteCitation_span.setAttribute("id", "quote_citation");
    // mainContent.insertBefore(quoteCitation_span, goodDay);

    // const quoteAuthor_span = document.createElement("SPAN");
    // let quoteAuthor_spanContent = document.createTextNode(quote.author);
    // quoteAuthor_span.appendChild(quoteAuthor_spanContent);
    // quoteAuthor_span.setAttribute("id", "quote_author");
    // mainContent.insertBefore(quoteAuthor_span, quoteCitation_span.nextSibling);
/////////
}));

fetch("https://geolocation-db.com/json/").then((response) => response.json().then((geo) =>{
///////// Insertion auto si les élements SPAN avec les ID existent dans le HTML
    document.getElementById('city').textContent = geo.city+", ";
    document.getElementById('country').textContent = geo.country_code;
/////////

///////// Création et insertion des éléments SPAN dans l'HTML
    // let inCity = document.getElementById("in");
    // let mainContent = document.getElementById("main_content");

    // const city_span = document.createElement("SPAN");
    // let city_spanContent = document.createTextNode(geo.city+", ");
    // city_span.appendChild(city_spanContent);
    // city_span.setAttribute("id", "city");
    // mainContent.insertBefore(city_span, inCity.nextSibling);

    // const country_span = document.createElement("SPAN");
    // let country_spanContent = document.createTextNode(geo.country_code);
    // country_span.appendChild(country_spanContent);
    // country_span.setAttribute("id", "country");
    // mainContent.insertBefore(country_span, city_span.nextSibling);
/////////
}));