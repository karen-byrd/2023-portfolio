// Book Logic
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');
const paper4 = document.querySelector('#p4');
const paper5 = document.querySelector('#p5');
const paper6 = document.querySelector('#p6');

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);

var current = 1;
var numPages = 6;
var max= numPages + 1;

function open() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-225px)";
    nextBtn.style.transform = "translateX(225px)";
}

function close(firstPage) {
    if(firstPage) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNext() {
    if(current < max) {
        switch(current) {
            case 1:
                open();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                close();
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            default:
                throw new Error("unknown");
        }
        current++
    }
}

function goPrev() {
    if(current) {
        switch(current) {
            case 2:
                close();
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 6;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 5;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 4;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 3;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 2;
                break;
            case 7:
                open();
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown");
        }
        current--;
    }
}

