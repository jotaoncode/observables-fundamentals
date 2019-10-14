const { from, concat } = require('rxjs');
const { map } = require('rxjs/operators');

const $apiValues = concat(
  from(new Promise((resolve, reject) => {
      setTimeout(_ => {
        resolve({
          name: 'juan',
        });
      }, 2000);
    })
  ),
  from(new Promise((resolve, reject) => {
      setTimeout(_ => {
        resolve({
          name: 'alper'
        });
      }, 1000);
    })
  ),
  from(new Promise((resolve, reject) => {
      setTimeout(_ => {
        resolve({
          name: 'nikita'
        });
      }, 5000);
    })
  )
);

$apiValues.pipe(
  map(x => 'Name is ' + x.name)
).subscribe(console.log, console.error, x => console.log('completed'));
