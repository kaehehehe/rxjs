const Rx = require('rxjs');
const { take, mergeMap, map, mergeAll, tap } = require('rxjs/operators');

const stream = Rx.interval(1000).pipe(take(3), map(data => `택배${data + 1}`));

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

// merge (map)
stream.pipe(
  mergeMap(data => Rx.from(userTask(data)))
).subscribe();

/*
택배1 상품 개봉
택배2 상품 개봉
택배3 상품 개봉
택배1 상품 검사
택배2 상품 검사
택배3 상품 검사
택배1 상품 사용
택배2 상품 사용
택배3 상품 사용
*/

// merge (all)
const stream2 = Rx.interval(1000).pipe(take(3), tap(console.log));
const stream3 = Rx.interval(1000).pipe(take(3), tap(console.log));

const stream4 = Rx.of(stream2, stream3);

stream4.pipe(
  mergeAll()
).subscribe();
