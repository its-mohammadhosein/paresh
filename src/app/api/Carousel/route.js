import { crousel } from "@/lib/CarouselData";
import { NextResponse } from "next/server";
export async function GET(){
    return new NextResponse(JSON.stringify(crousel))
}