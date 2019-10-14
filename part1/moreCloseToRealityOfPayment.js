const { from, concat } = require('rxjs');
const { map } = require('rxjs/operators');

const businessModel = {
  getUserInformation: () => {
    return new Promise((resolve, reject) => {
      setTimeout(_ => {
        resolve({
          operation: 'user information',
        });
      }, 1000);
    });
  },
  calculatePayment: () => {
    return new Promise((resolve, reject) => {
      setTimeout(_ => {
        resolve({
          operation: 'calculation of the payment',
        });
      }, 3000);
    });
  },
  createOrder: () => {
    return new Promise((resolve, reject) => {
      setTimeout(_ => {
        resolve({
          operation: 'creation of the order',
        });
      }, 4000);
    });
  }
};

const $apiValues = concat(
  from(businessModel.getUserInformation()),
  from(businessModel.calculatePayment()),
  from(businessModel.createOrder()),
);

$apiValues.pipe(
  map(x => 'Operation done: ' + x.operation)
).subscribe(console.log, console.error, x => console.log('completed'));
