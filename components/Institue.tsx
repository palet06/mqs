"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { BadgeCheck, BadgeMinus, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";
import { Institution } from "@/generated/prisma";

const Institue = ({ institue }: { institue: Institution }) => {
  const [status, setStatus] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  useEffect(() => {
    const getStatus = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/getStatus?institutionId=${institue.id}`,
          {
            method: "GET",
            cache: "force-cache",
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
  }, []);

  return (
    <div>
      <Card className="flex flex-col gap-1 overflow-hidden  rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
        {loading ? (
          <Loader className="text-purple-900 h-5 w-5 ml-auto mr-4 animate-spin" />
        ) : status ? (
          <BadgeCheck className="text-green-600  h-5 w-5 ml-auto mr-4" />
        ) : (
          <BadgeMinus className="text-red-600  h-5 w-5 ml-auto mr-4" />
        )}

        <CardHeader className="pb-1 justify-center">
          <div className="flex items-center justify-between">
            {typeof institue.logo === "string" ? (
              <Image
                src={institue.logo}
                height={100}
                width={100}
                alt={institue.name}
              />
            ) : (
              <span className="flex items-center justify-center w-[100px] h-[100px]">
                {institue.logo}
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent className="pb-1">
          <CardTitle className="text-lg text-center">{institue.name}</CardTitle>
          {/* <CardDescription>{apps[0].description}</CardDescription> */}
        </CardContent>
        <CardFooter>
          <Link
            className="w-full rounded-2xl cursor-pointer"
            href={`dashboard/${institue.id}`}
          >
            <Button
              variant="outline"
              className="w-full rounded-2xl cursor-pointer"
            >
              Git
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Institue;
