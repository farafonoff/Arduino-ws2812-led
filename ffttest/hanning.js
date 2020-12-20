let size = 128;

let res = [];
for (let i = 0; i < size; ++i) {
  res.push(0.5 - 0.5 * Math.cos((2 * Math.PI * i) / size));
}
console.log(`{${res.join(",")}}`);
