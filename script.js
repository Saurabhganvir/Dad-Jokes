const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const streakButton = document.getElementById("streakButton");
let streak = 0;

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.classList.add('cross');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

var input = document.getElementById("input-box");
input.addEventListener("keypress", function(event){
    if(event.ket ==="Enter"){
        event.preventDefault();
        document.getElementById("addTask").click();
        saveData();
    }
});


listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // console.log("clicked cross");
        streak++;
        streakButton.innerText = `${streak} Tasks`;
        saveData();
    }
},false);

// var cross = document.getElementsByClassName('cross');
// cross.addEventListener('click', function (e){
//     console.log("clicked span");
// });

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();