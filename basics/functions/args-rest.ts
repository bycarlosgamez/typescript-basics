(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(' ')}`;
  };

  const name = fullName('John', 'Johnson', 'Doe');

  console.log(name);
})();
