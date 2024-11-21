function setupKeyboardFocus(input) {
    let isKeyDown = false;
    document.addEventListener('keydown', event => {
        if (event.key === 'Tab') {
            isKeyDown = true;
        }
    });

    input.addEventListener('mousedown', event => {
        isKeyDown = false;
    });

    input.addEventListener('focus', event => {
        if (isKeyDown) {
            input.classList.add('keyboard-focus');
        }
    })

    input.addEventListener('blur', event => {
        event.target.classList.remove('keyboard-focus');
    })
};

export {setupKeyboardFocus};