import express from 'express'
import type { SendMessageOptions } from "chatgpt";
import { chatReply } from './chatgpt';
// import type { ChatContext, ChatMessage } from './chatgpt'
// import { chatConfig, chatReply, chatReplyProcess } from './chatgpt'

const app = express()
const router = express.Router()
app.use(express.json())

app.all('*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

router.post('/chat', async (req, res) => {
  console.log('---req begin----', req.body);
  try {
    const { message, options = {} } = req.body as { message: string; options?: SendMessageOptions }
    const response = await chatReply(message, options)
    res.send(response)
  }
  catch (error) {
    res.send(error)
  }
})


app.use('', router)
app.use('/api', router)

app.listen(9000, () => console.log('Server is running on port 9000'))
