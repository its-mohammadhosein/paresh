import { NextResponse } from "next/server";

export async function GET(req, res) {
  const categories = [
    { id: 1, name: "مهارت‌های پولساز" },
    { id: 2, name: "مهارت‌های نرم" },
    { id: 3, name: "مهارت‌های اجتماعی" },
    { id: 4, name: "سوالات متداول آموزش" },
    { id: 5, name: "راهنمای خرید کتاب" },
    { id: 6, name: "خودآموز زبان انگلیسی" },

];
return new NextResponse(JSON.stringify(categories))
}
