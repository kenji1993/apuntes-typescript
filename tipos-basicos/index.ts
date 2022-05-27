// Booleans //

let isDev: boolean = true;
let isSenior: boolean = false;

console.log('Booleans', {isDev}, {isSenior});

// Numbers //

let age: number = 29;

console.log('Numbers',{age});

// Strings //

let devName: string = 'Kenji';
let devSurname: string = "Arakaki";
let devJob: string = `Frontend`;

console.log('Strings', {devName}, {devSurname}, {devJob});

// Any //

let workComputer: any = 123;
workComputer = 'Macbook pro';

console.log('Any', {workComputer});

// Arrays //

let numbers: (number | string)[];

numbers = ['Kenji', 1, 2, 3];

console.log('Numbers', numbers);

// Tuplas //

const kenji: [string, number, boolean ] = ['Kenji', 1993, true];

console.log('Tuplas', kenji);

// Enum //

enum AudioLevel {
    min = 1,
    medium,
    max = 10,
}

let currentAudio = AudioLevel.medium;

console.log('Enum', currentAudio);
console.log('Enum', AudioLevel);

// Void //

const a = (): void => {
    1 + 1;
};

// Never //
// Está comentado porque sino no sigue ejecutando las siguientes líneas de código

// const abc = (message: string):never => {

//     throw new Error(message)
// }

// abc('Holis')

// null y undefined //

let nada: undefined = undefined;

console.log('null y undefined', nada);

