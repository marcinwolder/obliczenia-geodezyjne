const btn = document.querySelector('#btn');
const table = document.querySelector('main table');
const blank = document.querySelector('.blank');
console.log(table, blank);

const [ax, bx] = document.querySelectorAll('.ox');
const [ay, by] = document.querySelectorAll('.oy');

function getA(deltaX, deltaY) {
  if (deltaX === 0 || deltaY === 0) {
    if (deltaX === deltaY) {
      return 0;
    }
    if (deltaX === 0) {
      return deltaY > 0 ? 100 : 300;
    } else {
      return deltaX > 0 ? 0 : 200;
    }
  } else {
    const phi = deltaX < 0 ? 200 : deltaY < 0 ? 400 : 0;
    console.log('phi', phi);
    const arctg = math.unit(math.atan(deltaY / deltaX), 'rad').toNumber('grad');
    console.log('arctg', arctg);
    return arctg + phi;
  }
}

function updateValues() {
  const pos = {
    [ax.name]: Number(ax.value),
    [ay.name]: Number(ay.value),
    [bx.name]: Number(bx.value),
    [by.name]: Number(by.value),
  };
  [ax, ay, bx, by].forEach((el) => {
    el.value = '';
  });
  const [deltaX, deltaY] = [pos.bx - pos.ax, pos.by - pos.ay];
  const A = getA(deltaX, deltaY);

  console.log(pos);
  console.log('Delta X:', deltaX, 'Delta Y:', deltaY);
  console.log(A.toFixed(4));

  const row = document.createElement('tr');
  const values = [pos.ax, pos.ay, pos.bx, pos.by, A.toFixed(4)];
  for (let i = 0; i < 5; i++) {
    const td = document.createElement('td');
    td.innerText = values[i];
    row.append(td);
  }
  blank.remove();
  table.append(row);
}
btn.addEventListener('click', updateValues);
