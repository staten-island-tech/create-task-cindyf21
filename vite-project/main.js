import './style.css'

const DOMSelectors = {
  btn1: document.getElementById("btn1"),
  btn2: document.getElementById("btn2"),
  btn3: document.getElementById("btn3"),
  btn4: document.getElementById("btn4"),
  btn5: document.getElementById("btn5"),
  btn6: document.getElementById("btn6"),
  btn7: document.getElementById("btn7"),
  container: document.getElementById("container")
};


//const URL = "http://universities.hipolabs.com/search?name"

//const URL = "https://rickandmortyapi.com/api/character"

const URL = ""

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    data.forEach(data =>
        DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `
        <div class="gallery">
        <h2 class="emoji"> ${data.name} </h2>
        </div>      
        `
    ));
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

function clearData() {
  DOMSelectors.container.innerHTML = ""
}