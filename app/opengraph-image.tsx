import { ImageResponse } from "next/og";

export const alt = "DocuVault — Belgeleriniz güvende, saniyeler içinde bulun.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#F9F6F1",
          padding: "80px",
          position: "relative",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              "radial-gradient(60% 60% at 80% 30%, rgba(74,92,63,0.18) 0%, rgba(156,107,60,0.10) 45%, transparent 75%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "linear-gradient(135deg, #4A5C3F 0%, #2E3D27 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F5EBE0",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            D
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 600,
              color: "#1C1C1E",
              letterSpacing: "-0.02em",
            }}
          >
            DocuVault
          </div>
        </div>

        <div
          style={{
            marginTop: 110,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "#1C1C1E",
              maxWidth: 940,
            }}
          >
            <div style={{ display: "flex" }}>Belgeleriniz güvende.</div>
            <div style={{ display: "flex", gap: 16 }}>
              <span style={{ color: "#4A5C3F" }}>Saniyeler içinde</span>
              <span>bulun.</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#6B6B70",
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            AI destekli belge kasası · Yerleşik tarayıcı · Akıllı özetleme
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#9C6B3C",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
            }}
          >
            iOS · App Store
          </div>
          <div style={{ display: "flex", fontSize: 18, color: "#9B9BA0" }}>
            appdocuvault.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
