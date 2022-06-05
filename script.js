// Przypisy stałych
const btn = document.querySelector('#btn');
const table = document.querySelector('main table');
const [xa, xb] = document.querySelectorAll('.ox');
const [ya, yb] = document.querySelectorAll('.oy');

// Liczenie azymutu
function getA(deltaX, deltaY) {
  if (deltaX === 0 || deltaY === 0) {
    // Szczególne przypadki
    if (deltaX === deltaY) {
      return 0;
    }
    if (deltaX === 0) {
      return deltaY > 0 ? 100 : 300;
    } else {
      return deltaX > 0 ? 0 : 200;
    }
  } else {
    // Normalny wzór
    const phi = deltaX < 0 ? 200 : deltaY < 0 ? 400 : 0; // Czwartak
    const arctg = math.unit(math.atan(deltaY / deltaX), 'rad').toNumber('grad'); // ARCTG
    return arctg + phi;
  }
}

// Liczenie długości?
function getD(deltaX, deltaY) {
  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

function addDelEvent(row) {
  // document.createElement('tr').lastChild.lastChild
  const delButton = row.lastChild.lastChild;
  delButton.addEventListener('click', function () {
    this.parentElement.parentElement.remove();
    if (table.children[0].children.length === 1)
      table.children[0].append(createRow());
  });
}

function createRow(values = '') {
  if (values) {
    const row = document.createElement('tr');
    for (let i = 0; i < values.length; i++) {
      const td = document.createElement('td');
      if (i === values.length - 2) td.classList.add('last');
      td.innerHTML = values[i];
      row.append(td);
    }

    return row;
  }
  const row = document.createElement('tr');
  const td = document.createElement('td');
  row.classList.add('blank');
  td.setAttribute('colspan', '6');
  td.innerText = 'Tutaj pojawiają się wyniki...';
  row.append(td);
  return row;
}

function updateValues() {
  const pos = {
    // Wpisanie liczb
    [xa.name]: Number(xa.value),
    [ya.name]: Number(ya.value),
    [xb.name]: Number(xb.value),
    [yb.name]: Number(yb.value),
  };

  if (!pos.xa || !pos.ya || !pos.xb || !pos.yb) return 0; // Jeżeli nie ma pełnych danych nie wykona się obliczenie

  [xa, ya, xb, yb].forEach((el) => {
    // Czyszczenie pól po obliczeniach
    el.value = '';
  });

  const [deltaX, deltaY] = [pos.xb - pos.xa, pos.yb - pos.ya]; // Liczenie przyrostów

  const A = getA(deltaX, deltaY); // Obliczenie azymutu (Widok na stronie)
  const D = getD(deltaX, deltaY); // Obliczenie długości (Widok na stronie)

  // Tworzenie linijki
  const values = [
    ...Object.values(pos),
    A.toFixed(4),
    D.toFixed(4),
    '<button>X</button>',
  ]; // Zebranie danych do tableki

  if (document.querySelector('.blank'))
    document.querySelector('.blank').remove(); // Usuwanie napisu w tabelce

  const row = createRow(values); // Stworzenie linijki z wynikami
  addDelEvent(row);
  table.children[0].append(row); // Wypisanie linijki na stronie
}
btn.addEventListener('click', updateValues);
