export const metadata = {
    title: "Channels",
    description: "Project Management Solutions",
  };

  export default function ChannelLayout({
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