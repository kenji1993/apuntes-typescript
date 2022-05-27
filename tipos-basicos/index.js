"use strict";
// Booleans //
let isDev = true;
let isSenior = false;
console.log('Booleans', { isDev }, { isSenior });
// Numbers //
let age = 29;
console.log('Numbers', { age });
// Strings //
let devName = 'Kenji';
let devSurname = "Arakaki";
let devJob = `Frontend`;
console.log('Strings', { devName }, { devSurname }, { devJob });
// Any //
let workComputer = 123;
workComputer = 'Macbook pro';
console.log('Any', { workComputer });
// Arrays //
let numbers;
numbers = ['Kenji', 1, 2, 3];
console.log('Numbers', numbers);
// Tuplas //
const kenji = ['Kenji', 1993, true];
console.log('Tuplas', kenji);
// Enum //
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 1] = "min";
    AudioLevel[AudioLevel["medium"] = 2] = "medium";
    AudioLevel[AudioLevel["max"] = 10] = "max";
})(AudioLevel || (AudioLevel = {}));
let currentAudio = AudioLevel.medium;
console.log('Enum', currentAudio);
console.log('Enum', AudioLevel);
// Void //
const a = () => {
    1 + 1;
};
// Never //
// Está comentado porque sino no sigue ejecutando las siguientes líneas de código
// const abc = (message: string):never => {
//     throw new Error(message)
// }
// abc('Holis')
// null y undefined //
let nada = undefined;
console.log('null y undefined', nada);
