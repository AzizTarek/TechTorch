import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://tech-torch.vercel.app"),

	title: {
		template: "%s | Portfolio",
		default: "TechTorch Tarek",
	},
	authors: {
		name: "Aziz Alexandros Tarek",
	},

	description:
		" Engineer of elegant and efficient digital ecosystems, specializing in immersive user experiences across web, mobile, and virtual realms.",
	openGraph: {
		title: "TechTorch Tarek",
		description:
			" Engineer of elegant and efficient digital ecosystems, specializing in immersive user experiences across web, mobile, and virtual realms.",
		url: "https://tech-torch.vercel.app",
		siteName: "TechTorch",
		images: "/banner.png",
		type: "website",
	},
	keywords: ["portfolio", "techtorch", "azizalexandrostarek"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
