import "~/styles/globals.css";
// export const dynamic = "force-dynamic"
import { Inter as FontSans } from "next/font/google";
import { cn } from "~/lib/utils";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/theme-provider";
import MovileNavbar from "~/components/movile-navbar";
import Header from "~/components/header";
import Footer from "~/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Huellitas Dogshop - Tienda de productos para perros en Colombia",
  description:
    "Encuentra productos para perros en nuestra tienda en línea en Colombia. Ofrecemos una amplia gama de artículos para perros de todas las razas y tamaños. ¡Descubre hoy mismo el producto perfecto para tu mascota!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "relative flex min-h-screen flex-col bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
            <MovileNavbar />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
