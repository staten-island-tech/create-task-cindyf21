const URL = ""

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    data.forEach(data =>
        DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `
        <div class="gallery">
        <h2 class="emoji">${data.htmlCode[0]}</h2>
        <h3 class="emojiName"> ${data.name} </h3>
        </div>  
        `
    ));
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}
getData(URL);