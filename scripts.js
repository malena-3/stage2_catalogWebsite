//Creating the GreenTeam Contract List
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector(".listItems ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}
function listLength(){
    return item.length;
}

function createMemberElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value)); //text from input -> li text
    ul.appendChild(li); //adds li to ul
    input.value = ""; //reset text input field

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    //add delete x
    var deleteB = document.createElement("button");

    deleteB.appendChild(document.createTextNode("X"));
    li.appendChild(deleteB);
    deleteB.addEventListener("click", deleteListItem);
    //end of adding delete x

    function deleteListItem(){
        li.classList.add("delete")
    }
}

function addListAfterClick(){
    if (inputLength() > 0) //if empty don't make new li
    {createMemberElement();}
}

function addListAfterKeypress(event)
{
    if(inputLength() > 0 && event.which ===13) { //if "enter"/"return (13 is the enter key's keycode)
        createMemberElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


//END OF CREATING MEMBER LIST (BY USER INPUT)

//start of making stickers

document.addEventListener('DOMContentLoaded', function() {
    // Array of image URLs for the stickers
    const stickerUrls = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojwuXQ8edtBKvcCwQxIiN_J0MIsPgsqHHpg&s",
        "https://media.istockphoto.com/id/1323033814/vector/cute-green-smiling-caterpillar-on-white-background.jpg?s=612x612&w=0&k=20&c=rAxPauRsQ0VyppEflvA2GHJeHwIWQc4t9zfgmJzsIpo="

        // Add more image URLs as needed
    ];
    const stickerContainer = document.getElementById('sticker-container');

    stickerUrls.forEach(function(url) {
        const stickerDiv = document.createElement('div');
        stickerDiv.classList.add('theCard');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const frontDiv = document.createElement('div');
        frontDiv.classList.add('front');
        frontDiv.style.backgroundImage = `url(${url})`;

        const backDiv = document.createElement('div');
        backDiv.classList.add('back');
        backDiv.innerHTML = `
            <h1>back of card</h1>
            <p>additional info</p>
        `;

        cardDiv.appendChild(frontDiv);
        cardDiv.appendChild(backDiv);

        stickerDiv.appendChild(cardDiv);
        stickerContainer.appendChild(stickerDiv);
    });
});
    /*
    stickerUrls.forEach(url => {
        const stickerDiv = document.createElement('div');
        stickerDiv.classList.add('theCard');


        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');



        const frontDiv = document.createElement('div');
        frontDiv.classList.add('front');
        frontDiv.style.backgroundImage = `url(${url})`;

        const backDiv = document.createElement('div');
        backDiv.classList.add('back');
        backDiv.innerHTML = `
            <h1>back of card</h1>
            <p>additional info</p>
        `;

        cardDiv.appendChild(frontDiv);
        cardDiv.appendChild(backDiv);

        stickerDiv.appendChild(cardDiv);
        stickerContainer.appendChild(stickerDiv);
    });
});
*/
