document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'ko',
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'title',
        right: 'prev,next today'
      },
      events: {
        googleCalendarApiKey: 'AIzaSyA_a2KxWwdBijNAwSQY2jurgoctyeIW6Ow',
        googleCalendarId: '655f9e0f0e83c29de231a3e7d650fe39bfe082b493f57719c2d1994bf6651e9d@group.calendar.google.com',
        className: 'gcal-event'
      },
      eventClick: function(info) {
        info.jsEvent.stopPropagation();
        info.jsEvent.preventDefault();  
        location.href = "http://ktf365.org/";
      }
    });
    calendar.render();
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl2 = document.getElementById('calendar2');

  var calendar = new FullCalendar.Calendar(calendarEl2, {
  locale: 'ko',
  initialView: 'listWeek',
  headerToolbar: {
    left: 'title',
    right: 'prev,next today'
  },
  events: {
    googleCalendarApiKey: 'AIzaSyA_a2KxWwdBijNAwSQY2jurgoctyeIW6Ow',
    googleCalendarId: '655f9e0f0e83c29de231a3e7d650fe39bfe082b493f57719c2d1994bf6651e9d@group.calendar.google.com',
    className: 'gcal-event'
  },
  eventClick: function(info) {
    info.jsEvent.stopPropagation();
    info.jsEvent.preventDefault();  
    location.href = "https://www.naver.com";
  }

  });
  calendar.render();
});

var detailinfoj1 = document.getElementById('detailinfoj1');
detailinfoj1.addEventListener('click', function () {
  window.open("infodetailj1.html", "a", "width=580, height=700, left=500, top=100");
})

var detailinfoj2 = document.getElementById('detailinfoj2');
detailinfoj2.addEventListener('click', function () {
  window.open("infodetailj2.html", "a", "width=580, height=700, left=500, top=100");
})

var detailinfoj3 = document.getElementById('detailinfoj3');
detailinfoj3.addEventListener('click', function () {
  window.open("infodetailj3.html", "a", "width=580, height=700, left=500, top=100");
})

var detailinfos1 = document.getElementById('detailinfos1');
detailinfos1.addEventListener('click', function () {
  window.open("infodetails1.html", "a", "width=580, height=700, left=500, top=100");
})

var detailinfos2 = document.getElementById('detailinfos2');
detailinfos2.addEventListener('click', function () {
  window.open("infodetails2.html", "a", "width=580, height=700, left=500, top=100");
})

var detailinfos3 = document.getElementById('detailinfos3');
detailinfos3.addEventListener('click', function () {
  window.open("infodetails3.html", "a", "width=580, height=700, left=500, top=100");
})