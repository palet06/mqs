import { prisma } from "@/lib/SingletonPrisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const institutionId = searchParams.get("institutionId"); 

  try {
    const baseUrl = await prisma.base.findMany()

    const institue = await prisma.institution.findFirst({
      where: {
        id: Number(institutionId),
      },
      include: {
        endpoints: {
          include: { headers: true },
        },
      },
    });

    const helloEndpoint = institue?.endpoints.find(
      (ep) => ep.name.toLowerCase() === "hello"
    );
    
    let isOnline = null;
    const headersObj: Record<string, string> = {};
    helloEndpoint?.headers.forEach((header) => {
      headersObj[header.headerkey] = header.headervalue;
    });
    if (helloEndpoint && helloEndpoint.url) {
      isOnline = await fetch(
        `${baseUrl[0].baseUrl}/${helloEndpoint.url}`,
        { method: helloEndpoint.method, headers: { ...headersObj } }
      );

      const sonuc = await isOnline.json();
      

      return NextResponse.json({ apiSuccess: true, sonuc });
    }

   
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "API hatası. (api/getStatus" });
  }
}
