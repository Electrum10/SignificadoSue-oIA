const BotonPrompt = document.getElementById("BotonParaEnviarPrompt");
const ImprimirRespuesta = document.getElementById("ImprimirRespuesta");

BotonPrompt.addEventListener("click", () => {
  const Prompt = document.getElementById("Prompt");
  const PromptDelUsuario = Prompt.value;
  const URL_API = "https://api.openai.com/v1/chat/completions"
  const API_KEY = import.meta.env.PUBLIC_OPENAI_API_KEY
  fetch(URL_API, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo", // Puedes cambiar al modelo que prefieras
        prompt: PromptDelUsuario,
        max_tokens: 100, // Ajusta la cantidad de tokens según lo necesario
        temperature: 0.7 // Controla la creatividad de la respuesta
    })
  })
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((data) => {
    //Escribir todo el codigo con lo que quiero hacer con la API aqui:
    console.log(data)
  })
  .catch((error) => {
    console.log(error);
  })
  
});
