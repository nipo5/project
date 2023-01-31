const projectImg = document.getElementsByClassName('project')

const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
]

if(images.length === projectImg.length) {
    for(let i = 0; i < projectImg.length; i++) {
        console.log(projectImg[i].style);
        projectImg[i].style.backgroundImage = `url('./images/${images[i]}')`
    }
}

