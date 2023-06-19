import express, { Request, Response } from "express";
import mongoose from "mongoose";
import DeckModel from "./models/Deck";

const app = express();
app.use(express.json());

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new DeckModel({
        title: "Fuck me",
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

mongoose
    .connect(
        "mongodb+srv://zetomis:memaybeo@cluster.o5cp4ko.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(5000, () => {
            console.log("Start listen on port 5000");
        });
    });
