import { ImageResponse } from "next/og";
import { studio } from "@/lib/studio";

export const runtime = "edge";
export const alt = `${studio.name} — детейлинг и тонировка автостёкол в ${studio.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          color: "#F4F0E7",
          background:
            "radial-gradient(ellipse at 82% 15%, #282116 0%, #15120e 34%, #080807 75%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 5,
              height: 36,
              background: "#C5A15D",
            }}
          />
          <div
            style={{
              color: "#C5A15D",
              fontSize: 27,
              fontWeight: 700,
              letterSpacing: 6,
            }}
          >
            {studio.name}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              gap: 8,
              color: "#C5A15D",
              fontSize: 18,
              letterSpacing: 6,
            }}
          >
            AUTOMOTIVE DETAILING · {studio.city.toUpperCase()}
          </div>
          <div
            style={{
              maxWidth: 900,
              fontSize: 68,
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            ДЕТЕЙЛИНГ · ТОНИРОВКА АВТОСТЁКОЛ
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(245,245,240,0.2)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
