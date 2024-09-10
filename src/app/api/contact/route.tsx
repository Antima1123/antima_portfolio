import { dbConnect } from "@/dbConfig/dbConfig";
import contactModel from "@/model/schema";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import emailSchema from "@/schema/emailschema"
import { log } from "node:console";
import mailContact from "@/app/helpers/mailContact";

dbConnect()

export async function POST(request: NextRequest){
    try {
        const reqbody = await request.json();
        const validate = emailSchema.parse(reqbody)
        const {
            name,
            email,
            phone,
            subject,
            message
        } =  validate;

        const newData =  new contactModel({
            name,
            email,
            phone,
            subject,
            message
        })

        await newData.save()

        await mailContact(email, name);

        return NextResponse.json({
            message: "succefully submited your request",
            data: "sent",
            success: true
        })

        
    } catch (error) {
        // zod error
        if(error instanceof ZodError){
            return NextResponse.json({
                data: "invalid",
                messsage: 'Validation Error',
            })
        }

        // regular error
        return NextResponse.json({
            message: "Contact Email error",
            data: "Err"
        },
        {
            status: 500
        })
       
    }
}