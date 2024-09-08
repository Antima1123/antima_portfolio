import { dbConnect } from "@/dbConfig/dbConfig";
import contactModel from "@/model/schema";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

dbConnect()

export async function POST(request: NextRequest){
    try {
        const reqbody = await request.json()
        const {
            name,
            email,
            phone,
            subject,
            message
        } = await reqbody;

        const newData =  new contactModel({
            name,
            email,
            phone,
            subject,
            message
        })

        await newData.save()

        return NextResponse.json({
            message: "succefully submited your request",
            data: newData,
            success: true
        })

    } catch (error:any) {
        return NextResponse.json({
            message: "Contact Email error"
        },
    {
        status: 500
    }
    )
    }
}