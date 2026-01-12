console.log('GENERIC');

// function getFirstElement(arr: number[]) {
//   return arr[0];
// }

// console.log(getFirstElement([4, 7]));

// function getFirstElementString(arr: string[]) {
//   return arr[0];
// }

// function getFirstElementObj(arr: { name: string }[]) {
//   return arr[0];
// }

// GENERIC REUSE CODE
// function getFirstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0];
// }

// const result = getFirstElement<string>(['tets']);
// console.log(result);
// const num1 = getFirstElement<number>([2, 5]);
// console.log(result);

// FUNCTION, INTERFACE, TYPE ALIAS, CLASS
// const r = getFirstElement(['john', 'jack', 5, true]); // (string | number | boolean)[]
// r?.toUpperCase()

function pair<K, T>(key: K, value: T): [K, T] {
  return [key, value];
}

// const r = pair<boolean, string>(true, 'Coke');

// pair('john', 20) ==> ['john', 20]

// function pair(key: any, value: any) {
//   return [key, value];
// }
// const r = pair(true, true);
// console.log(r[1].toUpperCase());

// interface IdentityString {
//   value: string;
//   // date: Date
// }

// interface IdentityNumber {
//   value: number;
//   // date: Date
// }

// interface Identity<Type> {
//   value: Type;
//   date: Date;
// }

// const idenNum: Identity<number> = { value: 30, date: new Date() };
// const idenStr: Identity<string> = { value: 'hello', date: new Date() };

// type Identity<Type = unknown> = {
//   value: Type;
//   date: Date;
// };

// const idenNum: Identity<number> = { value: 30, date: new Date() };
// const a = idenNum.value;

// GENERIC CONSTRAINT
// function compareLength<
//   T extends { length: number },
//   U extends { length: number }
// >(a: T, b: U) {
//   return a.length > b.length;
// }

// compareLength(['aaa'], { length: 70 });

// TYPE {}: any value but not null and undefined
// type Filtered = {
//   searchTerm: string;
//   category: string;
// };

// type Length = {
//   length: number;
// };

// const obj: Filtered = {
//   searchTerm: 'ssss',
//   category: 'bev'
// };

// function getValueFromKey<K extends string | number>(a: K) {}

// KEYOF OPERATOR (CREATE TYPE FROM OBJECT TYPE)
// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   // expired: Date;
//   // stock: number;
//   // isActive: boolean;
// };

// const p: Product = {
//   id: 2,
//   name: 'coke',
//   price: 13
// };

// function getValueFromObject<T extends object>(obj: T, key: keyof T) {
//   return obj[key];
// }

// getValueFromObject({ name: 'jack', age: 25 }, 'sdsdsd'); // 2

// type ProductKey = 'id' | 'name' | 'price' | 'expired' | 'stock' | 'isActive';
// type ProductKey = keyof Product;

// type IndexSignature = {
//   dob: string;
//   [k: string]: string;
// };

// const a: IndexSignature = {
//   name: 'J',
//   dob: '2020-09-02',
//   0: '',
//   [1]: 'aaaa'
// };

// type IndexSignatureKey = keyof IndexSignature; // string | number
// const b: IndexSignatureKey = 'sksdskd';

// TYPEOF OPERATOR
// const a = 'sawasdeee';

// type VariaBleA = typeof a; // TypeScript Only
// let typeo = typeof a; // JavaScript
// typeo = 'object';

// const obj = {
//   name: 'john',
//   age: 20
// };

// type Person = typeof obj; // not type object: {name:string;age:number}
// function test() {}
// type TestFn = typeof test;

// function myMap<T, U>(arr: T[], cb: (el: T) => U): U[] {
//   const result: U[] = [];
//   for (let item of arr) {
//     result.push(cb(item));
//   }
//   return result;
// }

// const numbers = [1, 2, 3];
// const strings = myMap(numbers, (n) => n.toString()); // Should be string[]
// console.log(strings);

// UTILITY TYPE
// PARTIAL: creat optional property from object type
type Person = {
  id: number;
  name: string;
};
// Partial ==> { id?:number; name?: string }
type OptionalPerson = Partial<Person>;
// REQUIRED: make all object key required
type OptionalBook = {
  id?: string;
  author?: string;
};
type Book = Required<OptionalBook>;

// READONLY: make all object key to readonly
type ReadonlyPerson = Readonly<Person>;

// RECORD: create object type from key type and value type
type Router = Record<string, string>;
const obj: Router = { login: '/login', register: '/register' };

// PICK: create object type from pick key of object type
type User = {
  id: number;
  email: string;
  password: string;
  confirmPassword: string;
};
type UserCredentials = Pick<User, 'email' | 'password'>;
// OMIT
type ExcludePasswordUser = Omit<User, 'confirmPassword' | 'password'>;

function creatUser(input: Omit<User, 'id' | 'confirmPassword'>) {}
function updateUser(input: Partial<Pick<User, 'email' | 'password'>>) {} // { email?: string; password?: string  }
