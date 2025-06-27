import { prisma } from "@/lib/SingletonPrisma";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  //const institutionId = searchParams.get("institutionId");

  const paramsstring = searchParams.get("params");
  const params:any = paramsstring ? JSON.parse(paramsstring):{};

  
  const headerString = searchParams.get("header");
  const header: any[] = headerString ? JSON.parse(headerString) : [];
  const url = searchParams.get("url");
  try {
    const headersObj = header.reduce((acc, curr) => {
      acc[curr.headerkey] = curr.headervalue;
      return acc;
    }, {} as Record<string, string>);

    

    console.log("headerobj nesnesi",headersObj)
    console.log("params",params)
    

    const baseUrl = await prisma.base.findMany();
    const response = await fetch(`${baseUrl[0].baseUrl}/${url}`, {
      method: "POST",
      cache: "no-cache",
      headers: headersObj,
      body: JSON.stringify(params),
    });

    const sonuc = await response.json();

    return NextResponse.json({ apiSuccess: true, sonuc });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "API hatası. (api/sendRequest)" });
  }
}
