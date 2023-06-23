import http from 'node:http'
import { routes } from './routes.js'

const server = http.createServer((req, res) => {
    const { method, url } = req

    const route = routes.find(route => {
        return route.method === method && route.path === url
    })

    if (route) {
       return route.handler(req, res)
    } else {
        return JSON.stringify({meg: 'Error'})
    }
    return res.end()
})

server.listen(3333)