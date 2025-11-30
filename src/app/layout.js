import React from "react";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--inter-font",
});

export const metadata = {
  title: {
    absolute: "",
    default: "PropelusAI – Automation systems that power faster growth",
    template: "%s | PropelusAI",
  },
  description:
    "PropelusAI automates marketing, operations, and lead generation so your team can focus on closing. Build, grow, and automate your business with intelligent automation systems.",
  icons: {
    icon: false,
  },
  openGraph: {
    title: "PropelusAI – Automation systems that power faster growth",
    description:
      "PropelusAI automates marketing, operations, and lead generation so your team can focus on closing. Build, grow, and automate your business with intelligent automation systems.",
  },
};

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <meta name="author" content="PropelusAI" />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
