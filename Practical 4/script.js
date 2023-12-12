let currentRow = 2; // Starting multiplication table from 2
let intervalId;

function generateTable() {
  let table = document.createElement('table');
  table.innerHTML = '<tr><th>Multiplier</th><th>Result</th></tr>';

  for (let i = 1; i <= 10; i++) {
    let result = currentRow * i;
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.textContent = `${currentRow} x ${i}`;
    cell2.textContent = result;
  }

  document.body.appendChild(table);

  // Apply styling
  applyStyles(table);
}

function applyStyles(table) {
  let fontSize = 16 + currentRow * 2;
  table.style.fontSize = fontSize + 'px';
  table.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function showNextRow() {
  generateTable();
  currentRow++;

  // Stop after the 10th row
  if (currentRow > 10) {
    clearInterval(intervalId);
  }
}

// Set interval to display rows every 5 seconds
intervalId = setInterval(showNextRow, 5000);

// Initial call to start the process
showNextRow();
