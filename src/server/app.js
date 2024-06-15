import express from 'express'
import cors from 'cors'
import { serverLog } from '../middlewares/serverLog.middleware.js'
import joyasRouter from '../routes/joyas.router.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())
app.use(serverLog)
app.use(joyasRouter)

app.listen(PORT, () => console.log(`Server running 👾 in http://localhost:${PORT}`))

export default app
