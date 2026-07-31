import { ImageResponse } from "next/og";

export const alt = "Studio Platform — Product systems for real operations";
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
          background: "#111111",
          color: "#f5f3eb",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 30 }}>
          <span style={{ width: 22, height: 22, borderRadius: 999, background: "#b8d94f" }} />
          Studio Platform
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: "-4px", lineHeight: 0.95 }}>
            Less chaos.<br />More system.
          </div>
          <div style={{ fontSize: 28, color: "#b8d94f" }}>Product systems for real operations</div>
        </div>
      </div>
    ),
    size,
  );
}
