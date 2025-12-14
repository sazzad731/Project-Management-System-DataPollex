import User from "./user.model"
import jwt from "jsonwebtoken"
import config from "../../config"

const login = async(email: string, password: string)=>{
  const user = await User.findOne({ email })
  if (!user) {
    return null
  }

  const isMatched = password === user.password;
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



export const userServices = {
  login
}