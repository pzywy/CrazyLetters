function chngLetters()
{
    lettersDiv = document.querySelector('.letters');
    textOnPage=lettersDiv.innerHTML;
    letters = textOnPage.split('');
    lettersDiv.innerHTML='';

    
    index=1;
    timeMultiply=100;
    letters.forEach(letter => {

        setTimeout(function(){
            var singleLetter = document.createElement("div");
            singleLetter.innerHTML=letter;
            singleLetter.classList.add("animateSizeUpAndDown");
            ParentID.appendChild(singleLetter); 
        },
        timeMultiply * index);
        index+=1;
    });
}


ParentID = document.getElementById("letterDiv");
chngLetters();