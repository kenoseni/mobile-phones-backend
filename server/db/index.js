import mongoose from "mongoose";
import "dotenv/config"


const connectdb = async () => {
    await mongoose.connect(
        process.env.DATABASE,
        { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
        (error) => {
            if (error) {
                console.log("Not connected to database")
            } else {
                console.log("Database connected")
            }
        }
    )
}
export default connectdb
