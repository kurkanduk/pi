//GET PI BY JS --- works slowly

// number = 0;
// function add() {
//     let input = document.getElementById("number").value;
//     number = input;
//     b()
// }
// let i = 1n;
// let x = 3n * (10n ** 40020n);
// let pi = x;
// while (x > 0) {
//         x = x * i / ((i + 1n) * 4n);
//         pi += x / (i + 2n);
//         i += 2n;
// }
// let numb = document.createElement("p")
// console.log(pi / (10n ** 20n));
// let rewritedArr = []
// a = pi.toString()
// function b() {
//     index = a.indexOf(number)
//     text = document.getElementById("Pi")
//     if(index>1250){
//         c = index - 1250;
//     }
//     else{
//         c=0
//     }
//     let r = 0;
//     let p = 0;
//     for (let i = c; i < index; i++) {
//         rewritedArr[p] = a[i]
//         p++;
//         r = i;
//     }
//     text.innerHTML = rewritedArr.join('');
//     text.appendChild(numb)
//     numb.classList.add("n");
//     numb.innerHTML = number
//     rewritedArr.length = 0;
//     for (let i = index+number.length; i < index+1250; i++) {
//         rewritedArr[p] = a[i]
//         p++;
//         r = i;
//     }
//     text.innerHTML += rewritedArr.join('');

//     console.log(index)
//     rewritedArr.length = 0;
// }
//import * as piString from "piString.js";
//import { piString } from "./piString";

const toggleSwitch = document.querySelector('input[type="checkbox"]');

function switchTheme(e) {
    let gitBut = document.querySelector('.footer-button')
    let main = document.querySelector('.main-container');
    let back = document.querySelector('.white-bg');
    if (e.target.checked) {
        back.style.height = "100%";
        back.style.top = "0";
        main.style.filter = "invert(100%)";
        gitBut.style.filter = "invert(100%)";
        
    }
    else{
        back.style.height = "0px";
        back.style.top = "100%";
        main.style.filter = "none";
        gitBut.style.filter = "none";
    }

}

toggleSwitch.addEventListener('change', switchTheme, false);
let dele = document.getElementById("btn-remove");
let input = document.getElementById("textarea");
function removeSymbols(){
    input.value = '';
}
function findNumb(){
    let index = piString.replace(/\s+/g, '').search(input.value.toString());
    pi =  piString.replace(/\s+/g, '');
    let val = input.value;
    let stro = '...';
    if(index >= 200){
        for(let i = index-200; i < index; i++){
            console.log(i)
             stro += pi[i];
        }
        let inp = input.value.toString();
        stro += inp;
        for(let i = index + input.value.length; i < index + 200; i++){
            stro += pi[i];
       }

    }
    else{
        stro = ''
        for(let i = 0; i < index; i++){
            console.log(i)
             stro += pi[i];
        }
        let inp = input.value.toString();
        stro += inp;
        for(let i = index + input.value.length; i < index + 200; i++){
            stro += pi[i];
       }

    }
    stro += '...'

    indexOfNumb = stro.search(input.value.toString())
    input.value = stro.replace(/\s/g, '')

    input.value += '\n\nYour number index is: ' + index + ".";
    input.setSelectionRange(indexOfNumb,indexOfNumb+val.length);
    input.focus();
}
dele.onclick = removeSymbols;
let find = document.getElementById("btn-find");
find.onclick = findNumb;
