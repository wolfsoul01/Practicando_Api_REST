import http from 'node:http'

const PORT= 3000

const app =http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/html')

    res.end('<h1>hola mundo</h1>')
})

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})

