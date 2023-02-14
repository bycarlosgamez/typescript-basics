(() => {
  const abc = (message: string): never => {
    throw new Error(message);
  };

  abc('NEVER');
  console.log('always'); // <= never runs
})();
