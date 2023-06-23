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
        handler: (req, res) => {
    
          return res.end('Post task')
        }
      },
]