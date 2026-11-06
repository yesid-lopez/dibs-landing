import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Dibs: the shared chore chart for couples, roommates and families";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chores = [
  { title: "Empty the dishwasher", who: "You", done: true },
  { title: "Clean the bathroom", who: "Anyone", dibs: true },
  { title: "Take out the recycling", who: "Alex" },
];

export default async function OpenGraphImage() {
  const icon = await readFile(join(process.cwd(), "public/images/app-icon.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#FBF7EF",
          padding: "64px 72px",
          gap: 56,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img
              src={iconSrc}
              width={72}
              height={72}
              alt=""
              style={{ borderRadius: 18, border: "2px solid #E9E7E3" }}
            />
            <div style={{ color: "#1F1F21", fontSize: 40, fontWeight: 800 }}>
              Dibs
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#1F1F21",
                fontSize: 70,
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: -2,
              }}
            >
              Call dibs on the chores.
            </div>
            <div
              style={{
                marginTop: 22,
                color: "#4F4B45",
                fontSize: 28,
                lineHeight: 1.35,
              }}
            >
              The shared chore chart for couples, roommates and families.
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {["iCloud sync", "Voice", "Points & rewards", "No account"].map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "#FFDC6E",
                  color: "#1F1F21",
                  fontSize: 20,
                  fontWeight: 700,
                  padding: "10px 18px",
                  borderRadius: 999,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            width: 410,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 14,
          }}
        >
          {chores.map((chore) => (
            <div
              key={chore.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                backgroundColor: "#FFFFFF",
                border: "3px solid #1F1F21",
                boxShadow: "6px 6px 0 0 #1F1F21",
                borderRadius: 24,
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  border: "3px solid #1F1F21",
                  backgroundColor: chore.done ? "#A9D8A0" : "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {chore.done ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12.5l4.5 4.5L19 7.5"
                      stroke="#1F1F21"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </div>
              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: chore.done ? "#8C877E" : "#1F1F21",
                    textDecoration: chore.done ? "line-through" : "none",
                  }}
                >
                  {chore.title}
                </div>
                <div style={{ fontSize: 17, color: "#6B665E", marginTop: 2 }}>
                  {chore.who}
                </div>
              </div>
              {chore.dibs ? (
                <div
                  style={{
                    backgroundColor: "#FF8466",
                    color: "#1F1F21",
                    fontSize: 18,
                    fontWeight: 800,
                    padding: "8px 14px",
                    borderRadius: 999,
                  }}
                >
                  Dibs!
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
