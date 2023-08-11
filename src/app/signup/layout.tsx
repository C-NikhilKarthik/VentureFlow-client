export const metadata = {
  title: "VentureFlow | Sign Up",
  description: "Project Management Solutions",
};
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer position="top-center" limit={3} />
      </body>
    </html>
  );
}
