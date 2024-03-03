// 生成随机数的辅助函数
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 牛类
class Cow {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  // 描述牛的信息
  describe() {
    console.log(`一头${this.color}色的${this.age}岁${this.name}`);
  }
}

// 生成牛群
function generateCowHerd(numCows) {
  const cowColors = ['黑', '白', '棕'];
  const cowNames = ['牛一', '牛二', '牛三', '牛四', '牛五', '牛六', '牛七', '牛八', '牛九', '牛十'];

  const cowHerd = [];
  for (let i = 0; i < numCows; i++) {
    const name = cowNames[getRandomNumber(0, cowNames.length - 1)];
    const color = cowColors[getRandomNumber(0, cowColors.length - 1)];
    const age = getRandomNumber(1, 10);
    const cow = new Cow(name, color, age);
    cowHerd.push(cow);
  }

  return cowHerd;
}

// 主程序
function main() {
  const numCows = 5; // 生成5头牛
  const cowHerd = generateCowHerd(numCows);

  console.log('田园中的牛群：');
  cowHerd.forEach(cow => cow.describe());
}

// 运行主程序
main();
