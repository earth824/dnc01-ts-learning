// NARROWING
// type Alphanumeric = string | number;

// hello
// padLeft(8, 'hello') ===> '   hello'
// padLeft('say ', 'hello') ===> 'say hello'

// function padLeft(padding: string | number | boolean, text: string) {
//   // AREA1: padding ==> string | number | boolean

//   if (typeof padding === 'number') {
//     // this if called type guard
//     // AREA2: padding ==> number
//     const numPadding = padding - text.length;
//     return ' '.repeat(numPadding > 0 ? numPadding : 0) + text;
//   }
//   // AREA3: padding ==> string | boolean
//   return padding + text;
// }

// console.log(padLeft(true, 'hello'));

// TYPE GUARD: TYPEOF
// combine(2, 5) ==> 7
// combine('say ', 'hi') ==> 'say hi'
// combine(3, 'ten') ==> throw error
// function combine(a: string | number, b: string | number) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     // AREA: a ==> number, b ==> number
//     return a + b;
//   }
//   // a ==> number, b ==> string, a ==> string, b ==> number, a ==> string, b ==>string
//   // AREA: a ==> number | string, b ==> number | string
//   if (typeof a === 'string' && typeof b === 'string') {
//     // AREA: a ==> string, b ==> string
//     return a + b;
//   }
//   // a ==> number, b ==> string, a ==> string, b ==> number
//   // AREA: a ==> number | string, b ==> number | string
//   throw new Error('a and b must be the same type');
// }

// EQUALITY NARROWING
// function example(a: string | number, b: string | null) {
//   if (a === b) {
//     // AREA a ==> string, b ==> string
//   }
// }

// TRUTHINESS NARROWING
// function print(input: string | null | undefined) {
//   // if (input || input === '') {
//   //   // AREA input ==> string
//   //   // input.toLowerCase();
//   //   return;
//   // }
//   // // AREA input ==> string | null | undefined
//   // input;

//   if (!input) {
//     // AREA:
//     return;
//   }
//   // AREA input ==> string
//   input;
// }

// IN OPERATOR ==> Object key
// const obj = { name: 'john' };
// const result = 'name' in obj; // true

// type User = {
//   findById: () => void;
//   findByEmail: () => string;
// };

// type Product = {
//   findById: () => void;
//   sortByPrice: () => number;
// };

// function test(entity: User | Product) {
//   // AREA: entity ==> User | Product
//   // entity.findById();
//   if ('findByEmail' in entity) {
//     // AREA: entity ==> User
//     entity.findByEmail();
//     return;
//   }
//   // AREA: entity ==> Product
//   entity.sortByPrice();
// }

// INSTANCEOF OPERATOR
// new Date(), new Error()
// const d = new Date();
// const r = d instanceof Date; // true
// const s = d instanceof Error; // false
// function test(input: unknown) {
//   if (input instanceof Date) {
//     // AREA: input ==> Date
//     input.getFullYear();
//     return;
//   }
//   if (input instanceof Error) {
//     input.message;
//   }
// }

// test('aaa');

// TYPE PREDICTATE (PARAMETER is TYPE)
// PREDICTATE FUNCTION: FUNCTION THAT RETURN BOOLEAN
// function test(): any {}

// function isString(input: unknown) {
//   return typeof input === 'string';
// }

// const a = test();
// if (isString(a)) {
//   a
// }

// type User = {
//   findById: () => void;
//   findByEmail: () => string;
// };

// type Product = {
//   findById: () => void;
//   sortByPrice: () => number;
// };

// function isProduct(input: User | Product): input is Product {
//   return 'sortByPrice' in input;
// }

// const a = test();
// if (isProduct(a)) {
//   a;
// }

// DISCRIMINATED UNION (USING WITH OBJECT)
// discriminator(key): ex. kind
type Circle = {
  kind: 'circle';
  radius: number;
};

type Square = {
  kind: 'square';
  sideLength: number;
};

type Triangle = {
  kind: 'triangle';
  height: number;
  base: number;
};

type Ellipsis = {
  kind: 'ellipsis';
  radius: number;
  bla: number;
};

function calcArea(input: Circle | Square | Triangle | Ellipsis) {
  // if (input.kind === 'circle') {
  //   // AREA: input ==> Circle
  // }

  switch (input.kind) {
    case 'circle': {
      return Math.PI * input.radius ** 2;
    }
    case 'square': {
      return input.sideLength ** 2;
    }
    case 'triangle': {
      return (input.base * input.height) / 2;
    }
  }
}
