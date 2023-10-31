import express, {Application, Response} from "express"
import cors from "cors"
import "./Utils/db.Config"
import { mainApp } from "./mainApp";

const port : number = 9000;
const app: Application = express();

app.use(cors());
app.use(express.json());
mainApp(app);

const server = app.listen(port, () =>{
    console.log("Server is up and running !!!🔥🔥")
})

process.on("uncaughtException", (err: Error) =>{
    console.log("uncaughtException", err);

    process.exit(1);
});

process.on("rejectionHandled", (reason: any)=>{
    console.log("rejectionHandled", reason);

    server.close(()=>{
        process.exit(1);
    })
});