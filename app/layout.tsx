import type {Metadata} from "next";
import {Manrope} from "next/font/google"; // importing font form the google directly
import "./globals.css";

// initializing font
const manrope = Manrope({
    subsets: ["latin", "cyrillic"],
    weight: ["300", "400", "700"],
    variable: "--font-manrope",
});

// export object for SEO
export const metadata: Metadata = {
    title: "LC Automative | Luxury Redefined",
    description: "Premium used cars from South Korea.",
}

// main wrapper of the app
export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${manrope.variable} font-sans antialiased bg-luxury bg-luxury-black text-white selection:bg-white selection:text-black`}>
        {children}
        </body>
        </html>
    );
}