//Creating the GreenTeam Contract List
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector(".listItems ul");
var item = document.getElementsByTagName("li");


window.addEventListener('load', function() {


    localStorage.removeItem('userList');


    var savedInput = localStorage.getItem('userList');
    if(savedInput) {
        ul.innerHTML = savedInput;
    }
});
function inputLength(){
    return input.value.trim().length;
}
function listLength(){
    return item.length;
}

function saveListToLocalStorage(){
    localStorage.setItem('userList', ul.innerHTML);
}

function createMemberElement(text){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text.trim())); //text from input -> li text
    ul.appendChild(li); //adds li to ul


    function crossOut() {
        li.classList.toggle("done");
        saveListToLocalStorage();
    }

    li.addEventListener("click", crossOut);

    //add delete x
    var deleteB = document.createElement("button");
    deleteB.appendChild(document.createTextNode("X"));
    li.appendChild(deleteB);
    deleteB.addEventListener("click", function() {
        deleteListItem(li);
    });


    function deleteListItem(li){
        ul.removeChild(li);
        saveListToLocalStorage();
    }
}

function addListAfterClick(){
    if (inputLength() > 0) //if empty don't make new li
    {
        createMemberElement(input.value);
        input.value = "";
    saveListToLocalStorage();
    }
}

function addListAfterKeypress(event)
{
    if(inputLength() > 0 && event.which ===13) { //if "enter"/"return (13 is the enter key's keycode)
        createMemberElement(input.value.trim());
        input.value = "";
        saveListToLocalStorage();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

window.addEventListener('beforeunload', function(){
    saveListToLocalStorage();
});
//END OF CREATING MEMBER LIST (BY USER INPUT)

//set button
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.colorButton');

    buttons.forEach(function (button) {
        button.addEventListener('click', function() {
            button.classList.toggle('clicked');
        });
    });
});

//start of making stickers

document.addEventListener('DOMContentLoaded', function() {
    // Array of image URLs for the stickers
    const stickerUrls = [
        ["data:image/png;base64,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", "https://www.gardenia.net/wp-content/uploads/2023/05/praying-mantis-780x520.webp"],
        ["https://media.istockphoto.com/id/1323033814/vector/cute-green-smiling-caterpillar-on-white-background.jpg?s=612x612&w=0&k=20&c=rAxPauRsQ0VyppEflvA2GHJeHwIWQc4t9zfgmJzsIpo=", "https://images.squarespace-cdn.com/content/v1/5e0eda51bd9c76034e849041/bb7fa380-8f07-466d-8081-1bc723bbdf77/justin-lauria-XtsVCzURcaE-unsplash.jpg"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-k74BJdKpAtD9E0cMoo8xQaIIdQ2a9wab-Q&s", "https://media.istockphoto.com/id/481311907/photo/ladybug-on-leaf.jpg?s=612x612&w=0&k=20&c=xnIqjtouoywN_-zfcIEzfbg62c5USWxE-hKUeeQVA8c="],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpzH80BVvOBSvsIAg4ymeC-W1x9TEZhwRgyA&s","https://www.fws.gov/sites/default/files/styles/scale_width_480/public/2021-11/monarch%20Dunkerton.jpg?itok=3Gm4I6hG"],
        ["https://media.istockphoto.com/id/1395730498/vector/illustration-of-a-pill-bug.jpg?s=612x612&w=0&k=20&c=I55dn71HQdD4YatfTfdHC16xmX4xLfS6WZ4YhfUiwhc=","https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/df99cc78900a4960b46630b289c5dd2e"],
        ["https://img.freepik.com/premium-vector/cute-grasshopper-with-big-eyes-cheeks-forest-garden-insect-bug-children-funny-character_609111-701.jpg","https://i.ytimg.com/vi/xQ13hslGa_c/maxresdefault.jpg"],
    ];
    const stickerContainer = document.getElementById('sticker-container');

    stickerUrls.forEach(function(url) {
        const frontImageUrl = url[0];
        const backImageUrl = url[1];

        const stickerDiv = document.createElement('div');
        stickerDiv.classList.add('theCard');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const frontDiv = document.createElement('div');
        frontDiv.classList.add('front');
        frontDiv.style.backgroundImage = `url(${frontImageUrl})`;

        const backDiv = document.createElement('div');
        backDiv.classList.add('back');
        backDiv.style.backgroundImage = `url(${backImageUrl})`;
        backDiv.innerHTML = `
           <span class="ref"></span>
           <!-- <h1>back of card</h1>
            <p>additional info</p> -->
        `;

        cardDiv.appendChild(frontDiv);
        cardDiv.appendChild(backDiv);

        stickerDiv.appendChild(cardDiv);
        stickerContainer.appendChild(stickerDiv);
    });
});
