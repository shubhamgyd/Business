import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = () => connect(`mongodb://shubhamyadav97660:${process.env.MongoPassword}@ac-aabheqf-shard-00-00.pqhsdnv.mongodb.net:27017,ac-aabheqf-shard-00-01.pqhsdnv.mongodb.net:27017,ac-aabheqf-shard-00-02.pqhsdnv.mongodb.net:27017/?ssl=true&replicaSet=atlas-115kce-shard-0&authSource=admin&appName=Cluster0`)
    .then(() => console.log("Connected To MongoDB"))
    .catch(err => console.log(err.message))

// const connectDB = () => mongoose.connect("mongodb://localhost:27017/business")
//     .then(() => console.log("Connected To MongoDB"))
//     .catch(err => console.log(err.message))



export default connectDB;