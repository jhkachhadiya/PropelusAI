import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--inter-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Niotech - Saas & App Landing Page NextJS Template',
    template: '%s | Niotech - Saas & App Landing Page NextJS Template',
  },
  description: 'Niotech - Saas & App Landing Page NextJS Template',
  openGraph: {
    title: 'Niotech - Saas & App Landing Page NextJS Template',
    description: 'Niotech - Saas & App Landing Page NextJS Template',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
