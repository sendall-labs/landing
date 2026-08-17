import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          background: "#fdfbf7",
          color: "#292420",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#d97706",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
              <path
                d="M9 20.5 16 9.5l7 11h-4.5L16 15l-2.5 6.5H9Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <span style={{ fontSize: 72, fontWeight: 700 }}>sendall</span>
        </div>
        <span style={{ fontSize: 32, color: "#78716c" }}>
          Bulk Stellar payments, without the backend
        </span>
      </div>
    ),
    size
  );
}
