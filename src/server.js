import http from 'node:http'
import { json } from './middleware/json.js'

const tasks = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req
    

    if (req.method === 'POST' && req.url === '/tasks') {
        
        await json(req)        

        const { title, description } = req.body
        
        const task = {
            title,
            description
        }

        tasks.push(task)
        
        return res.end('Post new task')
    }

    if (req.method === 'GET' && req.url === '/tasks') {
        
        const taskList = JSON.stringify(tasks)
        return res.end(taskList)
    }    
})

server.listen(3333)
