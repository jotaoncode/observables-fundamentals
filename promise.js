const toBeResolved = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I was resolved after 1 sec');
    }, 1000);
  });
};

