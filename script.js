let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let score = document.getElementById("score");


const init = () => {
    if(!name1.value || !name2.value) return

    let result = calculateLoveBetween(name1.value, name2.value);
    score.innerHTML = result + "%"
    const jsConfetti = new JSConfetti()
    if(result > 70){
    jsConfetti.addConfetti({
        emojis: ['❤️'],
        emojiSize: 60,
        confettiNumber: 100,
      })
    }else{
        jsConfetti.addConfetti({
            emojis: ['💔'],
            emojiSize: 70,
            confettiNumber: 30,
          })
    }
    console.log(name1.value);
    console.log(name2.value);
}

const calculateLoveBetween = (name1, name2) => {
    let combineNames = name1 + name2;
    let uniqNames = [... new Set(combineNames.toLowerCase())]

    let total = 0;

    for(var char of uniqNames){
        total += char.charCodeAt() // unique numbers
    }

    let loverPercentage = (total % 100) + 1;

    return loverPercentage;
}
