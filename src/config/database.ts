import mongoose from "mongoose";

class Database {
    private readonly URI:string;

    constructor(){
        this.URI =
         process.env.MONGO_URI || "mongodb://localhost:27017/express-mongo";
        this.connect();
    }

    private async connect(){
        try{
            await mongoose.connect(this.URI);
            console.log("Db connected succesfully!");
            }
        catch(error){
            console.error("Db connection failed!");
        }
    }
}

export default Database;