class User {
 constructor({ firstName, lastName, books, pets }) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.books = books;
  this.pets = pets;
 }

 addBook = (bookName, author) => this.books.push({ bookName, author });
 addPets = (pet) => this.pets.push(pet);
 countPets = () => this.pets.length;
 getBookName = () => {
  const bookNameList = [];
  this.books.map((book) => bookNameList.push(book.bookName));
  return bookNameList;
 }

 getFullName = () => `${this.firstName}  ${this.lastName}`;
}

let data = {
 firstName: 'Luciano Javier',
 lastName: 'Costa Peralta',
 books: [
  { bookName: 'js', author: 'Oscar' },
  { bookName: 'c++', author: 'Luciano' },
 ],

 pets: ['Cat', 'Dog']
}

let users = new User(data);

console.log(users.getFullName());

users.addPets('monky');

console.log("Pets : " + users.countPets());

users.addBook('python', 'Kevin');

console.table(users.getBookName());
