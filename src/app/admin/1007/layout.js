import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
