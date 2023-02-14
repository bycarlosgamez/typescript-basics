(() => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6];

  const books: string[] = ['book1', 'book2', 'book3'];

  //   numbers.push('7'); <= typescript show an error
  numbers.push(7);
  console.log(numbers);
  console.log(books);
})();
