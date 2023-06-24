import { Database } from "./database.js"

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: '/tasks',
        handler: (_, res) => { 
            const tasks = database.select('tasks')
            
            return res.end(JSON.stringify(tasks))
        }
      },
      {
        method: 'POST',
        path: '/tasks',
        handler: async(req, res) => {
            const buffers = []

            for await (const chunk of req) {
              buffers.push(chunk)
            }

            const body = JSON.parse(Buffer.concat(buffers).toString())

            return res.end(JSON.stringify(body))
        }
      },
]