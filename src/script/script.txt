// const BotonPrompt = document.getElementById("BotonParaEnviarPrompt")

// BotonPrompt.addEventListener("click", () => {
// const Prompt = document.getElementById("Prompt");
// const PromptDelUsuario = Prompt.value

// const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// // Función asíncrona para consultar a OpenAI
// async function consultarOpenAI(prompt) {
//   // Realiza una solicitud HTTP POST a la API
//   const response = await fetch(OPENAI_API_URL, {
//     method: 'POST', // Método HTTP para enviar datos
//     headers: {
//       'Content-Type': 'application/json', // Tipo de contenido JSON
//       'Authorization': `Bearer ${OPENAI_API_KEY}` // Clave API para autenticar la solicitud
//     },
//     body: JSON.stringify({
//       model: 'gpt-3.5-turbo', // Especifica el modelo de OpenAI a utilizar
//       messages: [
//         { role: 'system', content: 'Eres un experto analizador de sueños nocturnos que tiene la gente al dormir. Entiendes a la perfeccion los significados de cada tipo de sueño. Tu objetivo principal es decir a la gente los significados de los sueños que han tenido. Utiliza un lenguaje un poco informal y sarcastico. Tambien utiliza un estilo de escritura natural, sencillo y facil de entender'},
//         { role: 'user', content: prompt } 
//       ]
//     })
//   });

//   // Convierte la respuesta en un objeto JSON
//   const data = await response.json();
//   // Retorna el contenido de la respuesta generada por OpenAI
//   return data.choices[0].message.content;
// }

// // Bloque de ejecución principal
// (async () => {
//   // Consulta a OpenAI con un mensaje de ejemplo
//   let respuesta = await consultarOpenAI(PromptDelUsuario);
//   // Imprime la respuesta de OpenAI en la consola
//   console.log(respuesta);
// })();

// })
