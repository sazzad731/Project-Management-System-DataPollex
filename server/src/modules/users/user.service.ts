import {User} from "./user.model"
import jwt from "jsonwebtoken"
import config from "../../config"
import bcrypt from "bcryptjs"

const login = async(email: string, password: string)=>{
  const user = await User.findOne({ email })
  if (!user) {
    return null
  }

  const isMatched = await bcrypt.compare(password, user.password);
  if(!isMatched){
    return null
  }

  const token = jwt.sign({id: user._id, email: user.email}, config.jwt_secret!)
  return {
    user: {
      id: user._id.toString(),
      email: user.email,
    },
    token: token,
  };
}




interface SignupPayload {
  name: string;
  email: string;
  password: string;
  role: string;
}
const signup = async (payload: SignupPayload) => {
  const { name, email, password, role } = payload;
  const hashedPassword = await bcrypt.hash(password, 10);
  const doc = { name, email, password: hashedPassword, role };
  const result = await User.insertOne(doc);
  return result
}



export const userServices = {
  login,
  signup
}