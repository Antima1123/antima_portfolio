import { promises } from "dns";
import mongoose, { Mongoose } from "mongoose";
import { NextResponse } from "next/server";

const DB_URI = process.env.DATABASE_URI as string

if(!DB_URI){
      console.log("Correct your Database URI")
}

declare global{
        var mongoose:{
            conn : Mongoose | null;
            promise : Promise<Mongoose> | null;
        }
}

global.mongoose = global.mongoose || {conn: null , promise: null }
const cache = global.mongoose

export async function dbConnect(): Promise<Mongoose> {
    if(cache.conn){
        console.log("DataBase is already Connected");
        return cache.conn
    }
    if(!cache.promise){
        cache.promise= mongoose.connect(DB_URI).then((Mongoose)=>{
            return Mongoose
        })
    }
    console.log("Database is successfully connected");
    cache.conn = await cache.promise;
    return cache.conn
    
}