const calcY = (_y: number) => {
  const y = 360 - _y - 40;
  return `${y}px`;
};
const calcX = (_x: number, _width: number) => {
  const x = 65 - _width / 2 + 10 + _x * 140;
  return `${x}px`;
};
const calcLeft = (_index: number) => {
  return `${_index * 140 + 10}px`;
};
export { calcY, calcX, calcLeft };
