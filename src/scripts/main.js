const pianoKeys = document.querySelectorAll(".piano-keys .key");

const keysCheckd = document.querySelector(".key-check input");

let mapedKeys = [];
let currentVolume = 1; // Variável global para armazenar o valor do volume

const playTune = (key) => {
    let audio = new Audio(`src/tunes/${key}.wav`);
    audio.volume = currentVolume; // Aplica o volume atual ao áudio
    audio.play(); // Toca o som imediatamente

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

// Captura o controle deslizante de volume
const volumeSlider = document.querySelector(".volume-slader input");
const handleVolume = (e) => {
    currentVolume = e.target.value; // Atualiza o volume globalmente
    console.log(currentVolume); // Loga o volume para fins de depuração
};
volumeSlider.addEventListener("input", handleVolume);

const showHiteKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hiden"))
}

keysCheckd.addEventListener("click",showHiteKeys)

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key); // Armazena as teclas mapeadas
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key); // Toca a nota correspondente à tecla pressionada
    }
});



