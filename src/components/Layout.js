import Navigation from "./Navigation";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <main className="subpixel-antialiased">
      <div className="sticky top-0 z-[100]">
        <Navigation />
      </div>
      <>{children}</>
      <Footer />
    </main>
  );
}
