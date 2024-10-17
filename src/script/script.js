const Prompt = document.getElementById("Prompt");
const BotonPrompt = document.getElementById("BotonParaEnviarPrompt")

BotonPrompt.addEventListener("click", () => {
    const texto = Prompt.value;
    console.log(texto)
})