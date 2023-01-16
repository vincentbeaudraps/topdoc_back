import {Request, Response} from "express";

export class Handler {
    find = async (req: Request, res: Response,) => {
        console.log('find');

        res.status(200).send("Test");
    }
}