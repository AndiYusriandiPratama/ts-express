import express, { Application, NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'

const app: Application = express()
const port: number =
  process.env.PORT !== undefined ? parseInt(process.env.PORT) : 4000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
