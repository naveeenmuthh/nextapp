
import "./globals.css";

export const metadata = {
  title: "Home - Elbrit Life Sciences",
  description: "Leading solutions provider in [Health/Pharmaceutical].",
};

//Modified Root Layout for Better SEO

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head> 
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Elbrit Life Sciences" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://6765b42f1a711500083d44d1--papaya-melomakarona-441d39.netlify.app/" />
        <meta property="og:image" content="	https://www.elbrit.org/wp-content/uploads/2019/03/cropped-logo-original-2.png" />
        <link rel="canonical" href="https://6765b42f1a711500083d44d1--papaya-melomakarona-441d39.netlify.app/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
<link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
<link
  rel="apple-touch-icon"
  href="/apple-icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

