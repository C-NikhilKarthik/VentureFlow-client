import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { UserPanelProvider } from "@/context/UserPanel";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VentureFlow",
  description: "Project Management Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        <ReduxProvider>
          <UserPanelProvider>{children}</UserPanelProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
