// https://swapi.dev/api/people/1

// const req = new XMLHttpRequest();

// // adding event handlers

// req.onload = function(){
//     console.log("it loaded");
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// }

// req.onerror = function(){
//     console.log("error");
//     console.log(this);
// }

// req.open("GET", "https://swapi.dev/api/people/10" );
// req.send();



// -------------------------FETCH------------- 
// it support promises  

// fetch("https://swapi.dev/api/people/4")
//     .then(res =>{
//         console.log("Resolved", res);
//         // res.json().then(data=>{console.log("Json done", data)})
//         // this works as well but just to keep it clean
//         return res.json()
//     })
//     .then(data=>{
//         console.log("json done", data);
//     })
//     .catch(e =>{
//         console.log("error", e);
//     })


// const loadStarWarsPeople = async () => {
//     const res = await fetch("https://swapi.dev/api/people/1");
//     const data = await res.json();
//     console.log(data);
// };

// loadStarWarsPeople();



// =====-------AXIOS----------===========
// its a library no included in script directly
//  there is a github repository for it to be used
// axios.get("https://swapi.dev/api/people/2")
// .then(res=>{
//     console.log("Response", res.data);
// })
// .catch(e=>{
//     console.log("error", e);
// })


const getSWAP = async (num) =>{
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${num}`);
        console.log(res.data);
    }catch(e){
        console.log("error", e);
    }

}
// getSWAP(4);

const jokes = document.getElementById('jokes');
const button = document.getElementById('getJokes');
// const button2 = document.getElementById('getJokes');

const getDadJoke = async () =>{
    const config = {headers : {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/',  config);
    console.log(res.data.joke);
    console.log(res.data.joke);
    const newLI = document.createElement("LI");
    newLI.append(res.data.joke);
    jokes.append(newLI);
}

// getDadJoke();

button.addEventListener('click', getDadJoke);