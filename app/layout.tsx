import './globals.css'
import localFont from 'next/font/local'

//Uso en el css: var(--font-satoshi)
export const SATOSHI = localFont({
  src: "Satoshi-Variable.woff2",
  variable: "--font-satoshi", 
  display: "swap",
});

export const TASA_EXPLORER = localFont({
  src: "TASAExplorerVF.woff2",
  variable: "--font-tasa",
  display: "swap",
});

export const metadata = {
  title: "VeriTrust - Licita con confianza",
  description: "Seguridad, transparencia y confianza en los procesos de contratación.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={
        SATOSHI.variable + " " + TASA_EXPLORER.variable
      }>{children}</body>
    </html>
  )
}
