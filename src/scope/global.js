var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';
console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world)
    console.log(helloWorld);
};

anotherFunction();

const helloWorld = () => {
    globalVar = 'im global';
};

helloWorld();
console.log(globalVar);