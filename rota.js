const rota = [
  { date: '24-04-2023', shift: 'Day', staff: 'John Doe' },
  { date: '23-04-2023', shift: 'Night', staff: 'Jane Doe' },
  { date: '23-04-2023', shift: 'Day', staff: 'Bob Smith' },
];

function renderRota() {
  const rotaTableBody = document.querySelector('#rota-table tbody');
  rotaTableBody.innerHTML = '';
  rota.forEach((shift, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${shift.date}</td>
      <td>${shift.shift}</td>
      <td>${shift.staff}</td>
      <td>
        <button data-index="${index}" class="edit-shift-btn">Edit</button>
        <button data-index="${index}" class="delete-shift-btn">Delete</button>
      </td>
    `;
    rotaTableBody.appendChild(row);
  });
}

function addShift(shift) {
  rota.push(shift);
  renderRota();
}

function editShift(index, shift) {
  rota[index] = shift;
  renderRota();
}

function deleteShift(index) {
  rota.splice(index, 1);
  renderRota();
}

const addShiftBtn = document.querySelector('#add-shift-btn');
addShiftBtn.addEventListener('click', () => {
  const date = prompt('Enter date (MM-DD-YYYY):');
  const shift = prompt(
    'Enter shift ( Morning / Afternoon / All Day / Night ):'
  );
  const staff = prompt('Enter staff name:');
  addShift({ date, shift, staff });
});

const rotaTable = document.querySelector('#rota-table');

rotaTable.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-shift-btn')) {
    const index = event.target.getAttribute('data-index');
    const shift = rota[index];
    const newDate = prompt(`Enter new date (${shift.date})`);
    const newShift = prompt(`Enter new shift (${shift.shift})`);
    const newStaff = prompt(`Enter new staff (${shift.staff})`);
    editShift(index, {
      date: newDate || shift.date,
      shift: newShift || shift.shift,
      staff: newStaff || shift.staff,
    });
  } else if (event.target.classList.contains('delete-shift-btn')) {
    const index = event.target.getAttribute('data-index');
    deleteShift(index);
  }
});

renderRota();
