function checkBall(el) {
  const num = String(el).split('').reverse();

  if (+num[0] > 4 || +num[0] === 0 || +num[1] === 1) {
    return 'баллов';
  }

  if (+num[0] === 1) {
    return 'балл';
  }

  return 'балла';
}

export default checkBall;
