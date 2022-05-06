import '../styles/main.scss';
import Keyboard from './keyboard';

const body = document.querySelector('body');

const keyboardKeys = [
[
  ['`', '~', 'ё', 'Ё', 'Backquote'], ['1', '!', '1', '!', 'Digit1'], ['2', '@', '2', '"', 'Digit2'], ['3', '#', '3', '№', 'Digit3'], ['4', '$', '4', ';', 'Digit4'], ['5', '%', '5', '%', 'Digit5'], ['6', '^', '6', ':', 'Digit6'], ['7', '&', '7', '?', 'Digit7'], ['8', '*', '8', '*', 'Digit8'], ['9', '(', '9', '(', 'Digit9'], ['0', ')', '0', ')', 'Digit0'], ['-', '_', '-', '_', 'Minus'], ['=', '+', '=', '+', 'Equal'], ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'backspace']
], 
[
  ['Tab', 'Tab', 'Tab', 'Tab', 'tab'], ['q', 'Q', 'й', 'Й', 'KeyQ'], ['w', 'W', 'ц', 'Ц', 'KeyW'], ['e', 'E', 'у', 'У', 'KeyE'], ['r', 'R', 'к', 'К', 'KeyR'], ['t', 'T', 'е', 'Е', 'KeyT'], ['y', 'Y', 'н', 'Н', 'KeyY'], ['u', 'U', 'г', 'Г', 'KeyU'], ['i', 'I', 'ш', 'Ш', 'KeyI'], ['o', 'O', 'щ', 'Щ', 'KeyO'], ['p', 'P', 'з', 'З', 'KeyP'], ['[', '{', 'х', 'Х', 'BracketLeft'], [']', '}', 'ъ', 'Ъ', 'BracketRight'], ['Delete', 'Delete', 'Delete', 'Delete', 'delete']
], 
[
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'capslock'], ['a', 'A', 'ф', 'Ф', 'KeyA'], ['s', 'S', 'ы', 'Ы', 'KeyS'], ['d', 'D', 'в', 'В', 'KeyD'], ['f', 'F', 'а', 'А', 'KeyF'], ['g', 'G', 'п', 'П', 'KeyG'], ['h', 'H', 'р', 'Р', 'KeyH'], ['j', 'J', 'о', 'О', 'KeyJ'], ['k', 'K', 'л', 'Л', 'KeyK'], ['l', 'L', 'д', 'Д', 'KeyL'], [';', ':', 'ж', 'Ж', 'Semicolon'], ["'", '"', 'э', 'Э', 'Quote'], ['Enter', 'Enter', 'Enter', 'Enter', 'enter']
],
[
  ['Shift', 'Shift', 'Shift', 'Shift', 'shift-left'], ['z', 'Z', 'я', 'Я', 'KeyZ'], ['x', 'X', 'ч', 'Ч', 'KeyX'], ['c', 'C', 'с', 'С', 'KeyC'], ['v', 'V', 'м', 'М', 'KeyV'], ['b', 'B', 'и', 'И', 'KeyB'], ['n', 'N', 'т', 'Т', 'KeyN'], ['m', 'M', 'ь', 'Ь', 'KeyM'], [',', '<', 'б', 'Б', 'Comma'], ['.', '>', 'ю', 'Ю', 'Period'], ['/', '?', '.', ',', 'Slash'], ['↑', '↑', '↑', '↑', 'arrow-top'], ['Shift', 'Shift', 'Shift', 'Shift', 'shift-right']
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
      
      if (el.getAttribute('data-code') === e.code) {
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