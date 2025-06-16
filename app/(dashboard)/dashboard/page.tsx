import Institue from "@/components/Institue";
import { Button } from "@/components/ui/button";
import { Institution } from "@/generated/prisma";
import { Recycle } from "lucide-react";

const getInstitues = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/getInstitues", {
      method: "GET",
      cache: "no-cache",
    });
    const son = await response.json();

    if (!son.apiSuccess) {
      throw new Error("Ağ hatası");
    }

    return son.institues as Institution[];
  } catch (error) {
    console.error("Kurumlar getirilirken hata oluştu:", error);
  }
};

const DashboardPage = async () => {
  const institues = await getInstitues();

  if (!institues || institues.length === 0) {
    return <div className="flex flex-col w-full items-center justify-center">
      <h2>

      Tanımlı kurum bulunamadı
      </h2>
      </div>;
  } else {
    return (
      <div className="flex flex-1 flex-col gap-4 px-4 py-3">
        <div className="bg-muted/50 mx-auto h-24 w-full max-w-[1408px] rounded-xl flex flex-col justify-center ">
          <h2 className="text-3xl font-semibold text-center ">
            Dış Kurum Sorgulama Servisleri
          </h2>
        </div>
        <div className="bg-muted/50 mx-auto h-[700px] w-full max-w-[1408px] rounded-xl overflow-y-scroll">
          <section className="space-y-4 p-5 ">
            <div className="flex items-center justify-between">
              <Button variant="ghost" className="rounded-2xl ml-auto">
                Yenile
                <Recycle />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {institues?.map((app, i) => (
                <Institue key={i} institue={app} />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
};

export default DashboardPage;
