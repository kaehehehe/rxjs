const Rx = require('rxjs');

const deliveries = ['delivery1', 'delivery2', 'delivery3'];

const stream = Rx.from(deliveries);

stream.subscribe({
  next: (data) => {
    console.log(data);
  },
  complete: () => {
    console.log('complete');
  },
  error: () => {
    console.log('error');
  }
});

function makePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('delivery');
    }, 3000);
  });
}

Rx.from(makePromise()).subscribe({
  next: (data) => {
    console.log(data); // 3초 뒤에 log가 출력이 됨
  }
});

// 싱글 여러 데터로 부 만들기 (of)
Rx.of('첫번째 택배', '두번째 택배', '세번째 택배').subscribe({
  next: (data) => {
    console.log(data);
  }
});