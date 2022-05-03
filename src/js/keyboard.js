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