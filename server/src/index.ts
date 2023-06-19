import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import DeckModel from "./models/Deck";

config();

const app = express();
app.use(express.json());

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new DeckModel({
        title: "Fuck me",
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
    app.listen(5000, () => {
        console.log("Start listen on port 5000");
    });
});
