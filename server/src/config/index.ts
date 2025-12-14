import dotenv from "dotenv";
import path from "path"

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  mongodb_uri: process.env.MONGODB_URI,
  jwt_secret: process.env.JWT_SECRET,
  port: process.env.PORT
}

export default config;

