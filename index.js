/*const http = require('http')
const server = http.createServer( (req, res) => {
    res.status = 200
    res.setHeader('Content-Type', 'text-plain')
    res.end('Hola mundo a nodeJS')
})
server.listen(5000, () => { console.log('Server running') })*/


const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//route
app.get('/hola', (req, res) => res.send('Hola Jerson') )


app.get('/', (req, res) => res.send('Get') )
app.delete('/', (req, res) => res.send('Delete') )
app.put('/', (req, res) => res.send('Put') )
app.post('/', (req, res) => res.send('Post Hola') )

app.get('/sumar/:n1/:n2', (req, res) => { //url params
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let suma = n1 + n2
    res.send( "suma: " + suma )
})

app.get('/multiplicar', (req, res) => { //get query-string params
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let multiplciar = n1 * n2
    res.send('Multiplicar: ' + multiplciar)
})

app.get('/mayor', (req, res) => { //get query-string params
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let n3 = Number(req.query.n3)
    let mayor=0;
        if(n1>n2 && n1>n2 && n1>n3)
        mayor = n1;
        else if (n2>n1 && n2>n3)
        mayor = n2;
       else if(n3>n2)
        mayor = n3;
  res.send('Número Mayor: ' + mayor)
})


app.get('/saludo', (req, res) => { //get query-string params
    let name = req.query.name
  res.send('Hola señorito: ' + name)
})



app.listen(5000, () => console.log('Server expressJS Running') )