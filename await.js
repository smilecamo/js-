function sleep(delay = 2000) {
  return new Promise(resolve => {
    // resolve();
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

async function user() {
  for (let value of ['小苗', 'ali']) {
    // console.log(value);
    await sleep();
    console.log(value);
  }
}
user();
