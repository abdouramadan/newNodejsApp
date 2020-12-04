const mongoose  =   require('mongoose')

const mongodb = mongoose.connect(process.env.DBURI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(res => console.log('connected to mongodb'))
.catch(err => console.log(err))