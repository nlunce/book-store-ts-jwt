import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

export default function RootLayout() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          padding: "1rem",
        }}
      >
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
