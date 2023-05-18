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

var detailinfo1 = document.getElementById('detailinfo1');
detailinfo1.addEventListener('click', function () {
  window.open("infodetail.html", "a", "width=500, height=700, left=500, top=100");
})

var detailinfo2 = document.getElementById('detailinfo2');
detailinfo2.addEventListener('click', function () {
  window.open("infodetail.html", "a", "width=500, height=700, left=500, top=100");
})

var detailinfo3 = document.getElementById('detailinfo3');
detailinfo3.addEventListener('click', function () {
  window.open("infodetail.html", "a", "width=500, height=700, left=500, top=100");
})

var detailinfo4 = document.getElementById('detailinfo4');
detailinfo4.addEventListener('click', function () {
  window.open("infodetail.html", "a", "width=500, height=700, left=500, top=100");
})

var detailinfo5 = document.getElementById('detailinfo5');
detailinfo5.addEventListener('click', function () {
  window.open("infodetail.html", "a", "width=500, height=700, left=500, top=100");
})

var detailinfo6 = document.getElementById('detailinfo6');
detailinfo6.addEventListener('click', function () {
  window.open("infodetail.html", "a", "width=500, height=700, left=500, top=100");
})