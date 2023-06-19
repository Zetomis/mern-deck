import mongoose from "mongoose";

const DeckSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
});

const DeckModel = mongoose.model("Deck", DeckSchema);
export default DeckModel;
