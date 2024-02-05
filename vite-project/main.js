import './style.css'

const DOMSelectors = {
  btn1: document.getElementById("btn1"),
  btn2: document.getElementById("btn2"),
  btn3: document.getElementById("btn3"),
  btn4: document.getElementById("btn4"),
  btn5: document.getElementById("btn5"),
  btn6: document.getElementById("btn6"),
  container: document.getElementById("container")
};

const URL = "http://universities.hipolabs.com/search?name"

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    data.forEach(data =>
        DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `
        <div class="gallery">
        <h2 class="box"> ${data.name} </h2>
        <h3 class="box"> ${data.country} </h3>
        <h3 class="box"> ${data.web_pages[0]} </h3>
        <h3 class="box"> ${data.domains[0]} </h3>
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

DOMSelectors.btn1.addEventListener("click", function() {
  clearData();
  getData(`http://universities.hipolabs.com/search?name&country=United States`)
}),

DOMSelectors.btn2.addEventListener("click", function() {
  clearData();
  getData(`http://universities.hipolabs.com/search?name&country=Canada`)
}),

DOMSelectors.btn3.addEventListener("click", function() {
  clearData();
  getData(`http://universities.hipolabs.com/search?name&country=United Kingdom`)
}),

DOMSelectors.btn4.addEventListener("click", function() {
  clearData();
  getData(`http://universities.hipolabs.com/search?name&country=China`)
}),

DOMSelectors.btn5.addEventListener("click", function() {
  clearData();
  getData(`http://universities.hipolabs.com/search?name&country=Japan`)
}),

DOMSelectors.btn6.addEventListener("click", function() {
  clearData();
  getData(URL)
})