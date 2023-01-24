import express from "express";

const router = express();

const plageHoraire = [
    {
        dateDebut: "20/01/2023",
        dateFin: "14/03/2023"
    }
]

router.get('/', (req,res) =>{
    res.send(plageHoraire);
});

router.post('/' ,(req,res) => {
    console.log('ROUTE REACHED')
    console.log(req.body);

    //users.push();

    res.send('ROUTE REACHED');
});

export default router;