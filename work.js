module.exports = {
  require(relativeFilePath) {
    try {
      return require(path.join('../', BASE_PATH, relativeFilePath));
    } catch (err) {
      console.error('Error', err);
      throw err;
    }
//hello guys
  },

  requireApi(relativeFilePath) {
    return require(path.join('../api', relativeFilePath));
  },

  import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})


//add more code here later
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
