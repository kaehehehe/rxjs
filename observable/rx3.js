const Rx = require('rxjs');
const { take } = require('rxjs/operators');

const stream1 = Rx.from([1, 2, 3, 4, 5]);
const stream2 = Rx.from([6, 7, 8, 9, 10]);

// ⭐concat
Rx.concat(stream1, stream2).subscribe({
  next: console.log // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
});

const stream3 = Rx.interval(1000).pipe(take(2));
const stream4 = Rx.interval(1000).pipe(take(2));

Rx.concat(stream3, stream4).subscribe(console.log); // 0, 1, 0, 1 순으로 출력이 됨

// ⭐merge -> 병렬처리를 함
Rx.merge(stream3, stream4).subscribe(console.log); // 0 0, 1 1 순으로 출력이 됨


