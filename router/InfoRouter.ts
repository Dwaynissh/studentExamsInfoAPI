import { Router } from "express";
import {
    createExamInfo,
    readExamInfo,
    readExamInfoByID,
    readExamInfoByScore,
    readExamInfoByCourse,
    updateExamInfo,
    deleteExamInfo
} from "../controller/infocontroller"


const router: Router = Router ();

router.route("/create-info").post(createExamInfo)
router.route("/read-exam-info").get(readExamInfo)
router.route("/read-exam-info/:studentID").get(readExamInfoByID)
router.route("/read-exam-info-score").get(readExamInfoByScore)
router.route("/read-exam-info-course").get(readExamInfoByCourse)
router.route("update-exam-info/:studentID").patch(updateExamInfo)
router.route("delete-exam-info/:studentID").delete(deleteExamInfo)

export default router