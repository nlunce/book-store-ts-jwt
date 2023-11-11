import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
