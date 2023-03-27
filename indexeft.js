// const express = require("express")
// const jwt = require("jsonwebtoken")


// const secret = 'Hola4@dsf'//process.env.secret.SECRET
// const app = express()

// app.post('/token', (req, res) => {

//     const { id: sub, name} = {id: 'user', name: 'admin123'}
//     const token = jwt.sign({
//         sub, name,
//         exp: Date.now() + 60 * 1000
//     }, secret)
//     res.send({token})
// })

// app.get('/public', (req, res) => {
//     res.send('Publico')
// })

// app.get('/private', (req, res) => {
//     try {
//         const token = req.headers.authorization.split(" ")[1]
//         const payload = jwt.verify(token, secret)
//         if(Date.now() > payload.exp) {
//             return res.status(401).send({ error: 'Token expirado'})
//         }
//         res.send('Privado')
//     } catch (error) {
//         res.status(401).send({ error: error.message})
//     }
// })

// app.listen(3000)