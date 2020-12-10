const mongoose = require('mongoose')
//db connect
const MONGO_URI = 'mongodb+srv://samir:samir@cluster0.sj8rp.mongodb.net/eatry?retryWrites=true&w=majority'
const connectDB = async ()=>{
    try{
        console.log(MONGO_URI)
        const conn =  await mongoose.connect(MONGO_URI , {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        
       

        console.log(`Connected to URI `)
    }
    catch(err){
        console.log(err)
    }
}

module.exports=connectDB