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
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message
    })
  }
}


export const userControllers = {
  login
}