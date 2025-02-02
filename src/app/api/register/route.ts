import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/src/app/lib/mongodb";
import User from "@/src/app/models/user";



export async function POST(req: Request) {
  try {
    console.log("where")
     await connectDB();
    const { firstName, lastName, email, phone, password } = await req.json();

    if (!firstName || !lastName || !email || !phone || !password) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }
     const user = await User.findOne({ email });
   
       if (user) {
         
         return NextResponse.json({ error: "User not found" }, { status: 404 });
       }
      

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 8);
    // Insert into DB
    const result = await User.create({name: firstName + lastName,email: email,password:hashedPassword,role:"user",});

    return NextResponse.json(
      { message: "User created successfully!", userId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
