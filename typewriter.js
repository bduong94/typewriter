const sentence = 'hello there from lighthouse labs';
let timer = 0;
let increment = 75;

for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), timer);
  timer += increment;
}

setTimeout(() => console.log(''), timer + increment)