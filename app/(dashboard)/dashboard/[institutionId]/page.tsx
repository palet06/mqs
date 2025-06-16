"use client";

import CodeFormatter from "@/components/CodeFormatter";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

import { Info, Play, Recycle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Institution = () => {
  const [position, setPosition] = React.useState("bottom");
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
                  src="/logolar/egm-logo.png"
                  height={150}
                  width={150}
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Badge className="bg-green-700 text-white hover:bg-white/30 rounded-xl">
              Hello
            </Badge>
            <h2 className="text-3xl font-bold">Emniyet Genel Müdürlüğü</h2>
            <p className="max-w-[600px] text-white/80">
              Unleash your creativity with our comprehensive suite of
              professional design tools and resources.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-2xl bg-white text-indigo-700 hover:bg-white/90">
                <Recycle />
                Kontol Et
              </Button>
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
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="top">
                      Ülkeye Giriş/Çıkış Bilgileri
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      Pasaport Bilgileri
                    </DropdownMenuRadioItem>
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
                <Button className="w-full">
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

export default Institution;
