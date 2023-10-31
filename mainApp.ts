import express, {Application, Request, Response} from "express"
import { statusCode } from "./utils/statusCode"
import studentInfo from "./router/InfoRouter"


export const mainApp = (app: Application) =>{
    app.use("/api/", studentInfo);

    app.get("/", (req: Request, res: Response) => {
        try {
            res.status(statusCode.Ok).json({
                message: "Welcome to our student exam portal"
            })
        } catch (error) {
            return res.status(statusCode.Bad_Request).json({
                message: "Error getting default route"
            })
        }
    })
}