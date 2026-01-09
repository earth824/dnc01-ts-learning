console.log('OBJECT');

// OBJECT TYPE
// let person: {
//   name: string;
//   email: string;
//   age: number;
//   isActive: boolean;
// };

// person = {
//   name: 'jhon',
//   age: 35,
//   isActive: false
// };

// let p2: {
//   name: string;
//   email: string;
//   age: number;
//   isActive: boolean;
// };

// let p3: {
//   name: string;
//   email: string;
//   age: number;
//   isActive: boolean;
// };

// 1. TYPE ALIAS
// type Person = {
//   name: string;
//   email: string;
//   age: number;
//   isActive: boolean;
// };

// let p1: Person;
// let p2: Person;
// let p3: Person;

// // OBJECT OPTIONAL PROPERTY
// type Product = {
//   name: string;
//   price: number;
//   discount?: number; // number | undefined
// };

// const pepsi: Product = {
//   name: 'Pepsi',
//   price: 20
// };

// OBJECT READONLY PROPERTY
// type Person = {
//   readonly id: string;
//   name: string;
// };

// const p: Person = {
//   id: '1',
//   name: 'john'
// };
// p.id = '20';

// 2. INTERFACE
// interface Person {
//   name: string;
//   age: number;
//   email: string;
//   isActive: boolean;
// }

// let p1: Person = {
//   name: 'jim',
//   age: 55,
//   email: 'jmail.com',
//   isActive: true
// };

// TYPE: {} ==> everything except null,undefined
// let a: {};
// a = 200;
// a = 'Hello';
// a = {
//   name: 'jack'
// };
// a = null;
// a = undefined;

// INTERSECTION (&) use with type alias
// type A = {
//   id: string;
//   name: string;
// };

// type B = {
//   price: number;
// };

// type C = {
//   email: string;
//   phone: string;
// };

// // {id: string;name: string; price: number;}
// type Product = A & B;
// let p: Product = { id: '111', name: 'pringle', price: 35 };
// type Person = A & C;

// INTERSECTION cannot use with interface
// interface A {
//   id: string;
//   name: string;
// }

// interface B {
//   price: number;
// }

// type C = A & B;
// let p: C = {}

// INTERFACE EXTEND
// interface A {
//   id: string;
//   name: string;
// }

// interface B {
//   price: number;
// }

// interface C extends A, B {}
// let p: C = { id: 'aka', name: 'askjskdsd', price: 90 };

// EXCESS PROPERTY CHECK
// type Lengthy = {
//   length: number;
//   dob: boolean;
// };
// function logLength(input: Lengthy) {
//   console.log(input.length);
// }

// // logLength({ length: 20, name: 'jhon' });
// const a = { length: 20, name: 'jhon', dob: false };
// logLength(a);

// FUNCTION PARAMETER DESTRUCTURING
type Product = {
  name: string;
  price: number;
  discount?: number;
};
function logSomething({ name, price, discount = 0 }: Product) {}
