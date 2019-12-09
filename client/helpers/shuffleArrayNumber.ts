export default function shuffle(arr: number[]) {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
/*
  Данная функция использует алгоритм тасование Фишера — Йетса,
  которая выполняется быстрее (в 2-3 раза)
    array.sort(() => Math.random() - 0.5)
*/