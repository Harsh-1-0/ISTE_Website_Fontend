import "./globals.css";

export const metadata = {
  title: "ISTE",
  embade: "ISTE VIT",
  description:
    "ISTE-VIT is a reputed visionary non-profit organisation determined to impart technical knowledge to inspire solutions with innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://istevit.in" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dleuqns7p/image/upload/v1730264533/hsddnsy0pgthy1n7nnra.png"
        />
      </head>
      <body className="font-anton min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
