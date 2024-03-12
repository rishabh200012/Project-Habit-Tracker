import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import {connectDb} from './config/mongoose.js';
import router from './routes/index.js';

const port=3000;
const app = express();
app.use(express.urlencoded({ extended: true }))

app.use(express.static('./assets'))
app.use(expressLayouts);


//Extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use express router
app.use('/', router)

app.listen(port,function(error)
{
    if(error)
    {
        console.log(`Error in runnin the server. Error is ${error}`)
    }

    console.log(`Server is up on the port : ${port}`)
    connectDb();
})