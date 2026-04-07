var index = 0

function up() {
  index++
  document.getElementById("index").innerHTML = index
}
function down() {
  if (index < 1) {
    window.alert("A página não pode ser menor que um")
    
  }
  else {
    index--
    document.getElementById("index").innerHTML = index
  }
}

function dontclick() {
  window.alert("Não é possivel abrir a imagem em tela cheia")
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function search() {
  const pesquisa = document.getElementById("search").value;

  const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${pesquisa}&api_key=0twbbeHcVh7QxpozuL7dLmp3JcRsxU50`);
  const data = await res.json();

  document.getElementsByTagName("img")[0].src = data["data"][index]["images"]["downsized"]["url"];

  const consoleEl = document.getElementById("console");
  const b1 = document.getElementById("button1");
  const b2 = document.getElementById("button2");
  const b3 = document.getElementById("button3");

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.innerHTML = `
    <div id="loader">
      <div class="spinner"></div>
      <p id="loadingText"></p>
    </div>
  `;
  document.body.appendChild(overlay);

  document.body.style.pointerEvents = "none";

  b1.style.display = "hidden";
  b2.style.display = "hidden";
  b3.style.display = "hidden";

  overlay.style.display = "flex";

  const loadingText = document.getElementById("loadingText");

  let tempo = 5;

  while (tempo >= 0) {
    loadingText.innerHTML = `Espere 6s para carregar o gif\n(${tempo}s)`;
    await sleep(1000);
    tempo--;
  }

  overlay.remove();

  document.body.style.pointerEvents = "auto";

  b1.style.visibility = "visible";
  b2.style.visibility = "visible";
  b3.style.visibility = "visible";
}