import '../styles/main.scss';
import Keyboard from './keyboard';
import keyboardKeys from './keydoard-data';

const body = document.querySelector('body');

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

let pointerElement = document.querySelector('.keyboard-wrapper');

const printKey = (e, method = 'keyboard') => {
  const allKeys = document.querySelectorAll('.key');

  if (method === 'keyboard') {
    e.preventDefault();
  }

  if (e.code === 'CapsLock') {
    
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
    document.querySelector('.delete').classList.add('highlight');
    textArea.value = textArea.value.slice(textArea.value[0], textArea.selectionStart) + textArea.value.slice(textArea.selectionEnd + 1, textArea.length);
  } else 
  if (e.code === 'Backspace') {
    document.querySelector('.backspace').classList.add('highlight');
    textArea.value = textArea.value.slice(textArea.value[0], textArea.selectionEnd - 1) + textArea.value.slice(textArea.selectionEnd, textArea.length);
  } else 
  if (e.code === 'Tab') {
    document.querySelector('.tab').classList.add('highlight');
    textArea.value += '    ';
  } else 
  if (e.code === 'ShiftLeft') {
    if (!e.repeat) {
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
    }
  } else 
  if (e.code === 'ShiftRight') {
    if (!e.repeat) {
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
    }
  } else 
  if (e.code === 'AltLeft') {
    document.querySelector('.alt-left').classList.add('highlight');
  } else 
  if (e.code === 'AltRight') {
    document.querySelector('.alt-right').classList.add('highlight');
  } else 
  if (e.code === 'ControlLeft') {
    document.querySelector('.ctrl-left').classList.add('highlight');
  } else 
  if (e.code === 'ControlRight') {
    document.querySelector('.ctrl-right').classList.add('highlight');
  } else 
  if (e.code === 'Space') {
    document.querySelector('.space').classList.add('highlight');
    textArea.value += ' ';
  } else 
  if (e.code === 'MetaLeft') {
    document.querySelector('.win').classList.add('highlight');
  } else
  if (e.code === 'Enter') {
    document.querySelector('.enter').classList.add('highlight');
    textArea.value += '\n';
  } else
  if (e.code === 'ArrowUp') {
    document.querySelector('.arrow-top').classList.add('highlight');
    textArea.value += '↑';
  } else
  if (e.code === 'ArrowLeft') {
    document.querySelector('.arrow-left').classList.add('highlight');
    textArea.value += '←';
  } else
  if (e.code === 'ArrowDown') {
    document.querySelector('.arrow-bottom').classList.add('highlight');
    textArea.value += '↓';
  } else
  if (e.code === 'ArrowRight') {
    document.querySelector('.arrow-right').classList.add('highlight');
    textArea.value += '→';
  } else {
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
}

body.addEventListener('pointerdown', (e) => {
  if (e.target.closest('.key')) {
    pointerElement = e.target;
    pointerElement.classList.add('highlight');
    
    if (pointerElement.classList.contains('backspace')) {
      pointerElement.code = 'Backspace';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.classList.contains('tab')) {
      pointerElement.code = 'Tab';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.classList.contains('delete')) {
      pointerElement.code = 'Delete';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.classList.contains('capslock')) {
      pointerElement.code = 'CapsLock';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.classList.contains('enter')) {
      pointerElement.code = 'Enter';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.classList.contains('shift-left')) {
      pointerElement.code = 'ShiftLeft';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.classList.contains('shift-right')) {
      pointerElement.code = 'ShiftRight';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.classList.contains('ctrl-left')) {
      pointerElement.code = 'ControlLeft';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.classList.contains('ctrl-right')) {
      pointerElement.code = 'ControlRight';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.classList.contains('win')) {
      pointerElement.code = 'MetaLeft';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.classList.contains('alt-left')) {
      pointerElement.code = 'AltLeft';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.classList.contains('alt-right')) {
      pointerElement.code = 'AltRight';
      printKey(pointerElement , 'pointer');
    } else
    if (pointerElement.textContent === 'Space') {
      pointerElement.code = 'Space';
      printKey(pointerElement , 'pointer');
    } else {
      textArea.value += pointerElement.textContent;
    }
  }
});

body.addEventListener('keydown', printKey);

body.addEventListener('pointerup', (e) => {
  if (e.target.closest('.shift-left') || e.target.closest('.shift-right')) {
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

  if (pointerElement.classList.contains('highlight')) {
    pointerElement.classList.remove('highlight');
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
    if (el.classList.contains('highlight') && el.classList.contains('shift-left') === false) {
      el.classList.remove('highlight');
    }
  });
})