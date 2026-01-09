console.log('FUNDAMENTAL');

// BASIC DATA TYPE
// TYPE ANNOTATION
// STRING
// let a: string = 'Hello';
// // NUMBER
// let b: number = 90;
// // BOOLEAN
// let c: boolean = false;
// // TYPE INFERENCE
// let d = 'World';
// // d = 50;
// let e = 4;
// // TYPE: any (opt out typescript)
// let f: any = 'Sawasdee';
// f = 60;
// // f.toUpperCase();
// // TYPE: null, undefined (use with union type)
// let g: null;
// let h: undefined;
// // TYPE: unknown (similar to any but you must check type before use it)
// let i: unknown = 90;
// // i = 'Hello';
// if (typeof i === 'string') {
//   i.toUpperCase();
// }
// if (typeof i === 'number') {
//   i.toFixed();
// }
// if (Array.isArray(i)) {
//   i.map((el) => i);
// }

// UNION TYPE
// let a: string | number;
// a = 'Hello';
// // a = 60;
// if (typeof a === 'string') {
//   a.toUpperCase();
// }
// let b: string | null | undefined;

// ARRAY
// const nums: number[] = [4, 7, 3];
// nums.push(9);
// // const alpha: (string | number)[] = [8, 5, 'hello'];

// // TUPLE (fixed-sized ARRAY)
// const info: [string, number] = ['john', 79];
// const rgb: [number, number, number, number?] = [20, 5, 3];

// // LITERAL TYPE (use with union type)
// let name1 = 'john';
// const name2 = 'john';
// // let theme: 'dark';
// // theme = 'dark'
// let theme: 'light' | 'dark';
// let role: 'user' | 'admin';

// ENUM
// enum Role {
//   Customer, // 0
//   Shop, // 1
//   Admin // 2
// }

// console.log(Role[1]);

// var Role = {
//   Customer: 0,
//   Shop: 1,
//   Admin: 2,
//   '0': 'Customer',
//   '1': 'Shop',
//   '2': 'Admin'
// };

// let userRole: Role;
// userRole = 1;

// enum Role {
//   Customer = 'customer',
//   Shop = 'shop',
//   Admin = 'admin'
// }

// var Role = {
//   Customer: 'customer',
//   Shop: 'shop',
//   Admin: 'admin'
// };

// let userRole: Role;
// userRole = Role.Customer;
// console.log(userRole);
// userRole = 'admin'
// userRole = Role.Admin;
// console.log(userRole);

// switch (userRole) {
//   case 0: {
//     // Role.Customer
//   }
// }

// enum Direction {
//   Left = 100,
//   Right = 'right',
//   Top,
//   Bottom = 'bottom'
// }
// let d: Direction = Direction.Bottom;
// console.log(d);

// enum Theme {
//   Light = 'light',
//   Dark = 'dark'
// }

// TYPE ALIAS
// 'dark' | 'light'
// type Theme = 'dark' | 'light';
// type Alphanumeric = string | number;
// let theme: Theme = 'light';
// let a: Alphanumeric = 'hello';

// TYPE ASSERTION
// const h1 = document.querySelector('.content-header') as Element;
// h1.classList = 'Hello';
// NON-null ASSERTION
// const h1 = document.querySelector('.content-header');
// h1!.classList = 'Hello';
// const h1 = document.querySelector('.content-header');
// if (h1 !== null) {
//   // h1 can only be ELement
//   h1.classList = 'Hello';
// }

// TYPE: never (type that never occur)
// type Theme = 'dark' | 'light' | 'gray';
// let a: Theme;
// a = prompt('Enter theme') as Theme;

// switch (a) {
//   case 'dark': {
//     // do something with dark theme
//     a;
//     break;
//   }
//   case 'light': {
//     // do something with light theme
//     a;
//     break;
//   }

//   default: {
//     //
//     const _unreachable: never = a;
//   }
// }

// let b = prompt('ksksk');
// function test() {
//   throw 'something';
//   b;
// }

// try {
//   let a = 20;
// } catch (err) {}

// function createError(): never {
//   return 'string';
// }

// LAB1
// let userName: string = 'Hello';
// console.log(userName.toLowerCase());
// let weight: number = 20;
// console.log(weight.toFixed(2));
// let isAdmin: boolean = true;
// console.log(!isAdmin);
// userName = 90;

// let oldAge = 55 as const;
// let newAge = oldAge;
// newAge = 33;
// const day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;
// let n = [1, 2];
// n.push('abcd');

// // LAB 3
// let data: any = 'hello';
// data = 3;
// let info: unknown = 90;
// info = 'hello';
// if (typeof info === 'string') {
//   info.toUpperCase();
// }

// // LAB 4
// let orderaStatus: 'processing' | 'shipped' | 'delivered';
// orderaStatus = 'processing';
// orderaStatus = 'shipped';
// orderaStatus = 'delivered';
// let discount: number | string = 15;
// discount = '15%';

// // LAB 5
// const scores: number[] = [4, 9];
// scores.push('aaaa');

// const beers: string[] = ['chang'];
// beers.push(true);

// const mixedArray: (number | string)[] = [2, 'hello', false];
