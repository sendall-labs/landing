import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#d97706",
          borderRadius: 9,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <path d="M9 20.5 16 9.5l7 11h-4.5L16 15l-2.5 6.5H9Z" fill="#ffffff" />
        </svg>
      </div>
    ),
    size
  );
}
