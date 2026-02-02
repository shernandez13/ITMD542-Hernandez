document.addEventListener('DOMContentLoaded', () => {
  // ----- DOM -----
  const monthYear     = document.getElementById('month-year');
  const daysContainer = document.getElementById('days');
  const prevButton    = document.getElementById('prev');
  const nextButton    = document.getElementById('next');
  const dayLabel      = document.getElementById('dayLabel');
  const eventList     = document.getElementById('eventList');
  const filtersForm   = document.getElementById('filters');
  const qInput        = document.getElementById('q');

  // ----- Data / helpers -----
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const today  = new Date();
  const ymd = (d) => {
    const dd = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const y  = dd.getFullYear();
    const m  = String(dd.getMonth() + 1).padStart(2, '0');
    const da = String(dd.getDate()).padStart(2, '0');
    return `${y}-${m}-${da}`;
  };
