import { Request, Response } from "express"
import { studentPortalModel } from "../model/studentinfomodel"
import { client, db } from "../Utils/db.Config"
import {statusCode} from "../utils/statusCode"
import { ObjectId } from "mongodb";

export const createExamInfo = async (req: Request, res: Response)=>{
    try {
        const { name, score, course, grade} = req.body

        const studentInfo = new studentPortalModel(name, score, course, grade)

        return res.status(statusCode.Created).json({
            message: "Exam Info Created",
            data: studentInfo,
        })
    } catch (error) {
        return res.status(statusCode.Bad_Request).json({
            message: "Error in creating Exam Info",
        });
    }
};

export const readExamInfo = async (req: Request, res: Response)=>{
    try {
        await client.connect();

        const studentInfo = await db.find().toArray();

        return res.status(statusCode.Created).json({
            message: "Exam Info Created",
            data: studentInfo,
        })
    } catch (error) {
        return res.status(statusCode.Bad_Request).json({
            message: "Error in reading Exam Info",
        });
    }
};

export const readExamInfoByID = async (req: Request, res: Response)=>{
    try {

        await client.connect();
        const {studentID} = req.params;
        db.findOne({_id: new ObjectId(studentID)})

        return res.status(statusCode.Created).json({
            message: "Exam Info Created",
            data: studentID,
        })
    } catch (error) {
        return res.status(statusCode.Bad_Request).json({
            message: "Error in reading Exam Info by ID",
        });
    }
};

export const readExamInfoByScore = async (req: Request, res: Response)=>{
    try {
        await client.connect();
        const { score } = req.body;
        const studentInfo = await db.find({ score });

        res.status(statusCode.Created).json({
            message: "book reading",
            data: studentInfo,
        })
        
    } catch (error) {
        return res.status(statusCode.Bad_Request).json({
            message: "Error in reading Exam Info by Score",
        });
    }
};

export const readExamInfoByCourse = async (req: Request, res: Response)=>{
    try {
        await client.connect();
        const { course } = req.body;
        const studentInfo = await db.find({ course });

        res.status(statusCode.Created).json({
            message: "Reading Exam Info by Course",
            data: studentInfo,
        })
    } catch (error) {
        return res.status(statusCode.Bad_Request).json({
            message: "Error in reading Exam Info by Course",
        });
    }
};

export const updateExamInfo = async (req: Request, res: Response)=>{
    try {
        await client.connect();
        const { name } = req.body;
        const { studentID } = req.params;

        const studentInfo = await db.updateOne(
            {_id: new ObjectId(studentID)},
            { $set: { name} }
        );
        res.status(statusCode.Created).json({
            message: "Info updated",
            data: studentInfo,
        })
        
    } catch (error) {
        return res.status(statusCode.Bad_Request).json({
            message: "Error in updating Exam Info",
        });
    }
};

export const deleteExamInfo = async (req: Request, res: Response)=>{
    try {
        await client.connect();
        const { studentID } = req.params;

        const studentInfo = await db.deleteOne();


        res.status(statusCode.Created).json({
            message: "Student Info deleted",
            data: studentInfo,
        })
    } catch (error) {
        res.status(statusCode.Bad_Request).json({
            message: "Error in deleting Info"
        })
    }
};