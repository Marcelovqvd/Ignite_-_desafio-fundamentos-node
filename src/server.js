import http from 'node:http'
import { json } from './middleware/json.js'
import { Database } from './database.js'

const database = new Database()

const server = http.createServer(async (req, res) => {
    const { method, url } = req
    

    if (req.method === 'POST' && req.url === '/tasks') {
        
        await json(req, res)

        const { title, description } = req.body
        
        const task = {
            title,
            description
        }

        database.insert('tasks', task)
        
        return res.writeHead(201).end()
    }

    if (req.method === 'GET' && req.url === '/tasks') {

        const list = database.select('tasks')

        return res.end(JSON.stringify(list))
    }    
})

server.listen(3333)
