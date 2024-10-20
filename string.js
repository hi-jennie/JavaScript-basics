// string primitive
const message = 'This is my first message';
// there are tons of methods on string primitive
console.log(message.length);
console.log(message[0]);
console.log(message.includes('my'));
console.log(message.startsWith('This'));
console.log(message.replace('first', 'second'));
console.log(message.toUpperCase());
console.log(message.indexOf('my'));
console.log(message.trim());
console.log(message.split(' ')); // return an array of words
console.log(message.endsWith('message'));


// string object
const another = new String('hi');