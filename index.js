function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Cow {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  describe() {
    console.log(`A ${this.color} cow, ${this.age} years old, named ${this.name}.`);
  }
}

function generateCowHerd(numCows) {
  const cowColors = ['black', 'white', 'brown', 'spotted', 'cream', 'gray'];
  const cowNames = ['Bessie', 'Daisy', 'Moo Moo', 'Buttercup', 'Spot', 'Charlie', 'Buddy', 'Lola', 'Maggie', 'Oreo', 'Cocoa', 'Hazel', 'Rosie', 'Willow', 'Luna'];

  const cowHerd = [];
  for (let i = 0; i < numCows; i++) {
    const name = cowNames[getRandomNumber(0, cowNames.length - 1)];
    const color = cowColors[getRandomNumber(0, cowColors.length - 1)];
    const age = getRandomNumber(1, 15);
    const cow = new Cow(name, color, age);
    cowHerd.push(cow);
  }

  return cowHerd;
}

function main() {
  const numCows = 8;
  const cowHerd = generateCowHerd(numCows);

  console.log('The cow herd in the pasture:');
  cowHerd.forEach(cow => cow.describe());
}

main();

class Chicken {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  describe() {
    console.log(`A ${this.color} chicken, ${this.age} months old, named ${this.name}.`);
  }
}

function generateChickenFlock(numChickens) {
  const chickenColors = ['white', 'brown', 'black', 'gray'];
  const chickenNames = ['Henrietta', 'Cluck Cluck', 'Eggbert', 'Feathers', 'Nugget', 'Penny', 'Rosie', 'Sunny', 'Twiggy', 'Waffles'];

  const chickenFlock = [];
  for (let i = 0; i < numChickens; i++) {
    const name = chickenNames[getRandomNumber(0, chickenNames.length - 1)];
    const color = chickenColors[getRandomNumber(0, chickenColors.length - 1)];
    const age = getRandomNumber(1, 24);
    const chicken = new Chicken(name, color, age);
    chickenFlock.push(chicken);
  }

  return chickenFlock;
}

function displayChickenFlock(chickenFlock) {
  console.log('The chicken flock in the coop:');
  chickenFlock.forEach(chicken => chicken.describe());
}

const numChickens = 10;
const chickenFlock = generateChickenFlock(numChickens);
displayChickenFlock(chickenFlock);
