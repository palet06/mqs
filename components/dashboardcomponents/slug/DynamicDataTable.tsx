/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { parseISO, format, isValid } from "date-fns";
import { DataTable } from "@/components/dashboardcomponents/slug/DataTable";

type GenericObj = Record<string, any>;

export function DynamicDataTable({ data }: { data: GenericObj[] }) {
  if (!data || data.length === 0) return <div>Veri yok</div>;

  const columns: ColumnDef<GenericObj>[] = Object.keys(data[0]).map((key) => ({
    accessorKey: key,
    header: key.charAt(0).toUpperCase() + key.slice(1),
    cell: (info) => {
      const value = info.getValue();

      const isBase64 = (str: any) => {
        if (typeof str !== "string") return false;
        // Çok uzun ve base64 karakter setine uyuyor mu diye basit kontrol
        return str.length > 100 && /^[A-Za-z0-9+/=]+$/.test(str);
      };

      if (isBase64(value)) {
        return <i>Base64 veri (gizlendi)</i>; // veya sadece kısmi göster
        // Alternatif: return value.slice(0, 20) + '...';
      }

      const isValidDate = (val: any): boolean => {
        if (typeof val !== "string") return false;
        const parsed = parseISO(val);
        return isValid(parsed);
      };

      if (Array.isArray(value)) {
        return (
          <ul style={{ margin: 0, paddingLeft: "1.5em" }}>
            {value.map((item, index) => {
              // Eğer item bir tarih string'iyse formatla
              if (typeof item === "string" && isValidDate(item)) {
                const date = parseISO(item);
                return <li key={index}>{format(date, "dd-MM-yyyy HH:MM")}</li>;
              }

              // Eğer nesne ise JSON göster
              if (typeof item === "object") {
                return (
                  <li key={index}>
                    <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                      {JSON.stringify(item, null, 2)}
                    </pre>
                  </li>
                );
              }

              // Diğer her şey string olarak göster
              return <li key={index}>{String(item)}</li>;
            })}
          </ul>
        );
      }
      if (value && typeof value === "object") {
        // Düz nesne ise JSON string olarak gösterebiliriz
        return (
          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
            {JSON.stringify(value, null, 2)}
          </pre>
        );
      }
      if (typeof value === "boolean") {
        return value ? "✔️" : "✘";
      }

      if (key.toLowerCase().includes("tar") && value) {
        try {
          const date = parseISO(
            typeof value === "string" ? value : String(value)
          );
          return format(date, "dd-MM-yyyy HH:MM");
        } catch {
          return value;
        }
      }

      return value;
    },
  }));

  return <DataTable columns={columns} data={data} />;
}
