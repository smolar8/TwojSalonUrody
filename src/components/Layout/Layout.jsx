import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";

import Navbar from "../../navBar/Navbar";
import Footer from "../../footer/Footer";

function Layout() {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.content}>
          <Navbar />
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
}

export { Layout };
