(() => {
  function callVoid(): void {
    // return 1; <= typescript throws an error
  }

  const a = callVoid();

  console.log(a);
})();
