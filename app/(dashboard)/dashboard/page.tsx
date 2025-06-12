{
  /* bunu server component yap verileri çek ve kurumları listeleyen client componente gönder*/
}

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { BadgeCheck, Recycle } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";

const DashboardPage = () => {
  const apps = [
    {
      name: "Dışişleri Bakanlığı",
      icon: "/logolar/disisleri-logo.png",
      description: "birtakım işler",
      category: "Creative",
      recent: true,
      new: false,
      progress: 100,
    },
    {
      name: "Milli Eğitim Bakanlığı",
      icon: "/logolar/meb-logo.png",
      description: "Professional vector graphics creation",
      category: "Creative",
      recent: true,
      new: true,
      progress: 100,
    },
    {
      name: "YTB",
      icon: "/logolar/ytb-logo.png",
      description: "Professional vector graphics creation",
      category: "Creative",
      recent: true,
      new: true,
      progress: 100,
    },
    {
      name: "Gelir İdaresi Başkanlığı",
      icon: "/logolar/gib-logo.png",
      description: "Professional vector graphics creation",
      category: "Creative",
      recent: true,
      new: true,
      progress: 100,
    },
    {
      name: "N.V.İ",
      icon: "/logolar/nvi-logo.png",
      description: "Professional vector graphics creation",
      category: "Creative",
      recent: true,
      new: true,
      progress: 100,
    },
    {
      name: "Göç İdaresi Başkanlığı",
      icon: "/logolar/goc-logo.png",
      description: "Professional vector graphics creation",
      category: "Creative",
      recent: true,
      new: true,
      progress: 100,
    },
    {
      name: "İşkur",
      icon: "/logolar/iskur-logo.png",
      description: "Professional vector graphics creation",
      category: "Creative",
      recent: true,
      new: true,
      progress: 100,
    },
    {
      name: "PTT",
      icon: "/logolar/ptt-logo.png",
      description: "Professional vector graphics creation",
      category: "Creative",
      recent: true,
      new: true,
      progress: 100,
    },
    {
      name: "SGK",
      icon: "/logolar/sgk-logo.png",
      description: "Professional vector graphics creation",
      category: "Creative",
      recent: true,
      new: true,
      progress: 100,
    },
    {
      name: "YÖK",
      icon: "/logolar/yok-logo.png",
      description: "Professional vector graphics creation",
      category: "Creative",
      recent: true,
      new: true,
      progress: 100,
    },
    {
      name: "EGM",
      icon: "/logolar/egm-logo.png",
      description: "Professional vector graphics creation",
      category: "Creative",
      recent: true,
      new: true,
      progress: 100,
    },
  ];
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
            {apps.map((app, i) => (
              <div key={i}>
                <Card className="flex flex-col gap-1 overflow-hidden  rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                  <BadgeCheck className="text-green-600  h-5 w-5 ml-auto mr-4" />
                  <CardHeader className="pb-1 justify-center">
                    <div className="flex items-center justify-between">
                      {typeof app.icon === "string" ? (
                        <Image
                          src={app.icon}
                          height={100}
                          width={100}
                          alt={app.name}
                        />
                      ) : (
                        <span className="flex items-center justify-center w-[100px] h-[100px]">
                          {app.icon}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-1">
                    <CardTitle className="text-lg text-center">
                      {app.name}
                    </CardTitle>
                    {/* <CardDescription>{apps[0].description}</CardDescription> */}
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full rounded-2xl cursor-pointer"
                    >
                      Git
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
