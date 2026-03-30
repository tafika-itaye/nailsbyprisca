// booking.js — Nails by Prisca
// Calendar + Slot booking system
// Slots are stored in localStorage (set by admin, read by users)

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  toggle?.addEventListener('click', () => nav?.classList.toggle('open'));

  // =====================================================
  // SLOT DATA
  // Admin sets slots in admin.html → saved to localStorage
  // Key: 'nbp_slots' → { "2026-04-05": ["09:00","10:30","14:00"], ... }
  // =====================================================

  function getSlots() {
    try {
      return JSON.parse(localStorage.getItem('nbp_slots') || '{}');
    } catch { return {}; }
  }

  // Default demo slots if admin hasn't set any yet
  function ensureDefaultSlots() {
    const existing = getSlots();
    if (Object.keys(existing).length > 0) return;
    const today = new Date();
    const defaults = {};
    // Add slots for next 14 days (skip Sundays)
    for (let i = 1; i <= 20; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      if (d.getDay() === 0) continue; // skip Sunday
      const key = formatDate(d);
      if (d.getDay() === 6) {
        defaults[key] = ['09:00','10:00','11:00','12:00'];
      } else {
        defaults[key] = ['09:00','10:30','12:00','13:30','15:00','16:30'];
      }
    }
    localStorage.setItem('nbp_slots', JSON.stringify(defaults));
  }

  ensureDefaultSlots();

  function formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth()+1).padStart(2,'0');
    const day = String(d.getDate()).padStart(2,'0');
    return `${y}-${m}-${day}`;
  }

  function displayDate(dateStr) {
    const [y,m,d] = dateStr.split('-');
    const date = new Date(y, m-1, d);
    return date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  // =====================================================
  // CALENDAR
  // =====================================================
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const DAYS = ['Mo','Tu','We','Th','Fr','Sa','Su'];

  const today = new Date();
  let viewYear = today.getFullYear();
  let viewMonth = today.getMonth();
  let selectedDate = null;
  let selectedSlot = null;

  const calGrid = document.getElementById('calGrid');
  const calMonth = document.getElementById('calMonth');
  const calPrev = document.getElementById('calPrev');
  const calNext = document.getElementById('calNext');

  function renderCalendar() {
    const slots = getSlots();
    calMonth.textContent = `${MONTHS[viewMonth]} ${viewYear}`;
    calGrid.innerHTML = '';

    // Day headers
    DAYS.forEach(d => {
      const cell = document.createElement('div');
      cell.className = 'cal-cell hdr';
      cell.textContent = d;
      calGrid.appendChild(cell);
    });

    // First day of month (convert Sun=0 to Mon=0)
    const firstDay = new Date(viewYear, viewMonth, 1);
    let startDow = firstDay.getDay(); // 0=Sun
    startDow = startDow === 0 ? 6 : startDow - 1; // Mon=0

    // Empty cells
    for (let i = 0; i < startDow; i++) {
      const cell = document.createElement('div');
      cell.className = 'cal-cell empty';
      calGrid.appendChild(cell);
    }

    // Days
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${viewYear}-${String(viewMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
      const cell = document.createElement('div');
      const isToday = (day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear());
      const isPast = new Date(viewYear, viewMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const hasSlots = slots[dateStr] && slots[dateStr].length > 0;
      const isSelected = dateStr === selectedDate;

      cell.className = 'cal-cell';
      if (isToday) cell.classList.add('today');
      else if (isPast) cell.classList.add('past');
      else if (isSelected) cell.classList.add('selected');
      else if (hasSlots) cell.classList.add('has-slots');

      cell.textContent = day;

      if (hasSlots && !isPast) {
        cell.addEventListener('click', () => selectDate(dateStr));
      }

      calGrid.appendChild(cell);
    }
  }

  function selectDate(dateStr) {
    selectedDate = dateStr;
    selectedSlot = null;
    renderCalendar();
    renderSlots();
  }

  calPrev.addEventListener('click', () => {
    viewMonth--;
    if (viewMonth < 0) { viewMonth = 11; viewYear--; }
    renderCalendar();
  });
  calNext.addEventListener('click', () => {
    viewMonth++;
    if (viewMonth > 11) { viewMonth = 0; viewYear++; }
    renderCalendar();
  });

  // =====================================================
  // SLOTS
  // =====================================================
  const slotsTitle = document.getElementById('slotsTitle');
  const slotsGrid = document.getElementById('slotsGrid');
  const bookingForm = document.getElementById('bookingForm');

  function renderSlots() {
    if (!selectedDate) {
      slotsTitle.textContent = '👆 Select a date to see available slots';
      slotsGrid.innerHTML = '';
      bookingForm.style.display = 'none';
      return;
    }

    const slots = getSlots();
    const times = slots[selectedDate] || [];
    slotsTitle.textContent = `Available on ${displayDate(selectedDate)}`;

    if (times.length === 0) {
      slotsGrid.innerHTML = '<p style="font-size:0.85rem;color:var(--text-light);padding:0.5rem 0">No slots available for this date.</p>';
      bookingForm.style.display = 'none';
      return;
    }

    slotsGrid.innerHTML = times.map(time => `
      <button class="slot-btn ${time === selectedSlot ? 'selected' : ''}" data-time="${time}">
        ${time}
      </button>
    `).join('');

    slotsGrid.querySelectorAll('.slot-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedSlot = btn.dataset.time;
        slotsGrid.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        bookingForm.style.display = 'block';
        bookingForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });

    if (selectedSlot) bookingForm.style.display = 'block';
  }

  // =====================================================
  // SUBMIT → WHATSAPP
  // =====================================================
  document.getElementById('bookSubmit')?.addEventListener('click', () => {
    const name = document.getElementById('bookName').value.trim();
    const service = document.getElementById('bookService').value;
    const note = document.getElementById('bookNote').value.trim();

    if (!selectedDate || !selectedSlot) {
      alert('Please select a date and time slot first.');
      return;
    }
    if (!name) {
      alert('Please enter your name.');
      document.getElementById('bookName').focus();
      return;
    }

    const msg = [
      `Hi Prisca! 🌸 I'd like to book an appointment:`,
      ``,
      `📅 *Date:* ${displayDate(selectedDate)}`,
      `🕐 *Time:* ${selectedSlot}`,
      `👤 *Name:* ${name}`,
      service ? `💅 *Service:* ${service}` : '',
      note ? `📝 *Notes:* ${note}` : '',
      ``,
      `Please confirm this slot. Thank you! 🙏`
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/265889941700?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });

  // Init
  renderCalendar();
  renderSlots();
});
