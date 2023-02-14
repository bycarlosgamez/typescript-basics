(() => {
  const pedal: [string, boolean] = ['mastotron', true];

  // pedal[0] = 10; <= typescrpt throws error
  pedal[1] = false;

  console.log(pedal);
})();
