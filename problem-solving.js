//problem-solving tasks with concise JavaScript solutions:

//1. Array Filtering and Mapping:

const people = [
  { name: 'John', age: 30, gender: 'male' },
  { name: 'Sarah', age: 25, gender: 'female' },
  { name: 'Mike', age: 35, gender: 'male' }
];


const malePeopleNames = people
  .filter(person => person.gender === 'male')
  .map(person => person.name);

console.log(malePeopleNames); // ['John', 'Mike']


//2. Object Manipulation:

const books = [
  { title: 'JavaScript', author: 'John Smith', year: 2020 },
  { title: 'Python', author: 'Jane Doe', year: 2019 }
];

const bookTitles = books.map(book => book.title);
console.log(bookTitles); // ['JavaScript', 'Python']



//3. Function Composition:

const square = x => x * x;
const double = x => x * 2;
const addFive = x => x + 5;

const composedFunction = x => addFive(double(square(x)));

console.log(composedFunction(3)); // 50



//4. Sorting Objects:

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Honda', model: 'Civic', year: 2015 },
  { make: 'Ford', model: 'Mustang', year: 2020 }
];

const sortedCars = cars.sort((a, b) => a.year - b.year);
console.log(sortedCars);



//5. Find and Modify:

const people = [
  { name: 'John', age: 30 },
  { name: 'Sarah', age: 25 }
];

function updatePersonAge(name, newAge) {
  const person = people.find(p => p.name === name);
  if (person) person.age = newAge;
  return people;
}

console.log(updatePersonAge('John', 35));




