import { NextResponse } from "next/server";

export async function GET() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4N2ViNWMxZjBiYjZlM2MxMjM4MzM2NCIsImlhdCI6MTc1MzEzNDUyOX0.T29CMJ3ptDIBn9xyK0oODZbnzJ95fgitCjt1wz0lwVQ";

  const res = await fetch("https://api.aimus.uz/v1/user/data", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
