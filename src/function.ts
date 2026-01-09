console.log('FUNCTION');

// PARAMETER TYPE ANNOTATION
// function greet(name: string) {
//   console.log(`Hello ${name}`);
// }
// greet('John');

// // FUNCTION DECLARATION
// function sum(a: number, b: number) {
//   return a + b;
// }

// const result = sum(5, 8);

// // RETURN TYPE ANNOTATION
// function concat(a: string, b: string): string {
//   return a + b;
// }

// // FUNCTION EXPRESSION
// const add = function (a: number, b: number): number {
//   return a + b;
// };

// // ARROW FUNCTION
// const combine = (a: number, b: number): number => a + b;

// const arr: number[] = [4, 2, 3, 8];
// arr.forEach(function (el, index, array) {});

// const friends: string[] = ['bank', 'boss', 'pete'];
// friends.forEach((el, i, arr) => {});

// OPTIONAL PARAMETER
// function calcNetPrice(productPrice: number, discount?: number): number {
//   // discount: number | undefined
//   if (discount === undefined) {
//     // discount: undefined
//     return productPrice;
//   }

//   // discount: number
//   return productPrice - discount;
//   // return productPrice - discount; // number - number | undefined
// }

// calcNetPrice(1000);

// DEFAULT PARAMETER VALUE
// function calcNetPrice(price: number, discount: number = 0) {
//   return price - discount;
// }

// calcNetPrice(100);

// REST PARAMETER TYPE ANNOTATION
// sum(4, 7, 3, 7, 3, 5); ==> [4, 7, 3, 7, 3, 5]
// function sum(...nums: number[]) {}
// sum(4, 6, 2, true);

// FUNCTION TYPE EXPRESSION
// const a: Function = (d: string) => {};
// (req,res,next) => void
// type Func = (_: number, __: string) => number;
// const z: Func = function (m, n) {
//   return 'blabala';
// };

// VOID RETURN TYPE
// function sayHi(): void {
//   console.log('Hi');
//   // return 'jllll';
// }

// BEWARE OF THIS
// type VoidFunc = () => void;
// const sayHi: VoidFunc = () => {
//   console.log('Hi');
//   return 'kjdfkfdkfd';
// };
// console.log(sayHi());
