import express from 'express'
import cors from 'cors'
import commentRoutes from '@/comments/comments.routes'
import { PORT } from './utils/env'

const app = express()

app.use(express.json())
app.use(cors())
 
app.use('/comments', commentRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
