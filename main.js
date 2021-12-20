

const sections = document.querySelectorAll('.section');
let takenHugs = 1;
let hugs = [
    './hugs/1.gif',
    './hugs/2.gif',
    './hugs/3.gif',
    './hugs/4.gif',
    './hugs/5.gif',
    './hugs/6.gif',
    './hugs/7.gif',
    './hugs/8.gif',
    './hugs/9.gif',
    './hugs/10.gif',
];

let shuffle = (array) => {
    let currentIndex = hugs.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [hugs[currentIndex], hugs[randomIndex]] = [
        hugs[randomIndex], hugs[currentIndex]];
    }
  }

shuffle();
document.getElementById('m3lshBtn').addEventListener('click', () => {
    sections.forEach(elmnt => {
        elmnt.classList.remove('active');
    });
    
    document.getElementById('m3lsh').classList.add('active');
});


document.getElementById('hugBtn').addEventListener('click', () => {
    sections.forEach(elmnt => {
        elmnt.classList.remove('active');
    });
    changeHug();
    document.getElementById('hug').classList.add('active');
});
document.getElementById('m3lshBtn').addEventListener('click', () => {
    sections.forEach(elmnt => {
        elmnt.classList.remove('active');
    });
    
    document.getElementById('blueVid').play();
    document.getElementById('blue').classList.add('active');
});


let changeHug = () => {
    if(takenHugs === 5){
        document.getElementById('block_hugs').style.display = 'flex';
        document.getElementById('m3lsh_pic').style.display = 'none';
        document.getElementById('hugAgain').innerText = 'آخر واحد يسطا بالله عليك';
    }
    if(takenHugs === 6){
        document.getElementById('block_hugs').style.display = 'none';
        document.getElementById('m3lsh_pic').style.display = 'inline';
        document.getElementById('hugAgain').style.display = 'none';
    }
    document.getElementById('m3lsh_pic').setAttribute('src',  hugs[takenHugs] )
    takenHugs++;
    
}

document.getElementById('hugAgain').addEventListener('click', changeHug);