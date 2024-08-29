import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ED365 from "./ED365";
import HD365 from "./HD365";
import Homepage from "./Homepage";
import AM365 from "./AM365";
import TM365 from "./TM365";
import EO365 from "./EO365";
import PM365 from "./PM365";
import Privacypolicy from "./Header and Footer/Privacypolicy";
import Termandcondition from "./Header and Footer/Termandcondition";
import EULA from "./Header and Footer/EULA";
import CLM from "./CLM";
import TS365 from "./TS365";

function NavBar() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      // loader: "",
      // key: "/",
    },
    {
      path: "/employee-directory-365",
      element: <ED365 />,
      // loader: "",
      // key: "employee-directory-365",
    },
    {
      path: "/asset-management-365",
      element: <AM365 />,
      // loader: "",
      // key: "asset-management-365",
    },
    {
      path: "/time-off-manager-365",
      element: <TM365 />,
      // loader: "",
      // key: "time-off-manager-365",
    },
    {
      path: "/employee-onboarding-365",
      element: <EO365 />,
      // loader: "",
      // key: "employee-onboarding-365",
    },
    {
      path: "/performance-management-365",
      element: <PM365 />,
      // loader: "",
      // key: "performance-management-365",
    },
    {
      path: "/sharepoint-timesheet",
      element: <TS365 />,
      // loader: "",
      // key: "performance-management-365",
    },
    {
      path: "helpdesk-365",
      element: <HD365 />,
      // loader: "",
      // key: "helpdesk-365",
    },
    {
      path: "/privacy-policy",
      element: <Privacypolicy/>,
      // loader: "",
      // key: "helpdesk-365",
    },
    {
      path: "/sharepoint-contract-management-software",
      element: <CLM/>,
      
    },
    {
      path: "/terms-and-conditions",
      element:<Termandcondition/>,
      // loader: "",
      // key: "helpdesk-365",
    },
    {
      path: "/end-user-license-agreement-eula",
      element:<EULA/>,
      // loader: "",
      // key: "helpdesk-365",
    },

    
   
  ]);
  return (
    <>
      <div>
       {/* <Header/> */}
        <RouterProvider router={router} />
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default NavBar;
