import PortfolioShell from "@/components/PortfolioShell";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="relative z-0">
        <PortfolioShell />
      </div>
      <Footer />
    </div>
  );
}
