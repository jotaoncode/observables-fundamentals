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

const startPayment = async () => {
  let paymentState = {
    operations: []
  };
  const setPaymentState = (op) => {
    paymentState.operations.push(op);
  };

  const subscribeToStream = (stream, observer) => new Promise((resolve, reject) => stream.subscribe(observer, reject, resolve));

  const startPaymentStream = (stream, paymentState) => subscribeToStream(stream, setPaymentState);

  await startPaymentStream($apiValues, paymentState);

  console.log(paymentState);

};

startPayment();

