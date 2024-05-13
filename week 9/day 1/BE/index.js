import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number
});

const UserModel = mongoose.model('User', userSchema);

app.get('/elmin', async (req, res) => {
    const getDatas = await UserModel.find()
    res.send(getDatas)
})
app.get('/elmin/:id', async (req, res) => {
    const { id } = req.params
    const getDataById = await UserModel.findById(id)
    res.send(getDataById)
})
app.post('/elmin', async (req, res) => {
    const body = req.body
    const add = new UserModel(body)
    await add.save()
    res.send("added")
})
app.put('/elmin/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body
    const update = await UserModel.findByIdAndUpdate(id, body)
    res.send('updated')
})
app.delete('/elmin/:id', async (req, res) => {
    const { id } = req.params
    const deleted = await UserModel.findByIdAndDelete(id)
    res.send('deleted')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
mongoose.connect('mongodb+srv://LordOfElmin:Lordofelmin12@elmin.1dhi0zk.mongodb.net/')
    .then(() => console.log('Connected!')); 