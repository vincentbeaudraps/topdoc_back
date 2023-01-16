import express from 'express';
import {planningRouter} from "./controller/router";


const app = express();
const port = 3000;

app.use(planningRouter);

app.listen(port, () => {

    return console.log(`server is listening on ${port}`);
});