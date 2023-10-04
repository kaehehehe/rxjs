const Rx = require('rxjs');
const { concatMap, concatAll, take } = require('rxjs/operators');

const stream = Rx.from(['택배1', '택배2', '택배3']);

function openBox(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data, '상품 개봉');
      resolve(data);
    }, 5000);
  });
}

function checkBox(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data, '상품 검사');
      resolve(data);
    }, 5000);
  });
}

function useProduct(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data, '상품 사용');
      resolve(data);
    }, 5000);
  });
}

async function userTask(data) {
  await openBox(data);
  await checkBox(data);
  await useProduct(data);
}

// concat (map)
stream.pipe(
  concatMap((data) => Rx.from(userTask(data)))
).subscribe();

// concat (all)
const stream2 = Rx.interval(1000).pipe(take(3));
const stream3 = Rx.interval(1000).pipe(take(3));

const stream4 = Rx.of(stream2, stream3);

stream4.pipe(
  concatAll().subscribe()
);
