const OpenAI =  require("openai");
const apikey = process.env.API_KEY || "";

const openai = new OpenAI({
  apiKey: apikey,
});

const postMessages = async (req, res) => {
    try {
      console.log(req.body);
      const message = req.body.message;
      // const response = await openai.chat.completions.create({
      //   model: "gpt-3.5-turbo",
      //   messages: [
      //     {
      //       "role": "user",
      //       "content": message
      //     }
      //   ],
      //   temperature: 1,
      //   max_tokens: 200,
      //   top_p: 1,
      //   frequency_penalty: 0,
      //   presence_penalty: 0,
      // });
      
      // const reply = response["choices"][0]["message"]["content"]
      // res.status(200).send(`${reply}`);
      res.status(200).send(`${message}`);

    } 
    catch (error) {
      res.status(500).send(error);
    }
  };
  
module.exports = {postMessages};