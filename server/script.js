const mongoose=require('mongoose')
const User=require('./User')

mongoose.connect('mongodb://localhost/roomrentaldb')

run() 
async function run(){
    const user=await User.create({
       
    })
}