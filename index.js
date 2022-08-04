// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}
destructivelyAppendCat("Ralph");

function destructivelyPreependCat(name) {
  return cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemovesLastCat() {
  return cats.pop();
}
destructivelyRemovesLastCat();

function destructivelyRemovesFirstCat() {
  return cats.shift();
}
destructivelyRemovesFirstCat();

function appendCat(name) {
  return [...cats, name];
}
appendCat("Broom");

function PrependCat(name) {
  return [name, ...cats];
}
PrependCat("Arnold");
