import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imaralife Ball Games Welfare & Tournament Program",
  description: "Self-sustaining sports welfare system for grassroots ball games communities in Nyanza and Western Kenya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="font-sans transition-colors"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}