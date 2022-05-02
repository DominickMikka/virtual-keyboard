class Keyboard {
  constructor(keyboardKeys, body) {
    this.body = body;
    this.keyboardKeys = keyboardKeys;
  }

  createKeyboard() {
    const keyboardWrapper = document.createElement('div');
    keyboardWrapper.className = 'keyboard-wrapper';

    const textarea = document.createElement('textarea');
    textarea.className = 'area-input';

    keyboardWrapper.append(textarea);

    for(let i = 0; i < 5; i+= 1) {

      const keyboardLine = document.createElement('div');
      keyboardLine.className = 'keyboard-line';

      this.keyboardKeys[i].forEach((value, key) => {
        const button = document.createElement('div');
        button.classList.add('key');
        button.classList.add(`button${value}`);
        button.innerHTML =  key;
        keyboardLine.append(button);
      });

      keyboardWrapper.append(keyboardLine);

    }
    this.body.append(keyboardWrapper);
  }
}

export default Keyboard