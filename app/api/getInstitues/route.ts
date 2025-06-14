import { prisma } from '@/lib/SingletonPrisma';
import { NextResponse } from 'next/server'
 
export async function GET() {


  try {
      // Prisma ile veritabanından tüm kullanıcıları çekiyoruz
      const institues = await prisma.institution.findMany();
      
      
      
      // Başarılı ise kullanıcı verilerini döndürüyoruz
      return NextResponse.json({apiSuccess:true,institues});
    } catch (error) {
      console.error(error);
     return NextResponse.json({ error: 'Veritabanı hatası' });
    }
  
}