document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'ko',
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'title',
        right: 'prev,next today'
      },
      footerToolbar: {
        center: 'prev,next today'
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