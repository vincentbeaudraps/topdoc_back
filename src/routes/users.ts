import express from "express";

const router = express();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        phone: "0770384912",
        email: "vincentbeaudraps@outlook.fr",
        password: "hihi",
        role: "praticien"
    }
]

router.get('/', (req,res) =>{
    res.send(users);
});

router.post('/' ,(req,res) => {
    console.log('ROUTE REACHED')
    console.log(req.body);

    //users.push();

    res.send('ROUTE REACHED');
});

export default router;