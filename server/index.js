const express = require('express')

const app = express()

require('dotenv').config()

const start = () => {
    try{
        app.listen(process.env.PORT, ()=> {
            console.log(`Server on port ${process.env.PORT} has successfully started!`)
        })
    }
    catch (e){
        console.log(e)
    }
}

start()