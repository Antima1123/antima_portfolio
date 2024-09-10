import contactModel from "@/model/schema";
import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'
import { Resend } from "resend";
 
const resend = new Resend(process.env.RESEND_API_KEY);

const mailContact = async(email:string,name:string) =>{

    const options ={
        from: 'antima@resend.dev',
        to: email,
        subject: `Thankyou for contacting...`,
        html: `<div>Thankyou ${name} for contacting me, <br/><br/> I will soon respone to your query request <br/>Have a nice day ahead! </div>`
    }

    try {
        const respone = await resend.emails.send(options)
        console.log("mail is send successfully", respone)
    } catch (error) {
        console.log("Error in sending mail",error)
        throw new Error("failed to send email")
    }

    
}

export default mailContact































//     try {
//         const user = await contactModel.findOne({email: email})

//         if(!user){
//            console.log("user not found")
//         }   
        
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
//             from: "officialknowabouttech@gmail.com",
//             to: email,
//             subject: "Thankyou for contacting...",
//             html: `<div>Thankyou ${user.name} for contacting me, <br/><br/> I will soon respone to your query request <br/>Have a nice day ahead! </div>`
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

// export default mailContact