import Footer, {
  FooterContent,
} from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const footerData: FooterContent = {
  copyrightText: `© ${new Date().getFullYear()} Giftify Platform. All rights reserved.`,
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer content={footerData} />
    </>
  );
}
