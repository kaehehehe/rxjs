const Rx = require('rxjs');
const { take, tap, filter, map, reduce } = require('rxjs/operators');

const stream = Rx.from([1, 2, 3, 4, 5,]);

// ⭐tap

stream.pipe(
  tap(data => {
    console.log("한번 읽었다!", data);
  }),
  tap(data => {
    console.log("두번째 읽었다!", data);
  }),
).subscribe({
  next: () => { }
});

/*
-- 출력 결과 --
한번 읽었다! 1
두번째 읽었다! 1
한번 읽었다! 2
두번째 읽었다! 2
한번 읽었다! 3
두번째 읽었다! 3
한번 읽었다! 4
두번째 읽었다! 4
한번 읽었다! 5
두번째 읽었다! 5
 */


// ⭐filter

stream.pipe(
  filter(data => data > 3)
).subscribe(console.log); // 4, 5

// ⭐map

stream.pipe(
  map(data => data * 1),
  map(data => data * 2)
).subscribe(console.log); // 2, 4, 6, 8, 10

// ⭐reduce

stream.pipe(
  reduce((prev, data) => {
    return prev + data;
  })
).subscribe(console.log); // 15