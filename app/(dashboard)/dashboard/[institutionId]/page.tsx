"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Recycle } from "lucide-react";
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
              <DropdownMenu >
                <DropdownMenuTrigger asChild>
                  <Button
                    className="rounded-2xl bg-transparent border-white text-white hover:bg-white/10"
                    variant="outline"
                  >
                    Open
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="top">
                      Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                      Right
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institution;
