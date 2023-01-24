import express from 'express';
import bodyParser from "body-parser";
import usersRoutes from './routes/users'
import planningRoutes from "./routes/planning";
import plageHoraireRoutes from "./routes/planning";


const app = express();
const port = 3000;


app.use(bodyParser.json());

app.use('/users', usersRoutes)
app.use('/planning', planningRoutes)
app.use('/plageHoraire', plageHoraireRoutes)

app.get('/', (req,res) => {
    console.log('[TEST]!');
    res.send('Hello from Homepage.')
});

app.listen(port, () => {

    return console.log(`server is listening on http://localhost:${port}`);
});