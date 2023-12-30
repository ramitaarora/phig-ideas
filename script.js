const flowerOne = document.querySelector('#flower-1');
const factOne = document.querySelectorAll('#fact-1');

const flowerTwo = document.querySelector('#flower-2');
const factTwo = document.querySelectorAll('#fact-2');

const flowerThree = document.querySelector('#flower-3');
const factThree = document.querySelectorAll('#fact-3');

flowerOne.addEventListener('mouseover', (event) => {
    for (let i=0; i < factOne.length; i++) {
        factOne[i].setAttribute('style', 'visibility: visible');
    }
})

flowerOne.addEventListener('mouseleave', (event) => {
    for (let i=0; i < factOne.length; i++) {
        factOne[i].setAttribute('style', 'visibility: hidden');
    }
})

flowerTwo.addEventListener('mouseover', (event) => {
    for (let i=0; i < factOne.length; i++) {
        factTwo[i].setAttribute('style', 'visibility: visible');
    }
})

flowerTwo.addEventListener('mouseleave', (event) => {
    for (let i=0; i < factOne.length; i++) {
        factTwo[i].setAttribute('style', 'visibility: hidden');
    }
})

flowerThree.addEventListener('mouseover', (event) => {
    for (let i=0; i < factOne.length; i++) {
        factThree[i].setAttribute('style', 'visibility: visible');
    }
})

flowerThree.addEventListener('mouseleave', (event) => {
    for (let i=0; i < factOne.length; i++) {
        factThree[i].setAttribute('style', 'visibility: hidden');
    }
})