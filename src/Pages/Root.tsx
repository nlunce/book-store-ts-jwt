import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

export default function RootLayout() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
