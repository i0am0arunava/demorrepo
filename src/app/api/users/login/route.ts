import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import {NextRequest,NextResponse} from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
 connect()


export async function POST(request: NextRequest){

    try{
    const reqBody=await request.json();
    console.log(reqBody)
    const {email,password}=reqBody

    const user= await User.findOne({email})
    const validPasssword=await bcryptjs.compare(password,user.password)
    if(!user){
        return NextResponse.json({error:"User doesnot exist"},{status:400})
    }else if(!validPasssword){
    return NextResponse.json({error:"Invalid password"},{status:400})
 }else{
    const tokenData={
        id:user._id,
     username:user.username,
     email:user.email
     }
     const token= await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})
     const response =NextResponse.json({
     message:"login successfully",
     success:true,
     })
     response.cookies.set("token",token,{
        httpOnly:true,
    
     })
     return response
 }
 //create token data


    } catch(error:any){
        return NextResponse.json({"dgssd":error.message}),
        {status:500}
    }
}