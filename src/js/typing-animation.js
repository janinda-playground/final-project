const body = document.querySelector("body");
const divContainer = document.createElement('div');
// const app = document.createElement('div');
body.appendChild(divContainer);
// divContainer.appendChild(app);
divContainer.classList.add('container');
// app.classList.add('app');
// app.innerText = "Welcome to Direct Entry Program";

const h1Elm = document.createElement('h1');
// h1Elm.innerHTML = 'Welcome To Direct Entry Program';
divContainer.append(h1Elm);

const texts = ['Welcome', 'to', 'direct', 'entry', 'Program']
let i = 0, k = 0, m = 0, reverse = false;

setInterval(()=>{
    if (!reverse && m++ % 2 !== 0) return;
    h1Elm.innerText = texts[i].substring(0, !reverse ? k++: k--);
    if (k === (texts[i].length + 4)){
        reverse = true;
        k = texts[i].length;
    }else if (k === 0) {
        reverse = false;
        m = 0;
        if (++i === texts.length) i = 0;
    }
}, 75);
