const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre"];
const eventData = {
    "events": [
      {
        "name": "1era Fecha CUK",
        "location": "CEDEC",
        "date": "25 Marzo 2023",
        "day": "25",
        "month": "marzo",
        "year": "2023"
      },
      {
        "name": "Sudamericano Juv. y Adultos",
        "location": "SAN PABLO",
        "date": "24 al 30 Abril 2023",
        "day": "24",
        "month": "abril",
        "year": "2023"
      },
      {
        "name": "2da Fecha CUK",
        "location": "CEDEC",
        "date": "13 Mayo 2023",
        "day": "13",
        "month": "mayo",
        "year": "2023"
      },
      {
        "name": "Panamericano Adultos",
        "location": "COSTA RICA",
        "date": "21 al 28 Mayo 2023",
        "day": "21",
        "month": "mayo",
        "year": "2023"
      },
      {
        "name": "3da Fecha CUK",
        "location": "CEDEC",
        "date": "01 Julio 2023",
        "day": "1",
        "month": "julio",
        "year": "2023"
      },
      {
        "name": "Panamericano Juvenil",
        "location": "CHILE",
        "date": "25 al 27 Agosto 2023",
        "day": "25",
        "month": "agosto",
        "year": "2023"
      },
      {
        "name": "4da Fecha CUK",
        "location": "CEDEMCAR",
        "date": "24 Septiembre 2023",
        "day": "24",
        "month": "setiembre",
        "year": "2023"
      },
      {
        "name": "Juegos Panamericanos",
        "location": "SANTIAGO DE CHILE",
        "date": "20 Octubre 2023",
        "day": "20",
        "month": "octubre",
        "year": "2023"
      },
      {
        "name": "Juegos Panamericanos",
        "location": "SANTIAGO DE CHILE",
        "date": "5 Noviembre 2023",
        "day": "5",
        "month": "noviembre",
        "year": "2023"
      },
      {
        "name": "5da Fecha CUK",
        "location": "Canelones",
        "date": "19 Noviembre 2023",
        "day": "19",
        "month": "noviembre",
        "year": "2023"
      },
      {
        "name": "Open Internacional Rankeable",
        "location": "MALDONADO",
        "date": "2 y 3 Diciembre 2023",
        "day": "2",
        "month": "diciembre",
        "year": "2023"
      },
      {
        "name": "Campeonato Nacional Ceremonia de Clausura",
        "location": "CEDEC",
        "date": "16 Diciembre 2023",
        "day": "16",
        "month": "diciembre",
        "year": "2023"
      }
    ]
  };

let actualDate = new Date();
let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const calendarMonth = document.querySelector(".calendar__month__name");
const calendarYear = document.querySelector(".calendar__year");
const calendarDaysContainer = document.querySelector(".calendar__days__container");
const calendarArrowLeft = document.querySelector(".calendar__arrow-left");
const calendarArrowRight = document.querySelector(".calendar__arrow-right");

calendarMonth.innerHTML = monthNames[currentMonthNumber];
calendarYear.innerHTML = currentYear.toString()

const calendarEventsContainer = document.querySelector(".calendar__events__container");

const writeEvents = (month, year) => {
    calendarEventsContainer.innerHTML = "";
    let eventsInMonth = eventData.events.filter(event => event.month == month && event.year == year);

    if (eventsInMonth == 0) {
        calendarEventsContainer.innerHTML = `
            <div class="no__events">No hay eventos en este mes</div>
        `;
    } else {
        eventsInMonth.forEach(event => {
            calendarEventsContainer.innerHTML += `
                <div class="calendar__event">
                    <div class="calendar__event__top">
                        <h4 class="calendar__event__title">${event.name}</h4>
                    </div>
                    <div class="calendar__event__content">
                        <p class="event__location">${event.location}</p>
                        <p class="event__date">${event.date}</p>
                    </div>
                </div>
            `;
        })
    }

    writeMonthDays(currentMonthNumber, eventsInMonth)
}

const writeMonthDays = (month, eventsInMonth) => {

    let daysWrited = 0;
    let eventsWrited = 0;

    calendarDaysContainer.innerHTML = "";

    for (let i = startDay(); i > 0; i--) {
        calendarDaysContainer.innerHTML += `<div class="calendar__day"></div>`;
        daysWrited++;
    }

    for (let i = 1; i <= getTotalDays(month); i++) {
        if (i == currentDay && month == actualDate.getMonth()) {
            calendarDaysContainer.innerHTML += `<div class="calendar__day"><div class="calendar__day__today">${i}</div></div>`;
        } else if (eventsWrited < eventsInMonth.length && i == eventsInMonth[eventsWrited].day) {
            calendarDaysContainer.innerHTML += `
            <div class="calendar__day">
                <div class="event__day" data-description="${eventsInMonth[eventsWrited].name}">
                    ${i}
                </div>
            </div>`;
            eventsWrited++;
        } else {
            calendarDaysContainer.innerHTML += `<div class="calendar__day">${i}</div>`;
        }
        daysWrited++;
    }

    for (; daysWrited < 42; daysWrited++) {
        calendarDaysContainer.innerHTML += `<div class="calendar__day"></div>`;
    }

}

// si son 28, 29, 30 o 31 dias
const getTotalDays = (month) => {
    if (month == -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;
    } else {
        if (isLeap()) {
            return 29;
        } else {
            return 28;
        }
    }
}

// año bisiesto
const isLeap = () => {
    return ((currentYear % 100 !== 0) && (currentYear % 4 === 0) || (currentYear % 400 === 0))
}

// dia donde empieza la semana
const startDay = () => {
    let start = new Date(currentYear, currentMonthNumber, 1);
    if (start.getDay() === 0) {
        return 6;
    } else {
        return (start.getDay() - 1); // dia acomodado, empezando por lunes
    }
    
}

const lastMonth = () => {
    if (currentMonthNumber !== 0) {
        currentMonthNumber--;
    } else {
        currentMonthNumber = 11;
        currentYear--;
    }
    setNewDate();
    writeEvents(monthNames[currentMonthNumber], currentYear);
}

const nextMonth = () => {
    if (currentMonthNumber !== 11) {
        currentMonthNumber++;
    } else {
        currentMonthNumber = 0;
        currentYear++;
    }
    setNewDate();
    writeEvents(monthNames[currentMonthNumber], currentYear);
}

// nueva fecha al mover el calendario
const setNewDate = () => {
    currentDate.setFullYear(currentYear, currentMonthNumber, currentDay);
    calendarMonth.innerHTML = monthNames[currentMonthNumber];
    calendarYear.innerHTML = currentYear.toString();

    calendarDaysContainer.innerHTML = "";
    writeEvents(monthNames[currentMonthNumber], currentYear);
}


calendarArrowLeft.addEventListener("click", lastMonth);
calendarArrowRight.addEventListener("click", nextMonth);


writeEvents(monthNames[currentMonthNumber], currentYear);