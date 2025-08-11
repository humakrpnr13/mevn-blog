const {GoogleGenerativeAI} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash"});

exports.sendMessage = async (req, res) => {
    const {message} = req.body;

    if(!message){
        return res.status(400).json({reply:  "Message content cannot be empty."});
    }

    try{
        const result = await model.generateContentStream({
            contents: [{role: "user", parts: [{text: message}]}]
        });

        let botResponse = "";
        for await(const chunk of result.stream){
            const chunkText = chunk.text();
            botResponse += chunkText;
        }

        res.status(200).json(({reply: botResponse}));
    } catch(error) {
        console.error("Error processing the request with the LLM:", error);
        res.status(500).json({ reply: "Sorry, an unexpected error occurred. Please try again later."});
    }
}
