const Rx = require('rxjs');
const { take } = require('rxjs/operators');

// ⭐interval

// 1초에 한번씩 이벤트가 발생하는 Observable
const stream = Rx.interval(1000);

// take : 10개만 데이터를 받을게!
stream.pipe(take(10)).subscribe({
  next: data => {
    console.log(data);
  }
});

// ----------------

// ⭐timer

// 3초 기다렸다가 1초씩 이벤트를 발생시킴
const stream2 = Rx.timer(3000, 1000);

stream2.pipe(take(10)).subscribe({
  next: data => {
    console.log(data);
  }
});





