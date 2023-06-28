import { Database } from './database.js'
import { json } from './middleware/json.js'

const database = new Database()

export const routes = [
    {
        path: '/tasks',
        method: 'POST',
        async handler(req, res) {
            await json(req, res)

            const { title, description } = req.body
        
            const task = {
                title,
                description
            }

            database.insert('tasks', task)
            return res.writeHead(201).end()
        }
    },
    {
        path: '/tasks',
        method: 'GET',
        handler(req, res) {
            const list = database.select('tasks')
            return res.end(JSON.stringify(list))
        }
    }
]