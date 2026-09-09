const operation = process.argv[2];
const first = Number(process.argv[3]);
const second = Number(process.argv[4]);

if (!operation || process.argv.length < 5 || Number.isNaN(first) || Number.isNaN(second)) {
  console.log('Usage: node calculator.js <add|subtract|multiply|divide> <number1> <number2>');
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case 'add':
    result = first + second;
    break;
  case 'subtract':
    result = first - second;
    break;
  case 'multiply':
    result = first * second;
    break;
  case 'divide':
    if (second === 0) {
      console.log('Error: Cannot divide by zero.');
      process.exit(1);
    }
    result = first / second;
    break;
  default:
    console.log('Invalid operation. Use add, subtract, multiply, or divide.');
    process.exit(1);
}

console.log(`Result: ${result}`);
