import "./globals.css";
import { Michroma, Orbitron } from "next/font/google";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma"
});

const orbitron = Orbitron({
  weight: ["400", "700", "900"], // puedes elegir los pesos
  subsets: ["latin"],
  variable: "--font-orbitron"
});

export const metadata = {
  title: "Invitación",
  description: "Invitación infantil K-pop Demon Hunters"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${michroma.variable} ${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
