const { Observable } = require('rxjs');

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

observable.subscribe({
  next: x => console.log('Value: ', x),
  error: y => console.log('error: ', y),
  complete: _ => console.log('complete')
});

