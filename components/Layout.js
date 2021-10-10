import Nabar from "./Nabar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Nabar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
