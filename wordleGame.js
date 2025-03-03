var chances = 5;
var words = ['Night', 'Fires','Blaze','Cramp','Flute','Grasp','Hinge','Jumps','Snack','Latch','Mirth','Nudge','Plumb','Quirk','Rinse','Swept','Tread','Vigor','Whelp','Xylen','Yacht','Zebra','Bison','Charm','Douse','Elfin','Flock','Grape','Hasty','Ivory','Jumpy','Kites','Lymph','Molar','Nifty','Opine','Paved','Quest','Ravel','Slink','Tonic','Usher','Vapid','Woven','Yodel','Zesty','Ached','Blunt','Cower'];
var selectedWord = words[Math.round(Math.random(0,1))].toUpperCase();
let row = 0;
let win = false;

console.log(selectedWord);

function playGame(){
    if (chances == 0 && win === false){
        alert('you already lost please refresh the page');
        return;
    }
    if (win === true){
        alert('you already won please refresh the page');
        return;
    }
    let typedWord = (prompt('type a word')).toUpperCase();

    if(typedWord==selectedWord){
        win = true;
    }

    if (typedWord.length == 5){

        let box = (row.toString()).concat('-0')
        document.getElementById(box).innerHTML = typedWord[0];
        if (typedWord[0] === selectedWord[0]){
            document.getElementById(box).style.backgroundColor = 'green';
        }else
        if (typedWord[0] === selectedWord[1]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[0] === selectedWord[2]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[0] === selectedWord[3]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[0] === selectedWord[4]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else{
            document.getElementById(box).style.backgroundColor = 'gray';
        }

        box = (row.toString()).concat('-1')
        document.getElementById(box).innerHTML = typedWord[1];
        if (typedWord[1] === selectedWord[1]){
            document.getElementById(box).style.backgroundColor = 'green';
        }else
        if (typedWord[1] === selectedWord[0]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[1] === selectedWord[2]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[1] === selectedWord[3]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[1] === selectedWord[4]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else{
            document.getElementById(box).style.backgroundColor = 'gray';
        }

        box = (row.toString()).concat('-2')
        document.getElementById(box).innerHTML = typedWord[2];
        if (typedWord[2] === selectedWord[2]){
            document.getElementById(box).style.backgroundColor = 'green';
        }else
        if (typedWord[2] === selectedWord[1]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[2] === selectedWord[0]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[2] === selectedWord[3]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[2] === selectedWord[4]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else{
            document.getElementById(box).style.backgroundColor = 'gray';
        }

        box = (row.toString()).concat('-3')
        document.getElementById(box).innerHTML = typedWord[3];
        if (typedWord[3] === selectedWord[3]){
            document.getElementById(box).style.backgroundColor = 'green';
        }else
        if (typedWord[3] === selectedWord[1]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[3] === selectedWord[2]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[3] === selectedWord[0]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[3] === selectedWord[4]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else{
            document.getElementById(box).style.backgroundColor = 'gray';
        }

        box = (row.toString()).concat('-4')
        document.getElementById(box).innerHTML = typedWord[4];
        if (typedWord[4] === selectedWord[4]){
            document.getElementById(box).style.backgroundColor = 'green';
        }else
        if (typedWord[4] === selectedWord[1]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[4] === selectedWord[2]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[4] === selectedWord[3]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else
        if (typedWord[4] === selectedWord[0]){
            document.getElementById(box).style.backgroundColor = 'yellow';
        }else{
            document.getElementById(box).style.backgroundColor = 'gray';
        }
        

        row += 1;
        chances -= 1;
    }else{
        alert('word length is greater or less than 5')
    }

    if (chances == 0 && win === false){
        alert('you lost');
        return;
    }
    if (win === true){
        alert('you won');
        return;
    }


}
