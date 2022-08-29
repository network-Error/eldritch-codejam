// import ancients from "./assets/Ancients/index.js";

const ancientCard = document.querySelector('.ancient-card');
const levelEasy = document.querySelector('.level-easy');
const deckContainer = document.querySelector('.deck-container');
const deckBtn = document.querySelector('.deck-btn');

levelEasy.style.visibility = 'hidden';
deckBtn.style.visibility = 'hidden';

// const createElement = () => {
//     const createDiv = document.createElement('div');
//     return createDiv;
// }

const selectAncient = () => {
    ancientCard.addEventListener('click', () => {
        ancientCard.classList.add('active-card');
        if (ancientCard.classList.contains('active-card')) {
            levelEasy.style.visibility = 'visible';
        }
    })
}

selectAncient()

const changeBorderColor = () => {
    levelEasy.addEventListener('click', () => {
        levelEasy.classList.add('active-level');
        if (levelEasy.classList.contains('active-level')) {
            deckBtn.style.visibility = 'visible';
        }
    })
}

changeBorderColor()

const clickDeck = () => {
    deckBtn.addEventListener('click', () => {
        // levelEasy.classList.remove('active-level');
        // ancientCard.classList.remove('active-card');
        deckBtn.style.visibility = 'hidden';

        const addStateCard = () => {
            const stateDiv = document.createElement('div');

            deckContainer.append(stateDiv);
            stateDiv.classList.add('states-cards');
            const statesCards = document.querySelector('.states-cards');
            statesCards.insertAdjacentHTML('afterbegin', `<div class="top-line"></div>`);
            statesCards.insertAdjacentHTML('beforeend', `<div class="middle-line"></div>`);
            statesCards.insertAdjacentHTML('beforeend', `<div class="bottom-line"></div>`);

            const topLine = document.querySelector('.top-line');
            const middleLine = document.querySelector('.middle-line');
            const bottomLine = document.querySelector('.bottom-line');

            const afterBegin = 'afterbegin';
            const beforeEnd = 'beforeend';
            const setElementTop = (line, afterbegin, beforeend) => {
                line.insertAdjacentHTML(afterbegin, `<span class="header-title">Первая стадия</span>`);
                line.insertAdjacentHTML(beforeend, `<div class="count-container"></div>`);

                const countContainer = document.querySelector('.count-container');
                countContainer.insertAdjacentHTML(afterBegin, `<div class="count-num"></div>`)
                countContainer.insertAdjacentHTML(beforeEnd, `<div class="count-num"></div>`)
                countContainer.insertAdjacentHTML(beforeEnd, `<div class="count-num"></div>`)
            }
            
            setElementTop(topLine, afterBegin, beforeEnd);

            const setElementMiddle = (line, after, before) => {
                line.insertAdjacentHTML(after, `<span class="header-title-middle">Вторая стадия</span>`);
                line.insertAdjacentHTML(before, `<div class="count-container-middle"></div>`);

                const countContainer = document.querySelector('.count-container-middle');
                countContainer.insertAdjacentHTML(afterBegin, `<div class="count-num">2</div>`);
                countContainer.insertAdjacentHTML(beforeEnd, `<div class="count-num">3</div>`);
                countContainer.insertAdjacentHTML(beforeEnd, `<div class="count-num">1</div>`);
            }

            setElementMiddle(middleLine, afterBegin, beforeEnd);

            const setElementBottom = (line, after, before) => {
                line.insertAdjacentHTML(after, `<span class="header-title-bottom">Третья стадия</span>`);
                line.insertAdjacentHTML(before, `<div class="count-container-bottom"></div>`);

                const countContainer = document.querySelector('.count-container-bottom');
                countContainer.insertAdjacentHTML(afterBegin, `<div class="count-num">2</div>`);
                countContainer.insertAdjacentHTML(beforeEnd, `<div class="count-num">4</div>`);
                countContainer.insertAdjacentHTML(beforeEnd, `<div class="count-num">0</div>`);
            }

            setElementBottom(bottomLine, afterBegin, beforeEnd);

            // const setEl = (line, text = 'Text', a = 1, b = 2) => {
            //     // const header = document.createElement('span');
            //     // const numStateContainer = document.createElement('div');

            //     // line.append(header, numStateContainer);
            //     line.insertAdjacentHTML('afterbegin', `<span class="header-title">${text}</span>`);
            //     line.insertAdjacentHTML('beforeend', `<div class="count-num">${a, b}</div>`)

            //     const header = document.querySelector('.header-title');
            //     const countNum = document.querySelector('.count-num');

            //     console.log(header);
            //     console.log(countNum);
            // }

            // topLine.insertAdjacentHTML('afterbegin', setEl(topLine))
            // middleLine.insertAdjacentHTML('afterbegin', setEl(middleLine))
            // bottomLine.insertAdjacentHTML('afterbegin', setEl(bottomLine))

        }
        addStateCard()

        const addDeck = () => {
            deckContainer.insertAdjacentHTML('beforeend', `<div class="deck"></div>`);
            deckContainer.insertAdjacentHTML('beforeend', `<div class="last-card"></div>`)
            const lastCard = document.querySelector('.last-card');
            lastCard.style.visibility = 'hidden'
            
            const deck = document.querySelector('.deck');
            deck.addEventListener('click', () => {
                lastCard.style.visibility = 'visible';
            })

            const mythicCards = {
                green: {
                    green1: `url('./assets/MythicCards/green/green1.png')`,
                    green7: `url('./assets/MythicCards/green/green7.png')`,
                    green8: `url('./assets/MythicCards/green/green8.png')`,
                    green9: `url('./assets/MythicCards/green/green9.png')`,
                    green10: `url('./assets/MythicCards/green/green10.png')`,
                    green11: `url('./assets/MythicCards/green/green11.png')`,
                    green12: `url('./assets/MythicCards/green/green12.png')`,
                    green13: `url('./assets/MythicCards/green/green13.png')`,
                    green14: `url('./assets/MythicCards/green/green14.png')`,
                    green15: `url('./assets/MythicCards/green/green15.png')`,
                    green16: `url('./assets/MythicCards/green/green16.png')`,
                    green17: `url('./assets/MythicCards/green/green17.png')`,
                    green18: `url('./assets/MythicCards/green/green18.png')`,
                },
                brown: {
                    brown1: `url('./assets/MythicCards/brown/brown1.png')`,
                    brown2: `url('./assets/MythicCards/brown/brown2.png')`,
                    brown3: `url('./assets/MythicCards/brown/brown3.png')`,
                    brown4: `url('./assets/MythicCards/brown/brown4.png')`,
                    brown5: `url('./assets/MythicCards/brown/brown5.png')`,
                    brown11: `url('./assets/MythicCards/brown/brown11.png')`,
                    brown12: `url('./assets/MythicCards/brown/brown12.png')`,
                    brown13: `url('./assets/MythicCards/brown/brown13.png')`,
                    brown14: `url('./assets/MythicCards/brown/brown14.png')`,
                    brown15: `url('./assets/MythicCards/brown/brown15.png')`,
                    brown16: `url('./assets/MythicCards/brown/brown16.png')`,
                    brown17: `url('./assets/MythicCards/brown/brown17.png')`,
                    brown18: `url('./assets/MythicCards/brown/brown18.png')`,
                    brown19: `url('./assets/MythicCards/brown/brown19.png')`,
                    brown20: `url('./assets/MythicCards/brown/brown20.png')`,
                    brown21: `url('./assets/MythicCards/brown/brown21.png')`,
                },
                blue: {
                    blue3: `url('./assets/MythicCards/blue/blue3.png')`,
                    blue4: `url('./assets/MythicCards/blue/blue4.png')`,
                    blue5: `url('./assets/MythicCards/blue/blue5.png')`,
                    blue7: `url('./assets/MythicCards/blue/blue7.png')`,
                    blue9: `url('./assets/MythicCards/blue/blue9.png')`,
                    blue10: `url('./assets/MythicCards/blue/blue10.png')`,
                    blue11: `url('./assets/MythicCards/blue/blue11.png')`,
                    blue12: `url('./assets/MythicCards/blue/blue12.png')`,
                }
            }
            // const arr = Object.entries(mythicCards.green);
            // const firstRound = [];
     
            // for (let i = 0; i < 4; i++) {
            //     let randomEl = Math.floor(Math.random() * arr.length);
            //     let elRan = arr[randomEl][1];
            //     firstRound[i] = elRan;
            // }
            // deck.onclick = () => {
            //     if (firstRound.length === 1) {
            //         deck.style.visibility = 'hidden';
            //     }

            //     console.log(firstRound);
            //     lastCard.style.backgroundImage = firstRound.shift(firstRound[0]); 
            //     console.log(firstRound);

            // }

            const firstRound = () => {
                const arrGreen = Object.entries(mythicCards.green);
                const arrBrown = Object.entries(mythicCards.brown);
                const arrBlue = Object.entries(mythicCards.blue);
                const greenCards = [];
                const brownCards = [];
                const blueCards = [];

                for (let i = 0; i < 1; i++) {
                    let randomEl = Math.floor(Math.random() * arrGreen.length);
                    let getRandomEl = arrGreen[randomEl][1];
                    greenCards[i] = getRandomEl;
                    // console.log(greenCards);
                }

                for (let j = 0; j < 2; j++) {
                    let randomEl = Math.floor(Math.random() * arrBrown.length);
                    let getRandomEl = arrBrown[randomEl][1];
                    brownCards[j] = getRandomEl;
                    // console.log(brownCards);
                }

                for (let k = 0; k < 1; k++) {
                    let randomEl = Math.floor(Math.random() * arrBlue.length);
                    let getRandomEl = arrBlue[randomEl][1];
                    blueCards[k] = getRandomEl;
                    // console.log(brownCards);
                }
                const arrFirstRound = greenCards.concat(brownCards, blueCards);
                // console.log(greenCards, brownCards, blueCards);

                let countNumGreen = document.querySelectorAll('div.top-line > div > .count-num')[0];
                let countNumBrown = document.querySelectorAll('div.top-line > div > .count-num')[1];
                let countNumBlue = document.querySelectorAll('div.top-line > div > .count-num')[2];
                let headerText = document.querySelector('div.top-line > span.header-title');

                countNumGreen.innerHTML = greenCards.length;
                countNumBrown.innerHTML = brownCards.length;
                countNumBlue.innerHTML = blueCards.length;
                // console.log(arrFirstRound);
                deck.onclick = () => {
                    // console.log(brownCards);
                    // lastCard.style.backgroundImage = brownCards.shift(brownCards[0]);
                    // countNumBrown.innerHTML = brownCards.length;
                    // console.log(brownCards);

                    for (let q = 0; q < 1; q++) {
                        if (arrFirstRound.length === 1) {
                            // deck.style.visibility = 'hidden';
                            headerText.style.color = 'red';
                            roundTwo();
                        }


                        let randomEl = Math.floor(Math.random() * arrFirstRound.length);
                        // console.log(randomEl);
                        let randArr = arrFirstRound.shift(arrFirstRound[randomEl]);
                        console.log(randArr);



                        // console.log(randArr.includes('green'));


                        // if (randArr.includes('green')) {
                        //     countNumGreen.innerHTML = greenCards.length - 1;
                        // } else if (randArr.includes('brown')) {
                        //     countNumBrown.innerHTML = brownCards.length - 1;
                        // } else if (randArr.includes('blue')) {
                        //     countNumBlue.innerHTML = blueCards.length - 1;
                        // } else {
                        //     console.log('Not minus');
                        // }
                        lastCard.style.backgroundImage = randArr;
                    }
                    console.log(arrFirstRound);
                    // console.log(greenCards, brownCards, blueCards);
                }
                // console.log(countNumGreen, countNumBrown, countNumBlue);
                // console.log(arrFirstRound);

                const roundTwo = () => {
                    const arrGreen = Object.entries(mythicCards.green);
                    const arrBrown = Object.entries(mythicCards.brown);
                    const arrBlue = Object.entries(mythicCards.blue);
                    const greenCards = [];
                    const brownCards = [];
                    const blueCards = [];

                    for (let i = 0; i < 2; i++) {
                        let randomEl = Math.floor(Math.random() * arrGreen.length);
                        let getRandomEl = arrGreen[randomEl][1];
                        greenCards[i] = getRandomEl;
                        // console.log(greenCards);
                    }
    
                    for (let j = 0; j < 3; j++) {
                        let randomEl = Math.floor(Math.random() * arrBrown.length);
                        let getRandomEl = arrBrown[randomEl][1];
                        brownCards[j] = getRandomEl;
                        // console.log(brownCards);
                    }
    
                    for (let k = 0; k < 1; k++) {
                        let randomEl = Math.floor(Math.random() * arrBlue.length);
                        let getRandomEl = arrBlue[randomEl][1];
                        blueCards[k] = getRandomEl;
                        // console.log(brownCards);
                    }
                    const arrTwoRound = greenCards.concat(brownCards, blueCards);
                    // console.log(greenCards, brownCards, blueCards);
    
                    let countNumGreen = document.querySelectorAll('div.middle-line > div > .count-num')[0];
                    let countNumBrown = document.querySelectorAll('div.middle-line > div > .count-num')[1];
                    let countNumBlue = document.querySelectorAll('div.middle-line > div > .count-num')[2];
                    let headerTitleMiddle = document.querySelector('div.middle-line > span.header-title-middle');
    
                    countNumGreen.innerHTML = greenCards.length;
                    countNumBrown.innerHTML = brownCards.length;
                    countNumBlue.innerHTML = blueCards.length;

                    deck.onclick = () => {
    
                        for (let q = 0; q < 1; q++) {
                            if (arrTwoRound.length === 1) {
                                // deck.style.visibility = 'hidden';
                                headerTitleMiddle.style.color = 'red';
                                roundThree();
                            }
    
    
                            let randomEl = Math.floor(Math.random() * arrTwoRound.length);
                            // console.log(randomEl);
                            let randArr = arrTwoRound.shift(arrTwoRound[randomEl]);
                            console.log(randArr);
    
                            lastCard.style.backgroundImage = randArr;
                        }
                        console.log(arrTwoRound);
                        // console.log(greenCards, brownCards, blueCards);
                    }

                    const roundThree = () => {
                        const arrGreen = Object.entries(mythicCards.green);
                        const arrBrown = Object.entries(mythicCards.brown);
                        const arrBlue = Object.entries(mythicCards.blue);
                        const greenCards = [];
                        const brownCards = [];
                        const blueCards = [];
    
                        for (let i = 0; i < 2; i++) {
                            let randomEl = Math.floor(Math.random() * arrGreen.length);
                            let getRandomEl = arrGreen[randomEl][1];
                            greenCards[i] = getRandomEl;
                            // console.log(greenCards);
                        }
        
                        for (let j = 0; j < 4; j++) {
                            let randomEl = Math.floor(Math.random() * arrBrown.length);
                            let getRandomEl = arrBrown[randomEl][1];
                            brownCards[j] = getRandomEl;
                            // console.log(brownCards);
                        }
        
                        for (let k = 0; k < 0; k++) {
                            let randomEl = Math.floor(Math.random() * arrBlue.length);
                            let getRandomEl = arrBlue[randomEl][1];
                            blueCards[k] = getRandomEl;
                            // console.log(brownCards);
                        }
                        const arrThreeRound = greenCards.concat(brownCards, blueCards);
                        // console.log(greenCards, brownCards, blueCards);
        
                        let countNumGreen = document.querySelectorAll('div.bottom-line > div > .count-num')[0];
                        let countNumBrown = document.querySelectorAll('div.bottom-line > div > .count-num')[1];
                        let countNumBlue = document.querySelectorAll('div.bottom-line > div > .count-num')[2];
                        let headerTitleBottom = document.querySelector('div.bottom-line > span.header-title-bottom');
        
                        countNumGreen.innerHTML = greenCards.length;
                        countNumBrown.innerHTML = brownCards.length;
                        countNumBlue.innerHTML = blueCards.length;
    
                        deck.onclick = () => {
        
                            for (let q = 0; q < 1; q++) {
                                if (arrThreeRound.length === 1) {
                                    headerTitleBottom.style.color = 'red';
                                    deck.style.visibility = 'hidden';
                                }
        
        
                                let randomEl = Math.floor(Math.random() * arrThreeRound.length);
                                // console.log(randomEl);
                                let randArr = arrThreeRound.shift(arrThreeRound[randomEl]);
                                console.log(randArr);
        
                                lastCard.style.backgroundImage = randArr;
                            }
                            console.log(arrThreeRound);
                            // console.log(greenCards, brownCards, blueCards);
                        }
                    }
                }

            }
            firstRound();
        }
        addDeck();
    })
}

clickDeck()
