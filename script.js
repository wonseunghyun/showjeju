document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'title',
        right: 'prev,next today'
      },
      googleCalendarApiKey: 'AIzaSyD24l6QwHnqT0FGyz_X5VDmKhEs8m9a7EY',
      events: {
        googleCalendarId: '655f9e0f0e83c29de231a3e7d650fe39bfe082b493f57719c2d1994bf6651e9d@group.calendar.google.com',
        className: 'gcal-event'
      }
    });
    calendar.render();
  });