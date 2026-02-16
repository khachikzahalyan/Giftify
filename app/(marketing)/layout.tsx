import Footer, {
  FooterContent,
} from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageTransition from "@/components/animations/PageTransition";

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

      <PageTransition>
        <main>{children}</main>
      </PageTransition>

      <Footer content={footerData} />
    </>
  );
}
