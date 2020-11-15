const arg = process.argv;
const filtered = arg.splice(2);
const total = filtered.reduce((acc, curr) => acc + parseInt(curr), 0);
console.log(total);
