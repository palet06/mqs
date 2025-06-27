import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { parseISO, format } from "date-fns";
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

      if (Array.isArray(value)) {
        // Array ise JSON olarak stringify edip satır atlamalı gösterebiliriz
        return (
          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
            {JSON.stringify(value, null, 2)}
          </pre>
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
