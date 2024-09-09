// import contactModel from "@/model/schema";
// import { NextResponse } from "next/server"
// import nodemailer from 'nodemailer'
 

// const mailContact = async({email}:any) =>{
//     try {
//         const user = await contactModel.find(email)
        
        
//         const transport = nodemailer.createTransport({
//             service: "gmail",
//             secure : true,
//             port : 465,
//             auth: {
//                 user: "officialknowabouttech@gmail.com",
//                 pass: "ubvo yjkd uumj ckow"
      
//             }
//         });
    
//         const emailOption = {
//             from: email,
//             to: "antima1574@gmail.com",
//             subject: "Message from Portfolio website",
//             html: `Hello i am ${email} <br> Subject:- ${user.subject}`
//           }
//         const mailResponse = await transport.sendMail(emailOption)
//         return mailResponse;


//     } catch (error) {
//         return NextResponse.json({
//             message: "Contact Email error"
//         },
//     {
//         status: 500
//     }) 
//     }
// }