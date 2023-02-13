(() => {
  let cash: number = 25;

  console.log(cash);

  const price: number = 50;

  if (cash < price) {
    console.log('You can not buy this');
  } else {
    console.log('Thanks for your purchase');
  }

  cash = Number('$55');

  console.log({ cash });
})();
