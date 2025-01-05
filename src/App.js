import React from "react";
import {
  createBrowserRouter,
  Switch,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from "./navBar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";

import Podologia from "./components/podologia/Podologia";

import Oferta from "./components/oferta/Oferta";
import Promocja from "./components/promocja/Promocja";
import Stylizacja from "./components/stylizacja/Stylizacja";
import Masaz from "./components/masaz/Masaz";
import Dlonie from "./components/dlonie/Dlonie";
import { Layout } from "./components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <AboutUs />,
        },
        {
          path: "/oferta",
          element: <Oferta />,
          // loader: listingPageLoader,
        },
        {
          path: "/",
          element: <AboutUs />,
        },
        {
          path: "/podologia",
          element: <Podologia />,
        },
        {
          path: "/promocja",
          element: <Promocja />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/stylizacja",
          element: <Stylizacja />,
        },
        {
          path: "/masaz",
          element: <Masaz />,
        },
        {
          path: "/dlonie",
          element: <Dlonie />,
        },
      ],
    },
  ]);
  //   return (
  //     <div className="nav--div">
  //       {/* <Navbar /> */}

  //       <Routes>
  //         <Route path="/" element={<AboutUs />} />
  //         <Route path="/oferta" element={<Oferta />} />
  //         <Route path="/podologia" element={<Podologia />} />
  //         <Route path="/promocja" element={<Promocja />} />
  //         <Route path="/contact" element={<Contact />} />
  //         <Route path="/stylizacja" element={<Stylizacja />} />
  //         <Route path="/masaz" element={<Masaz />} />
  //         <Route path="/dlonie" element={<Dlonie />} />
  //       </Routes>
  //     </div>
  //   );
  // }
  return <RouterProvider router={router} />;
}
export default App;
