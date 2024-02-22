
const mainHeader = document.querySelector('.main-header');
let lastScrollTop = 0;

// Функция для проверки направления скролла и применения соответствующего эффекта
function handleScroll() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // Прокрутка вниз
        mainHeader.style.transition = 'transform 0.3s ease';
        mainHeader.style.transform = 'translateY(-96%)';
        mainHeader.style.borderBottom = '3px solid var(--dark-blue)';
    } else {
        // Прокрутка вверх
        mainHeader.style.transition = 'transform 0.3s ease';
        mainHeader.style.transform = 'translateY(0)';
        mainHeader.style.borderBottom = '2px solid var(--dark-blue)';
    }

    lastScrollTop = st <= 0 ? 0 : st; // Для поддержки поведения в iOS
}

function createArticle(){
    let maker = document.querySelector(".sec-menu");
    maker.style.visibility = "visible";
}

let createArt = document.getElementById("create");
let cross = document.getElementById("sec-menu-cross");
let maker = document.querySelector(".sec-menu");

cross.addEventListener("click", () => {
    maker.style.visibility = "hidden";
})
createArt.addEventListener("click", createArticle)

// Слушаем событие прокрутки
window.addEventListener('scroll', handleScroll);

const helpSpan = document.getElementById("help");
const infoDiv = document.querySelector(".info");

let helpSpanOpacity = 1;

const infoHelp = document.querySelector(".info");
const infoText = document.querySelector(".info-text");

helpSpan.addEventListener("click", function() {
    infoDiv.style.visibility = "visible";
    if(helpSpanOpacity == 1){
        infoDiv.style.display = "flex";
        infoDiv.style.opacity = helpSpanOpacity.toString();
        let timer = setTimeout(function (e){
            infoHelp.style.width = "40vw";
            infoText.style.opacity = "1";
        }, 1000);
        let timer2 = setTimeout(function (e){
            infoHelp.style.height = "50vh";
        }, 1600)
        --helpSpanOpacity;
    }else{
        let timer = setTimeout(function (e){
            infoHelp.style.width = "5vh"
        }, 400);
        let timer2 = setTimeout(function (e){
            infoHelp.style.height = "5vh";
        }, 1000);
        let timer3 = setTimeout(function (e){
            infoDiv.style.opacity = "0";
        }, 1550);
        let timer4 = setTimeout(function (){
            infoDiv.style.display = "none";
        }, 2000);

        ++helpSpanOpacity
    }
});

const answerDiv = document.querySelector(".answer");

infoText.addEventListener("mouseover", function() {
    answerDiv.style.width = "40vw";
    answerDiv.style.height = "50vh";
    answerDiv.style.overflowWrap = "break-word";
    infoHelp.style.width = "0";
    infoHelp.style.height = "0";
    infoHelp.style.padding = "0";
});

answerDiv.addEventListener("mouseover", function (){
    answerDiv.style.width = "40vw";
    answerDiv.style.height = "50vh";
    answerDiv.style.padding = "2%";
    answerDiv.style.overflowWrap = "break-word";
    infoHelp.style.width = "0";
    infoHelp.style.height = "0";
    infoHelp.style.padding = "0";
});

answerDiv.addEventListener("mouseout", function() {
    answerDiv.style.width = "0";
    answerDiv.style.height = "0";
    answerDiv.style.padding = "0";
    infoHelp.style.width = "40vw";
    infoHelp.style.height = "50vh";
});

window.addEventListener("load", function (){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3333/', true);

    xhr.send();


    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);

                let q1 = document.getElementById("firstArticle");
                let q2 = document.getElementById("secondArticle");
                let q3 = document.getElementById("thirdArticle");
                let q4 = document.getElementById("fourthArticle");

                console.log(data);

                q1.innerHTML = data.element1;
                q2.innerHTML = data.element2;
                q3.innerHTML = data.element3;
                q4.innerHTML = data.element4;

            } else {
                console.error('Ошибка при получении данных');
            }
        }
    };
})

