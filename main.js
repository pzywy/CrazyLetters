function chngLetters()
{
    lettersDiv = document.querySelector('.letters');
    textOnPage=lettersDiv.innerHTML;
    letters = textOnPage.split('');
    lettersDiv.innerHTML='';

    
    index=1;
    timeMultiply=150;
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

function toggleRotate()
{
    letter = document.querySelectorAll('.animateSizeUpAndDown');

    letter.forEach(singleLetter =>
        {
            singleLetter.classList.toggle('rotateInf');
        })
}



function epilepsy()
{
    document.body.classList.toggle('epilepsy');
    
}