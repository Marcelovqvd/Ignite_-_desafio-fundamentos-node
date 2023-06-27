export async function json(req, res) {
    const buffers = []
        
        for await (const c of req) {
            buffers.push(c)
        }

        try {
            req.body = JSON.parse(buffers)
        } catch (error) {
            req.body = null
        }
        
        res.setHeader('Content-type', 'Application/json')
}