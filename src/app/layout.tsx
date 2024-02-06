import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import { cn } from "~/lib/utils";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/theme-provider";
import MovileNavbar from "~/components/movile-navbar";
import Header from "~/components/header";
import Footer from "~/components/footer";
import { api } from "~/trpc/server";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories_one = await api.article.getCategories.query();
  const categories_two = await api.article.getSubCategories.query();

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
            {/*<Header />*/}
            {children}
            <Footer
              categories_one={categories_one}
              categories_two={categories_two}
            />
            <MovileNavbar />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
