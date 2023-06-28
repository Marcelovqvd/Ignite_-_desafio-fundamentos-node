import http from 'node:http'
import {routes} from './routes.js'


const server = http.createServer(async (req, res) => {
    const { method, url } = req
    
    const route = routes.find(route => {
        return route.path === url && route.method === method;
    })

    if (route) {       
        route.handler(req, res)        
    }
})

server.listen(3333)
