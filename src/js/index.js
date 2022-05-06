import '../styles/main.scss';
import Keyboard from './keyboard';

const body = document.querySelector('body');

const keyboardKeys = [
[
  ['`', '~', 'ё', 'Ё'], ['1', '!', '1', '!'], ['2', '@', '2', '"'], ['3', '#', '3', '№'], ['4', '$', '4', ';'], ['5', '%', '5', '%'], ['6', '^', '6', ':'], ['7', '&', '7', '?'], ['8', '*', '8', '*'], ['9', '(', '9', '('], ['0', ')', '0', ')'], ['-', '_', '-', '_'], ['=', '+', '=', '+'], ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'backspace']
], 
[
  ['Tab', 'Tab', 'Tab', 'Tab', 'tab'], ['q', 'Q', 'й', 'Й'], ['w', 'W', 'ц', 'Ц'], ['e', 'E', 'у', 'У'], ['r', 'R', 'к', 'К'], ['t', 'T', 'е', 'Е'], ['y', 'Y', 'н', 'Н'], ['u', 'U', 'г', 'Г'], ['i', 'I', 'ш', 'Ш'], ['o', 'O', 'щ', 'Щ'], ['p', 'P', 'з', 'З'], ['[', '{', 'х', 'Х'], [']', '}', 'ъ', 'Ъ'], ['Delete', 'Delete', 'Delete', 'Delete', 'delete']
], 
[
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'capslock'], ['a', 'A', 'ф', 'Ф'], ['s', 'S', 'ы', 'Ы'], ['d', 'D', 'в', 'В'], ['f', 'F', 'а', 'А'], ['g', 'G', 'п', 'П'], ['h', 'H', 'р', 'Р'], ['j', 'J', 'о', 'О'], ['k', 'K', 'л', 'Л'], ['l', 'L', 'д', 'Д'], [';', ':', 'ж', 'Ж'], ["'", '"', 'э', 'Э'], ['Enter', 'Enter', 'Enter', 'Enter', 'enter']
],
[
  ['Shift', 'Shift', 'Shift', 'Shift', 'shift-left'], ['z', 'Z', 'я', 'Я'], ['x', 'X', 'ч', 'Ч'], ['c', 'C', 'с', 'С'], ['v', 'V', 'м', 'М'], ['b', 'B', 'и', 'И'], ['n', 'N', 'т', 'Т'], ['m', 'M', 'ь', 'Ь'], [',', '<', 'б', 'Б'], ['.', '>', 'ю', 'Ю'], ['/', '?', '.', ','], ['↑', '↑', '↑', '↑', 'arrow-top'], ['Shift', 'Shift', 'Shift', 'Shift', 'shift-right']
],
[
  ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ctrl-left'], ['Win', 'Win', 'Win', 'Win', 'win'], ['Alt', 'Alt', 'Alt', 'Alt', 'alt-left'], ['Space', 'Space', 'Space', 'Space', 'space'], ['Alt', 'Alt', 'Alt', 'Alt', 'alt-right'], ['←', '←', '←', '←', 'arrow-left'], ['↓', '↓', '↓', '↓', 'arrow-bottom'], ['→', '→', '→', '→', 'arrow-right'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ctrl-right']
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

let pointerId = document.querySelector('.keyboard-wrapper');

body.addEventListener('pointerdown', (e) => {
  if (e.target.closest('.key')) {
    pointerId = e.target;
    e.target.classList.add('highlight');

    if (pointerId.textContent === 'Backspace') {
      // backspace
    } else

    if (pointerId.textContent === 'Tab') {
      textArea.value += '    ';
    } else

    if (pointerId.textContent === 'Delete') {
      // delete
    } else

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
    } else

    if (pointerId.textContent === 'Enter') {
      textArea.value += '\n';
    } else

    if (pointerId.textContent === 'Win') {
      // Ctrl
    } else

    if (pointerId.textContent === 'Space') {
      // space
      textArea.value += ' ';
    } else {
      // default
      textArea.value += pointerId.textContent;
    }
  }
});

body.addEventListener('pointerup', () => {
  console.log(pointerId);
  if (pointerId.classList.contains('highlight')) {
    pointerId.classList.remove('highlight');
  }
});

