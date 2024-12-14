import Respuesta from "../components/Respuesta.astro";

const BotonPrompt = document.getElementById("BotonParaEnviarPrompt");
const ImprimirRespuesta = document.getElementById("ImprimirRespuesta");

BotonPrompt.addEventListener("click", () => {
  const Prompt = document.getElementById("Prompt");
  const PromptDelUsuario = Prompt.value;
  const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
  const OPENAI_API_KEY = "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"

  async function consultarOpenAI(prompt) {
    // Realiza una solicitud HTTP POST a la API
    const response = await fetch(OPENAI_API_URL, {
      method: "POST", // Método HTTP para enviar datos
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`, // Clave API
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Eres un experto analizador de sueños nocturnos que tiene la gente al dormir. Entiendes a la perfeccion los significados de cada tipo de sueño. Tu objetivo principal es decir a la gente los significados de los sueños que han tenido. Utiliza un lenguaje un poco informal y cercano. Tambien utiliza un estilo de escritura natural, sencillo y facil de entender",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    // Convierte la respuesta en un objeto JSON
    const data = await response.json();
    // Retorna el contenido de la respuesta generada por OpenAI
    return data.choices[0].message.content;
  }

  // Bloque de ejecución principal
  (async () => {
    // Consulta a OpenAI con un mensaje de ejemplo
    let respuesta = await consultarOpenAI(PromptDelUsuario);
    // Imprime la respuesta de OpenAI en la consola
    ImprimirRespuesta.textContent = respuesta
  })();
});
