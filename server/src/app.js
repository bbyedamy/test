let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./routes')(app)

app.get('/status', function(req, res) {
    res.send('hello nodejs server')
})

app.get('/Hello/:person',function(req,res){
    console.log('Hello -'+req.params.person)
    res.send('Say Hello With'+req.params.person)
}
)
//get user by id
app.get('/user/:userId', function(req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน'+req.params.userId)
})

//get all user
app.get('/users', function(req, res) {
    res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
})

// create user
app.post('/user/', function (req, res){
    res.send('ทำการสร้างผู้ใช้งาน: '+ JSON.stringify(req.body))
})

// edit user
app.put('/user/:userId', function (req,res){
    res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ' : ' +
    JSON.stringify(req.body))
})

//delete user
app.delete('/user/:userId', function (req, res){
    res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' +
    JSON.stringify(req.body))
})

let port = 8081
app.listen(port, function() {
    console.log('server running on ' + port)
})