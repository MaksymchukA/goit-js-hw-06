const inputFontSizeControl = document.querySelector('#font-size-control');

const text = document.querySelector('span');

inputFontSizeControl.addEventListener('input', () => {
    text.style.fontSize = `${inputFontSizeControl.value}px`
})
