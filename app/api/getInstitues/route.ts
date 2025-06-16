import { prisma } from "@/lib/SingletonPrisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    try {
      const institue = await prisma.institution.findFirst({
        where: { id: Number(id) },
        include: {
          endpoints: {
            include: { institution: true, headers: true, requestParams: true },
          },
        },
      });

      // Başarılı ise kullanıcı verilerini döndürüyoruz
      return NextResponse.json({ apiSuccess: true, institue });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Veritabanı hatası" });
    }
  } else {
    try {
      // Prisma ile veritabanından tüm kullanıcıları çekiyoruz
      const institues = await prisma.institution.findMany();

      // Başarılı ise kullanıcı verilerini döndürüyoruz
      return NextResponse.json({ apiSuccess: true, institues });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Veritabanı hatası" });
    }
  }
}
