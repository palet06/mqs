/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/SingletonPrisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const body = await req.json();
   const { params, header, url} = body
  //const institutionId = searchParams.get("institutionId");

  const paramsstring = params
  const paramSSS:any = paramsstring ? JSON.parse(paramsstring):{};

  
  const headerString = header
  const headeRRR: any[] = headerString ? JSON.parse(headerString) : [];
  const urLLL = url
  try {
    const headersObj = headeRRR.reduce((acc, curr) => {
      acc[curr.headerkey] = curr.headervalue;
      return acc;
    }, {} as Record<string, string>);

    


    const baseUrl = await prisma.base.findMany();
    const response = await fetch(`${baseUrl[0].baseUrl}/${urLLL}`, {
      method: "POST",
      cache: "no-cache",
      headers: headersObj,
      body: JSON.stringify(paramSSS),
    });

    const sonuc = await response.json();

    return NextResponse.json({ apiSuccess: true, sonuc });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "API hatası. (api/sendRequest)" });
  }
}
