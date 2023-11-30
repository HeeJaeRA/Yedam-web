let names = ["Hong", "Kang", "Adward", "Lee"];

console.log(names);

names.sort();
console.log(names);

names.reverse();
console.log(names);


let numbers = [40, 100, 1, 5, 25, 10];

console.log(numbers);

numbers.sort((a,b) => {
    return a-b;
});
console.log(numbers);

numbers.reverse();
console.log(numbers);