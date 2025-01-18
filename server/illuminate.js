import OpenAI from 'openai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';


// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure dotenv with the path to your .env file (which is one level up from server/)
dotenv.config({ path: path.join(__dirname, './.env') });




async function Illuminate (input,targetLanguage) {
    console.log("input in Illuminate func", input)
    console.log("target language in Illuminate func", targetLanguage)
    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
    }); 

    const chatCompletion = await client.chat.completions.create({
          messages: [ { role: 'user', content: `Translate the following text. Provide only the translated text without any additional explanation or commentary.


Original text
=======
${input}
=======


Target language
=======
${targetLanguage}
=======` }],
          model: 'o1-mini',
        });

        return chatCompletion.choices[0]?.message?.content
}

export default Illuminate;