import { unit, atan } from 'mathjs';

// Liczenie azymutu
export function getA(deltaX: number, deltaY: number) {
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
    const arctg = unit(atan(deltaY / deltaX), 'rad').toNumber('grad'); // ARCTG
    return arctg + phi;
  }
}

// Liczenie długości?
export function getD(deltaX: number, deltaY: number) {
  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}
