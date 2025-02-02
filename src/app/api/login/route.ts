import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers"; // Import cookies API
import connectDB from "@/src/app/lib/mongodb";
import User from "@/src/app/models/user";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: Request): Promise<NextResponse> {
  try {
    
    const { email, password } = await req.json();
    

    await connectDB();
    
    const user = await User.findOne({ email });

    if (!user) {
      
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
   

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(password)
    console.log(isMatch)
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
    // Generate JWT Token
    const token = jwt.sign({ userId: user._id, email: user.email,role:user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Fix: Use `await cookies()` before setting the cookie
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      path: "/",
      maxAge: 3600, // 1 hour
    });

    return NextResponse.json(
      { message: "Login successful", user: { email: user.email,role:user.role } },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
