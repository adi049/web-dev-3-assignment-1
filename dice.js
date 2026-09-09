const crypto = require('crypto');

function rollDice() {
  return crypto.randomInt(1, 7);
}

const count = Number(process.argv[2]) || 1;

if (!Number.isInteger(count) || count < 1) {
  console.log('Please provide a positive whole number of dice rolls.');
  process.exit(1);
}

for (let i = 0; i < count; i += 1) {
  console.log(`Dice Rolled: ${rollDice()}`);
}
