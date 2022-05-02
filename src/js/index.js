import '../styles/main.scss';
import Keyboard from './keyboard';

const body = document.querySelector('body');

const keyboardKeysEn = [];

keyboardKeysEn[0] = new Map([
  ['`', 192], ['1', 49], ['2', 50], ['3', 51], ['4', 52], ['5', 53], ['6', 54], ['7', 55], ['8', 56], ['9', 57], ['0', 48], ['-', 189], ['=', 187], ['Backspace', 8]
]);

keyboardKeysEn[1] = new Map([
  ['Tab', 9], ['q', 81], ['w', 87], ['e', 69], ['r', 82], ['t', 84], ['y', 89], ['u', 85], ['i', 73], ['o', 79], ['p', 80], ['[', 219], ['&#92;', 220], ['Delete', 46]
]);

keyboardKeysEn[2] = new Map([
  ['Caps Lock', 20], ['a', 65], ['s', 83], ['d', 68], ['f', 70], ['g', 71], ['h', 72], ['j', 74], ['k', 75], ['l', 76], [';', 186], ['&#8216;', 222], ['Enter', 13]
]);

keyboardKeysEn[3] = new Map([
  ['↑ Shift', 16], ['z', 90], ['x', 88], ['c', 67], ['v', 86], ['b', 66], ['n', 78], ['m', 77], [',', 188], ['.', 190], ['/', 191], ['↑', 38], ['Shift ↑', 16]
]);

keyboardKeysEn[4] = new Map([
  ['Ctrl', 17], ['Win', 91], ['Alt', 18], ['Space', 32], ['Alt Gr', 18], ['←', 37], ['↓', 40], ['→', 39], ['Ctrl Rt', 17]
]);

const keyboard = new Keyboard(keyboardKeysEn, body);

keyboard.createKeyboard();