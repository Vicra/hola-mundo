"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Header from "./components/header";
import Footer from "./components/footer";
import { usePathname } from "next/navigation";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export default function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props;
    const pathname = usePathname();

    const exceptionRoutes = ["/login", "/register"];
    return (
        <html lang="en" className={roboto.variable}>
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        {/* header */}
                        {!exceptionRoutes.includes(pathname) && <Header />}
                        {children}
                        {/* footer */}
                        {!exceptionRoutes.includes(pathname) && <Footer />}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
