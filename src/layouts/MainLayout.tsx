import { Outlet } from "react-router";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollProgress from "@/components/motion/ScrollProgress";

function MainLayout() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <ScrollProgress />
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;