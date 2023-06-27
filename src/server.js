import http from 'node:http'
import { json } from './middleware/json.js'

const tasks = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req
    

    if (req.method === 'POST' && req.url === '/tasks') {
        
        await json(req, res)

        const { title, description } = req.body
        
        const task = {
            title,
            description
        }

        tasks.push(task)
        
        return res.writeHead(201).end()
    }

    if (req.method === 'GET' && req.url === '/tasks') {
        return res.end(JSON.stringify(tasks))
    }    
})

server.listen(3333)
