// class name (convention: PascalCase)
// class: field(property), method(function), special method: contructor
// dog:
// - property: species, name, color etc.
// - function: eat, bark, run, walk etc.
// class UserInfo {
//   // class body
//   // field or property
//   id: number;
//   firstName: string;
//   lastName: string;
//   birthDate: Date;
//   isMarried: boolean = false;

//   // special method
//   // constructor(f: string, b: Date, l: string) {
//   //   // console.log('CONSTRUCTOR RUN');
//   //   // console.log(f);
//   //   this.firstName = f;
//   //   this.birthDate = b;
//   //   this.lastName = l;
//   // }

//   constructor({
//     firstName,
//     lastName
//   }: {
//     firstName: string;
//     lastName: string;
//   }) {
//     // this.firstName = initial.firstName;
//     // this.lastName = initial.lastName;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   // method or function
//   printId() {
//     console.log('PRINTID RUN');
//   }
//   checkMariageStatus() {
//     console.log('CHECKMARIAGESTATUS RUN');
//   }
// }

// class is a blueprint ==> create object
// object created from class called instance of a class: ex. u called instance of UserInfo
// constructor excecuted when is object created
// const u = new UserInfo(); // { id, firstName,birthDate, isMarried: false, printId(), checkIsMarriageStatus() }
// // new UserInfo('test') ===> constructor('test')
// u.printId();
// console.log(u.isMarried);

// const a = new UserInfo('jhon', new Date('2020-09-01'), 'doe'); // { id, firstName: 'jhon',birthDate, isMarried: false, printId(), checkIsMarriageStatus() }
// const b = new UserInfo('mike', new Date('2000-05-13'), 'thompson'); // { id, firstName: 'mike',birthDate, isMarried: false, printId(), checkIsMarriageStatus() }
// console.log(a.firstName);
// console.log(b);
// b.printId();

// const c = new UserInfo({ firstName: 'jack', lastName: 'ma' });

// class Accountant {
//   readonly id: number;
//   firstName: string;
//   level: string;
//   email?: string;

//   constructor(lev: string) {
//     this.id = Math.random();
//     this.level = lev;
//   }
// }

// const a = new Accountant('newbie');
// a.id = 890000;

// CLASS INHERITANCE
// class Employee {
//   // firstName: string;
//   // lastName: string;
//   // constructor(f: string, l: string) {
//   //   console.log('PARENT CONSTRUCTOR');
//   //   this.firstName = f;
//   //   this.lastName = l;
//   // }
//   eat() {
//     console.log('EAT');
//   }
// }
// Programmer is child class
// Employee is parent class
// class Programmer extends Employee {
//   // programmingLanguage: string[];
//   // constructor(fffff: string, lllll: string) {
//   //   console.log('CHILD CONSTRUCTOR');
//   //   super(fffff, lllll); // super ==> parent: super() ==> parent constructor()
//   // }
//   code() {}
//   eat() {
//     console.log('PROGRAMMEREAT');
//   }
// }
// const p = new Programmer();
// p.eat();
// const p = new Programmer('john', 'doe'); // { firstName: 'john' }
// const p2 = new Programmer('jack', 'ma'); // { firstName: 'jack' }
// console.log(p.firstName);
// console.log(p2.firstName);
// console.log(p); // { programmingLanguage, firstName, lastName, code(), eat() }
// p.eat();

// class Accountant {
//   firstName: string;
//   lastName: string;
//   accountingLevel: number;

//   eat() {}
//   audit() {}
// }

// class Support {
//   firstName: string;
//   lastName: string;

//   eat() {}
//   contact() {}
// }

// ACCESS MODIFIER (WHERE property or method can access), ONLY TYPESCRIPT
// public, private, protected
// class Person {
//   private id: number = 5;
//   firstName: string = 'john';
//   age: number = 30;

//   getId() {
//     return this.id;
//   }

//   // PRIVATE (property or method can access only inside class body)
//   private eat() {
//     console.log('EAT');
//   }

//   drink() {
//     this.id = Math.random();
//     this.eat();
//     console.log('DRINK');
//   }
// }
// // PUBLIC (property or method can access anywhere)
// // ENCAPSULATION
// const p = new Person();
// // p.eat();
// const id = p.getId();
// p.id = 200;
// // p.drink();

// // const d = new Date()

// class Employee {
//   private id: string = '200';
// }
// class IT extends Employee {
//   test() {
//     console.log(this.id);
//   }
// }
// const i = new IT();
// i.test();
// console.log(i.id);

// CONSTRUCTOR SHORT HAND
// class Product {
//    name: string;
//    price: number;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }
// class Product1 {
//   constructor(public name: string, public price: number, private test: boolean) {}
// }
// const p1 = new Product1('pepsi', 50);
// console.log(p1);

// const p = new Product('coke', 20);
// class Person {
//   id: string;
//   constructor(id: string) {
//     this.id = id;
//   }
// }
// class Person1 {
//   constructor(public id: string) {}
// }

// class Book {
//   private id: number;
//   protected author: string;
//   publish: number;
//   constructor(id: number, author: string, publish: number) {
//     this.id = id;
//     this.author = author;
//     this.publish = publish;
//   }
// }
// class Book1 {
//   constructor(
//     private id: number,
//     protected author: string,
//     public publish: number
//   ) {}
// }

// CLASS WITH GENERIC
// class CRUD<T> {
//   data: T[] = [];
//   findAll(): T[] {
//     return this.data;
//   }
//   create(newValue: T): void {
//     this.data.push(newValue);
//   }
// }
// const nums = new CRUD<number>();
// nums.create(8);
// const strs = new CRUD<string>();
// strs.create('boey');

// ABSTRACT and INTERFACE
