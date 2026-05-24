import { ImageResponse } from "next/og";
import { profile } from "@/data/cv";

export const alt = "Tarek Elmougy — Senior QA Automation Engineer & SDET";
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
          padding: 80,
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: 300,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
            filter: "blur(120px)",
            opacity: 0.45,
          }}
        />
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#9ca3af" }}>
          TAREKELMOUGY.COM
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 110,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -3,
              background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 38, fontWeight: 500, color: "#ededed" }}>
            Senior QA Automation Engineer · SDET · Test Architect
          </div>
          <div style={{ fontSize: 24, color: "#9ca3af", maxWidth: 1040 }}>
            {profile.pitch}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
