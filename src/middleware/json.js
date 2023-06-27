export async function json(req) {
    const buffers = []
        
        for await (const c of req) {
            buffers.push(c)
        }
        
        req.body = JSON.parse(buffers)
}