body.addEventListener('keydown', (e) => {
  const allKeys = document.querySelectorAll('.key');
  if (e.code === 'CapsLock') {
    e.preventDefault();
    if (keyCase === 'lower') {
      keyCase = 'upper';
      keyboard.createKeyboard(lang, keyCase);
      keyboard.setItemStorage('keyCase', keyCase);
    } else if (keyCase === 'upper') {
      keyCase = 'lower';
      keyboard.createKeyboard(lang, keyCase);
      keyboard.setItemStorage('keyCase', keyCase);
    }
    document.querySelector('.capslock').classList.add('highlight');
  } else 
  if (e.code === 'Delete') {
    e.preventDefault();
    document.querySelector('.delete').classList.add('highlight');
  } else 
  if (e.code === 'Backspace') {
    e.preventDefault();
    document.querySelector('.backspace').classList.add('highlight');
  } else 
  if (e.code === 'Tab') {
    e.preventDefault();
    document.querySelector('.tab').classList.add('highlight');
    textArea.value += '    ';
  } else 
  if (e.code === 'ShiftLeft') {
    e.preventDefault();
    if (keyCase === 'lower') {
      keyCase = 'upper';
      keyboard.createKeyboard(lang, keyCase);
      keyboard.setItemStorage('keyCase', keyCase);
    } else if (keyCase === 'upper') {
      keyCase = 'lower';
      keyboard.createKeyboard(lang, keyCase);
      keyboard.setItemStorage('keyCase', keyCase);
    }
    document.querySelector('.shift-left').classList.add('highlight');
  } else 
  if (e.code === 'ShiftRight') {
    e.preventDefault();
    if (keyCase === 'lower') {
      keyCase = 'upper';
      keyboard.createKeyboard(lang, keyCase);
      keyboard.setItemStorage('keyCase', keyCase);
    } else if (keyCase === 'upper') {
      keyCase = 'lower';
      keyboard.createKeyboard(lang, keyCase);
      keyboard.setItemStorage('keyCase', keyCase);
    }
    document.querySelector('.shift-right').classList.add('highlight');
  } else 
  if (e.code === 'AltLeft') {
    e.preventDefault();
    document.querySelector('.alt-left').classList.add('highlight');
  } else 
  if (e.code === 'AltRight') {
    e.preventDefault();
    document.querySelector('.alt-right').classList.add('highlight');
  } else 
  if (e.code === 'ControlLeft') {
    e.preventDefault();
    document.querySelector('.ctrl-left').classList.add('highlight');
  } else 
  if (e.code === 'ControlRight') {
    e.preventDefault();
    document.querySelector('.ctrl-right').classList.add('highlight');
  } else 
  if (e.code === 'Space') {
    e.preventDefault();
    document.querySelector('.space').classList.add('highlight');
    textArea.value += ' ';
  } else 
  if (e.code === 'MetaLeft') {
    e.preventDefault();
    document.querySelector('.win').classList.add('highlight');
  } else
  if (e.code === 'Enter') {
    e.preventDefault();
    document.querySelector('.enter').classList.add('highlight');
    textArea.value += '\n';
  } else
  if (e.code === 'ArrowUp') {
    e.preventDefault();
    document.querySelector('.arrow-top').classList.add('highlight');
    textArea.value += '↑';
  } else
  if (e.code === 'ArrowLeft') {
    e.preventDefault();
    document.querySelector('.arrow-left').classList.add('highlight');
    textArea.value += '←';
  } else
  if (e.code === 'ArrowDown') {
    e.preventDefault();
    document.querySelector('.arrow-bottom').classList.add('highlight');
    textArea.value += '↓';
  } else
  if (e.code === 'ArrowRight') {
    e.preventDefault();
    document.querySelector('.arrow-right').classList.add('highlight');
    textArea.value += '→';
  } else {
    const keyPress = e.key;
    allKeys.forEach(el => {
      if (el.textContent === keyPress) {
        textArea.value += el.textContent;
        el.classList.add('highlight');
      }
    });
  }

  if (e.altKey && e.shiftKey) {
    if (lang === 'ENG') {
      lang = 'RU';
      keyboard.createKeyboard(lang, keyCase);
      keyboard.setItemStorage('lang', lang);
    } else if (lang === 'RU') {
      lang = 'ENG';
      keyboard.createKeyboard(lang, keyCase);
      keyboard.setItemStorage('lang', lang);
    }
  }
});

body.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    if (keyCase === 'lower') {
      keyCase = 'upper';
      keyboard.createKeyboard(lang, keyCase);
      keyboard.setItemStorage('keyCase', keyCase);
    } else if (keyCase === 'upper') {
      keyCase = 'lower';
      keyboard.createKeyboard(lang, keyCase);
      keyboard.setItemStorage('keyCase', keyCase);
    }
  }
  const allKeys = document.querySelectorAll('.key');
  allKeys.forEach(el => {
    if (el.classList.contains('highlight')) {
      el.classList.remove('highlight');
    }
  });
})