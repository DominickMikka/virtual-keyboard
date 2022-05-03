import '../styles/main.scss';
import Keyboard from './keyboard';

const body = document.querySelector('body');

const keyboardKeys = [
[
  ['`', '~', 'ё', 'Ё'], ['1', '!', '1', '!'], ['2', '@', '2', '"'], ['3', '#', '3', '№'], ['4', '$', '4', ';'], ['5', '%', '5', '%'], ['6', '^', '6', ':'], ['7', '&', '7', '?'], ['8', '*', '8', '*'], ['9', '(', '9', '('], ['0', ')', '0', ')'], ['-', '_', '-', '_'], ['=', '+', '=', '+'], ['Backspace', 'Backspace', 'Backspace', 'Backspace']
], 
[
  ['Tab', 'Tab', 'Tab', 'Tab'], ['q', 'Q', 'й', 'Й'], ['w', 'W', 'ц', 'Ц'], ['e', 'E', 'у', 'У'], ['r', 'R', 'к', 'К'], ['t', 'T', 'е', 'Е'], ['y', 'Y', 'н', 'Н'], ['u', 'U', 'г', 'Г'], ['i', 'I', 'ш', 'Ш'], ['o', 'O', 'щ', 'Щ'], ['p', 'P', 'з', 'З'], ['[', '{', 'х', 'Х'], [']', '}', 'ъ', 'Ъ'], ['Delete', 'Delete', 'Delete', 'Delete']
], 
[
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], ['a', 'A', 'ф', 'Ф'], ['s', 'S', 'ы', 'Ы'], ['d', 'D', 'в', 'В'], ['f', 'F', 'а', 'А'], ['g', 'G', 'п', 'П'], ['h', 'H', 'р', 'Р'], ['j', 'J', 'о', 'О'], ['k', 'K', 'л', 'Л'], ['l', 'L', 'д', 'Д'], [';', ':', 'ж', 'Ж'], ["'", '"', 'э', 'Э'], ['Enter', 'Enter', 'Enter', 'Enter']
],
[
  ['Shift', 'Shift', 'Shift', 'Shift'], ['z', 'Z', 'я', 'Я'], ['x', 'X', 'ч', 'Ч'], ['c', 'C', 'с', 'С'], ['v', 'V', 'м', 'М'], ['b', 'B', 'и', 'И'], ['n', 'N', 'т', 'Т'], ['m', 'M', 'ь', 'Ь'], [',', '<', 'б', 'Б'], ['.', '>', 'ю', 'Ю'], ['/', '?', '.', ','], ['↑', '↑', '↑', '↑'], ['Shift', 'Shift', 'Shift', 'Shift']
],
[
  ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['Win', 'Win', 'Win', 'Win'], ['Alt', 'Alt', 'Alt', 'Alt'], ['Space', 'Space', 'Space', 'Space'], ['Alt', 'Alt', 'Alt', 'Alt'], ['←', '←', '←', '←'], ['↓', '↓', '↓', '↓'], ['→', '→', '→', '→'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
]
];

const keyboard = new Keyboard(keyboardKeys, body);

let lang = keyboard.getItemStorage('lang');
let keyCase = keyboard.getItemStorage('keyCase');

if (!lang) {
  lang = 'ENG';
  keyboard.setItemStorage('lang', lang);
}

if (!keyCase) {
  keyCase = 'lower';
  keyboard.setItemStorage('keyCase', keyCase);
}

keyboard.createKeyboard(lang, keyCase);

const textArea = document.querySelector('.area-input');

let pointerId = 0;

body.addEventListener('pointerdown', (e) => {
  if (e.target.closest('.key')) {
    pointerId = e.target;
    e.target.classList.add('highlight');

    textArea.value += pointerId.textContent;

    if (pointerId.textContent === 'Backspace') {
      // backspace
    }

    if (pointerId.textContent === 'Tab') {
      textArea.value += '    ';
    }

    if (pointerId.textContent === 'Delete') {
      // delete
    }

    if (pointerId.textContent === 'CapsLock') {
      if (keyCase === 'lower') {
        keyCase = 'upper';
        keyboard.createKeyboard('ENG', keyCase);
        keyboard.setItemStorage('keyCase', keyCase);
      } else if (keyCase === 'upper') {
        keyCase = 'lower';
        keyboard.createKeyboard('ENG', keyCase);
        keyboard.setItemStorage('keyCase', keyCase);
      }
    }

    if (pointerId.textContent === 'Enter') {
      // Enter
      textArea.value += '\n';
    }

    if (pointerId.textContent === 'Shift') {
      // Shift
    }

    if (pointerId.textContent === 'Space') {
      // space
      textArea.value += ' ';
    }
  }
});

body.addEventListener('pointerup', () => {
  pointerId.classList.remove('highlight');
});

body.addEventListener('keydown', (e) => {
  const allKeys = document.querySelectorAll('.key');
  allKeys.forEach(el => {
    if (e.key === el.textContent) {
      el.classList.add('highlight');
      textArea.value += el.textContent;
    }
  });

  if (e.key === 'CapsLock') {
    if (keyCase === 'lower') {
      keyCase = 'upper';
      keyboard.createKeyboard('ENG', keyCase);
      keyboard.setItemStorage('keyCase', keyCase);
    } else if (keyCase === 'upper') {
      keyCase = 'lower';
      keyboard.createKeyboard('ENG', keyCase);
      keyboard.setItemStorage('keyCase', keyCase);
    }
  }
})

body.addEventListener('keyup', () => {
  const allKeys = document.querySelectorAll('.key');
  allKeys.forEach(el => {
    el.classList.remove('highlight');
  });
})