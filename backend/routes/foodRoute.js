import express from "express";
import { addFood, foodlist, removeFood } from "../controller/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//Image storage
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
});

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", foodlist);
foodRouter.post("/remove", removeFood);

export default foodRouter;
