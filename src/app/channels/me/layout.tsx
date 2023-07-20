export const metadata = {
    title: "VentureFlow | Friends",
    description: "Project Management Solutions",
  };

  export default function MeLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className="bg-slate-900">
          {children}
        </body>
      </html>
    );
  }