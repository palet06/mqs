"use client";
import CodeFormatter from "@/components/CodeFormatter";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Prisma } from "@/generated/prisma/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { Info, Loader, Play, Recycle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

type InstitutionWithAllRelations = Prisma.InstitutionGetPayload<{
  include: { endpoints: { include: { headers: true; requestParams: true } } };
}>;



const getInstitue = async (id: number) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/getInstitues?id=${id}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const son = await response.json();

    if (!son.apiSuccess) {
      throw new Error("Ağ hatası");
    }

    return son.institue as typeof son;
  } catch (error) {
    console.error("Kurumlar getirilirken hata oluştu:", error);
  }
};

const Slug = ({ singleInstitutionId }: { singleInstitutionId: number }) => {
  const [institue, setInstitue] = useState<InstitutionWithAllRelations | null>(
    null
  );
  const [status, setStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [renew, setRenew] = useState<boolean>(false);

  useEffect(() => {
    const getInstitueFromMethod = async () => {
      try {
        const sonuc = await getInstitue(singleInstitutionId);

        setInstitue(sonuc);
        
        
        setSelectedEndpoint(sonuc.endpoints[0]?.name || "");
        
        
      } catch (error) {
        console.error("Kurum bilgisi alınırken hata oluştu:", error);
      }
    };

    getInstitueFromMethod();
  }, []);

  useEffect(() => { // hello bilgisi alınıyor
    const getStatus = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/getStatus?institutionId=${singleInstitutionId}`,
          {
            method: "GET",
            cache: "no-cache",
          }
        );
        const data = await response.json();

        if (!data.apiSuccess) {
          throw new Error("API cevabı başarısız oldu");
        }

        setStatus(data.sonuc.success);
      
        setLoading(false);
      } catch (error) {
        console.error("Veriler getirilirken hata oluştu.", error);
        setLoading(false);
      }
    };

    getStatus();
  }, [renew]);

  const [selectedEndpoint, setSelectedEndpoint] = useState<string|"">(institue?.endpoints[0]?.name || "");
  const [dynamicRequestParamsObj, setDynamicRequestParamsObj] = useState<Prisma.RequestParamGetPayload<{select:{id:true,key:true,value:true}}> |null>(null);
  return (
    <div className="p-5">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-gray-600 via-cyan-950 to-blue-950 p-8 text-white">
        <div className="flex flex-col gap-6 md:flex-row md:gap-14">
          <div className="hidden lg:block">
            <div className="relative h-45 w-45">
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md" />
              <div className="absolute inset-4 rounded-full bg-white/20" />
              <div className="absolute inset-8 rounded-full bg-white/30" />
              <div className="absolute inset-8 rounded-full bg-white/30 flex flex-col items-center justify-center">
                <Image
                  src={institue?.logo ? institue.logo : "/logolar/deneme.png"}
                  height={150}
                  width={150}
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {loading ? (
              <Loader className="text-white  hover:bg-white/30 rounded-xl animate-spin" />
            ) : (
              <Badge
                className={`${
                  status ? "bg-green-700" : "bg-red-700"
                } text-white hover:bg-white/30 rounded-xl`}
              >
                Hello
              </Badge>
            )}

            <h2 className="text-3xl font-bold">{institue?.name}</h2>
            <p className="max-w-[600px] text-white/80">
              Lütfen sorgulama yapacağınız servisi seçiniz 
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                onClick={() => setRenew((prev) => !prev)}
                className="rounded-2xl bg-white text-indigo-700 hover:bg-indigo-200 cursor-pointer"
                href={""}
              >
                <Button className="rounded-2xl bg-white text-indigo-700  hover:bg-indigo-200 cursor-pointer">
                  <Recycle />
                  Kontol Et
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="rounded-2xl bg-transparent border-white text-white hover:bg-white/10"
                    variant="outline"
                  >
                    Servis Seçimi
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuLabel>Servis İsmi</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={selectedEndpoint}
                    onValueChange={setSelectedEndpoint}
                  >


                    {
                      institue?.endpoints.map((endpoint) => (
                        <DropdownMenuRadioItem
                        id={endpoint.id.toString()}
                          key={endpoint.id}
                          value={endpoint.name}
                        >
                          {endpoint.name}
                        </DropdownMenuRadioItem>
                      ))
                    }
                    {/* <DropdownMenuRadioItem value={position}>
                      {position}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      Pasaport Bilgileri
                    </DropdownMenuRadioItem> */}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Sorgulama Bilgileri</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex flex-row gap-6 w-full justify-between">
              <div className="flex flex-col gap-2 w-1/3 justify-between">
                <div className="space-y-2">
                  <Label htmlFor="query-type">Ülke Kodu</Label>
                  <Input name="query-type" defaultValue="" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="query-t">Pasaport Numarası</Label>
                  <Input name="query-t" defaultValue="" />
                </div>
                <Button variant="success" className="w-full ">
                  <Play className="mr-2 h-4 w-4" />
                  Sorgu Başlat
                </Button>
              </div>
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-auto"
              />

              <div className="flex flex-col gap-2 w-2/3 ">
                <Alert className="w-full" variant="default">
                  <Info className="h-4 w-4" />
                  <AlertDescription>Postman Önizlemesi</AlertDescription>
                </Alert>
                <CodeFormatter jsonString='{"deneme":"hello", "isAlive":true}' />
              </div>
              <div></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Slug;
