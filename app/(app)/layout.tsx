import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fare - Home",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <SiteHeader/>
    <div className="flex flex-1 flex-col mt-32">{children}</div>
    <SiteFooter />
    </>
  );
}
