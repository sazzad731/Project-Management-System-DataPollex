import { Request, Response } from "express"
import { userServices } from "./user.service"

const login = async (req: Request, res: Response)=> {
  const {email, password} = req.body
  try {
    const result = await userServices.login(email, password)
    res.status(200).send({
      success: true,
      message: "Login successful",
      result: result
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message
    })
  }
}



const signup = async (req: Request, res: Response) => {
  try {
    const result = await userServices.signup(req.body);
    res.status(201).json({
      success: true,
      message: "Sign up successful",
      result: result
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Sign up failed",
      error: error.message,
    });
  }
}


export const userControllers = {
  login,
  signup
};