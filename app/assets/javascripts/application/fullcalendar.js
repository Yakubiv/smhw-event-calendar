$(document).on('turbolinks:load', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['dayGrid'],
    header: {
        left: '',
        center: 'title'
      },
    events: '/events.json',
  });

  calendar.render();
});