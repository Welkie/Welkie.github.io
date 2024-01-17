const cards =
    document.getElementsByClassName('card');
let allImages = document.getElementsByClassName('card-image');
let movesDisplay = document.querySelector('.move-counter');
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById('restart');

const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');
const winSound = new Audio('win.mp3');

const imagesLinkArray = [
    {
        id: 1,
        image:
            '/LWAI/Topic_Toys/image/pic6.jpg',
        newAlt: 'Angular Image'
    },
    {
        id: 2,
        image:
            '/LWAI/Topic_Toys/image/pic1.jpg',
        newAlt: 'HTML Image'
    },
    {
        id: 3,
        image:
            '/LWAI/Topic_Toys/image/pic2.jpg',
        newAlt: 'JavaScript Image'
    },
    {
        id: 4,
        image:
            '/LWAI/Topic_Toys/image/pic5.jpg',
        newAlt: 'React Image'
    },
    {
        id: 5,
        image:
            '/LWAI/Topic_Toys/image/pic4.jpg',
        newAlt: 'Vue Image'
    },
    {
        id: 6,
        image:
            '/LWAI/Topic_Toys/image/pic2.jpg',
        newAlt: 'JavaScript Image'
    },
    {
        id: 7,
        image:
            '/LWAI/Topic_Toys/image/pic4.jpg',
        newAlt: 'Vue Image'
    },
    {
        id: 8,
        image:
            '/LWAI/Topic_Toys/image/pic1.jpg',
        newAlt: 'HTML Image'
    },
    {
        id: 9,
        image:
            '/LWAI/Topic_Toys/image/pic3.jpg',
        newAlt: 'CSS Image'
    },
    {
        id: 10,
        image:
            '/LWAI/Topic_Toys/image/pic6.jpg',
        newAlt: 'Angular Image'
    },
    {
        id: 11,
        image:
            '/LWAI/Topic_Toys/image/pic3.jpg',
        newAlt: 'CSS Image'
    },
    {
        id: 12,
        image:
            '/LWAI/Topic_Toys/image/pic5.jpg',
        newAlt: 'React Image'
    }
]

// function to restart the game 
const restartGame = () => {
    let toggledCard =
        document.getElementsByClassName('card toggled');
    imagesLinkArray.sort(() => Math.random() - 0.5);
    Object.values(toggledCard).forEach(function (el) {
        setTimeout(() => {
            el.classList.remove("toggled");
        }, 0);
    })
    toggledCardsArray.length = 0;
    move = 0;
    winCount = 0;
    movesDisplay.innerText = `Moves: ${move}`;
    let allImagesSrc = document.getElementsByClassName('card-image');
    Object.values(allImagesSrc).forEach((el, index) => {
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imagesLinkArray[index].id
    })
}
restart.addEventListener('click', restartGame);

//checking for the last clicked and current 
//clicked cards and applying changes accordingly 
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        this.classList.add("toggled");
        toggledCardsArray.push(this);
        let thisImgSrc = this.querySelector('.card-image').src;
        let previousImgSrc =
            toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src;
        if (thisImgSrc !== previousImgSrc) {
            toggledCardsArray.forEach(function (el) {
                setTimeout(() => {
                    el.classList.remove("toggled");
                }, 500);
            })
            toggledCardsArray.length = 0;
            move++;
            incorrectSound.play();
        }
        else {
            toggledCardsArray.length = 0;
            move++;
            winCount++;
            correctSound.play();
        }
        movesDisplay.innerText = `Moves: ${move}`;
        if (winCount === 6) {
            setTimeout(() => {
                winSound.play();
                alert(`Congratulations!!! You won the game in ${move} moves.`)
            }, 300)
        }
    })
}
