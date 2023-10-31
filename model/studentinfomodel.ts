import {ObjectId} from "mongodb"

export class studentPortalModel {
    public _id: ObjectId;
    public name: string;
    public score: number;
    public course: string;
    public grade: string

    constructor(name: string, score: number, course: string, grade: string) {
        this._id = new ObjectId;
        this.name = name;
        this.score = score;
        this.course = course;
        this.grade = grade;
    }
}