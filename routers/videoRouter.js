import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.use(routes.videos, (req,res)=> res.send('videos'))
videoRouter.use(routes.upload, (req,res)=> res.send('upload'))
videoRouter.use(routes.videoDetail, (req,res)=> res.send('videoDetail'))
videoRouter.use(routes.editVideo, (req,res)=> res.send('editVideo'))
videoRouter.use(routes.deleteVideo, (req,res)=> res.send('deleteVideo'))

export default videoRouter;