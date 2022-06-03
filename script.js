// Przypisy stałych
const btn = document.querySelector('#btn');
const table = document.querySelector('main table');
const blank = document.querySelector('.blank');
const [ax, bx] = document.querySelectorAll('.ox');
const [ay, by] = document.querySelectorAll('.oy');

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

function getD(deltaX, deltaY) {
  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

function updateValues() {
  const pos = {
    // Wpisanie liczb
    [ax.name]: Number(ax.value),
    [ay.name]: Number(ay.value),
    [bx.name]: Number(bx.value),
    [by.name]: Number(by.value),
  };

  if (!pos.ax || !pos.ay || !pos.bx || !pos.by) return 0; // Jeżeli nie ma pełnych danych nie wykona się obliczenie

  [ax, ay, bx, by].forEach((el) => {
    // Czyszczenie pól po obliczeniach
    el.value = '';
  });

  const [deltaX, deltaY] = [pos.bx - pos.ax, pos.by - pos.ay]; // Liczenie przyrostów

  const A = getA(deltaX, deltaY); // Obliczenie azymutu (Widok na stronie)
  const D = getD(deltaX, deltaY); // Obliczenie długości (Widok na stronie)

  const row = document.createElement('tr'); // Tworzenie linijki
  const values = [pos.ax, pos.ay, pos.bx, pos.by, A.toFixed(4), D.toFixed(4)];
  for (let i = 0; i < values.length; i++) {
    // Tworzenie 6 komórek, początek pętli
    const td = document.createElement('td');
    td.innerText = values[i];
    row.append(td);
  } // koniec pętli
  blank.remove(); // Usuwanie napisu w tabelce
  table.append(row); // Wypisanie linijki na stronie
}
btn.addEventListener('click', updateValues);
