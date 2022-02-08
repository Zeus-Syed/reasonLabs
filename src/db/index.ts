import * as mongoose from "mongoose";
import { MONGO_DEBUG, MONGO_URL } from "../config";

export const dbConnect = async () => {
  
    mongoose
      .connect(MONGO_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => console.log("connected"))
      .catch((err) => console.log("error ", err));

    console.log(MONGO_DEBUG, typeof MONGO_DEBUG);
    mongoose.set("debug", eval(MONGO_DEBUG));
  
};

export const dbClose = () => {
  return mongoose.disconnect();
};
