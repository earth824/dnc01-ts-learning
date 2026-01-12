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

function identity(input) {
  return input;
}
