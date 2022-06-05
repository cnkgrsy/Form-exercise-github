

const BtnAdd = document.querySelector('.submit');

BtnAdd.addEventListener("click", changeColor);

    function changeColor() {

        const rColor = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        const gColor = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        const bColor = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        let newColor = `rgb(${rColor},${gColor},${bColor})`

        document.body.style.backgroundColor = newColor
        
    }