class Keyboard {
  constructor(keyboardKeys, body) {
    this.body = body;
    this.keyboardKeys = keyboardKeys;
  }

  createKeyboard(lang, keyCase) {
    const wrapper = document.querySelector('.keyboard-wrapper');
    const keyboardWrapper = document.createElement('div');
    keyboardWrapper.className = 'keyboard-wrapper';

    if (wrapper === null) {
      const textarea = document.createElement('textarea');
      textarea.className = 'area-input';
      this.body.append(textarea);
    } else {
      this.body.removeChild(wrapper);
    }

    if (lang === 'ENG' && keyCase === 'lower') {
      for(let i = 0; i < this.keyboardKeys.length; i+= 1) {
        const keyboardLine = document.createElement('div');
        keyboardLine.classList.add(`keyboard-line`);
        keyboardLine.classList.add(`keyboard-line${i}`);

        for (let j = 0; j < this.keyboardKeys[i].length; j+= 1) {
          const button = document.createElement('div');
          button.classList.add('key');
          button.innerHTML = this.keyboardKeys[i][j][0];

          if (this.keyboardKeys[i][j][0] === 'Alt' || this.keyboardKeys[i][j][0] === 'Shift' || this.keyboardKeys[i][j][0] === 'Ctrl' || this.keyboardKeys[i][j][0] === '↑' || this.keyboardKeys[i][j][0] === '←' || this.keyboardKeys[i][j][0] === '↓' || this.keyboardKeys[i][j][0] === '→' || this.keyboardKeys[i][j][0] === 'Space' || this.keyboardKeys[i][j][0] === 'Win' || this.keyboardKeys[i][j][0] === 'Backspace' || this.keyboardKeys[i][j][0] === 'Delete' || this.keyboardKeys[i][j][0] === 'CapsLock' || this.keyboardKeys[i][j][0] === 'Enter' || this.keyboardKeys[i][j][0] === 'Tab') {
            button.classList.add(this.keyboardKeys[i][j][4]); 
          } else {
            button.dataset.code = this.keyboardKeys[i][j][4];
          }

          keyboardLine.append(button);
        }
        keyboardWrapper.append(keyboardLine);
      }
    }
    
    if (lang === 'ENG' && keyCase === 'upper') {
      for(let i = 0; i < this.keyboardKeys.length; i+= 1) {
        const keyboardLine = document.createElement('div');
        keyboardLine.classList.add(`keyboard-line`);
        keyboardLine.classList.add(`keyboard-line${i}`);
  
        for (let j = 0; j < this.keyboardKeys[i].length; j+= 1) {
          const button = document.createElement('div');
          button.classList.add('key');
          button.innerHTML = this.keyboardKeys[i][j][1];

          if (this.keyboardKeys[i][j][0] === 'Alt' || this.keyboardKeys[i][j][0] === 'Shift' || this.keyboardKeys[i][j][0] === 'Ctrl' || this.keyboardKeys[i][j][0] === '↑' || this.keyboardKeys[i][j][0] === '←' || this.keyboardKeys[i][j][0] === '↓' || this.keyboardKeys[i][j][0] === '→' || this.keyboardKeys[i][j][0] === 'Space' || this.keyboardKeys[i][j][0] === 'Win' || this.keyboardKeys[i][j][0] === 'Backspace' || this.keyboardKeys[i][j][0] === 'Delete' || this.keyboardKeys[i][j][0] === 'CapsLock' || this.keyboardKeys[i][j][0] === 'Enter' || this.keyboardKeys[i][j][0] === 'Tab') {
            button.classList.add(this.keyboardKeys[i][j][4]); 
          } else {
            button.dataset.code = this.keyboardKeys[i][j][4];
          }

          keyboardLine.append(button);
        }
        keyboardWrapper.append(keyboardLine);
      }
    }

    if (lang === 'RU' && keyCase === 'lower') {
      for(let i = 0; i < this.keyboardKeys.length; i+= 1) {
        const keyboardLine = document.createElement('div');
        keyboardLine.classList.add(`keyboard-line`);
        keyboardLine.classList.add(`keyboard-line${i}`);
  
        for (let j = 0; j < this.keyboardKeys[i].length; j+= 1) {
          const button = document.createElement('div');
          button.classList.add('key');
          button.innerHTML = this.keyboardKeys[i][j][2];

          if (this.keyboardKeys[i][j][0] === 'Alt' || this.keyboardKeys[i][j][0] === 'Shift' || this.keyboardKeys[i][j][0] === 'Ctrl' || this.keyboardKeys[i][j][0] === '↑' || this.keyboardKeys[i][j][0] === '←' || this.keyboardKeys[i][j][0] === '↓' || this.keyboardKeys[i][j][0] === '→' || this.keyboardKeys[i][j][0] === 'Space' || this.keyboardKeys[i][j][0] === 'Win' || this.keyboardKeys[i][j][0] === 'Backspace' || this.keyboardKeys[i][j][0] === 'Delete' || this.keyboardKeys[i][j][0] === 'CapsLock' || this.keyboardKeys[i][j][0] === 'Enter' || this.keyboardKeys[i][j][0] === 'Tab') {
            button.classList.add(this.keyboardKeys[i][j][4]); 
          } else {
            button.dataset.code = this.keyboardKeys[i][j][4];
          }

          keyboardLine.append(button);
        }
        keyboardWrapper.append(keyboardLine);
      }
    }

    if (lang === 'RU' && keyCase === 'upper') {
      for(let i = 0; i < this.keyboardKeys.length; i+= 1) {
        const keyboardLine = document.createElement('div');
        keyboardLine.classList.add(`keyboard-line`);
        keyboardLine.classList.add(`keyboard-line${i}`);
  
        for (let j = 0; j < this.keyboardKeys[i].length; j+= 1) {
          const button = document.createElement('div');
          button.classList.add('key');
          button.innerHTML = this.keyboardKeys[i][j][3];

          if (this.keyboardKeys[i][j][0] === 'Alt' || this.keyboardKeys[i][j][0] === 'Shift' || this.keyboardKeys[i][j][0] === 'Ctrl' || this.keyboardKeys[i][j][0] === '↑' || this.keyboardKeys[i][j][0] === '←' || this.keyboardKeys[i][j][0] === '↓' || this.keyboardKeys[i][j][0] === '→' || this.keyboardKeys[i][j][0] === 'Space' || this.keyboardKeys[i][j][0] === 'Win' || this.keyboardKeys[i][j][0] === 'Backspace' || this.keyboardKeys[i][j][0] === 'Delete' || this.keyboardKeys[i][j][0] === 'CapsLock' || this.keyboardKeys[i][j][0] === 'Enter' || this.keyboardKeys[i][j][0] === 'Tab') {
            button.classList.add(this.keyboardKeys[i][j][4]); 
          } else {
            button.dataset.code = this.keyboardKeys[i][j][4];
          }

          keyboardLine.append(button);
        }
        keyboardWrapper.append(keyboardLine);
      }
    }

    this.body.append(keyboardWrapper);    
  }

  setItemStorage(name, value) {
    localStorage.setItem(name, value);
  }

  getItemStorage(name) {
    return localStorage.getItem(name);
  }
}

export default Keyboard