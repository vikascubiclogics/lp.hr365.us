import * as React from "react";
import Logo from "../../Assests/Images/HR365Logo.png";
import DemoButtons from "../Utiilities/DemoButtons";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
function Header() {
  const [ham, setHam] = React.useState(false);
  return (
    <div style={{
      position: "relative"
    }}>

      <div className="HR_MainHeaderSection HR_panel">
        <div className="HR_FlexCenterSpcBetween">
          <div className="HR_LogoSection">
            {/* <a href="https://www.apps365.com" target="_blank" rel="noreferrer">
              <img src={"https://ik.imagekit.io/zn4au2jftpm5/Apps365/Logos/FA%20apps%20365_v10_7upk806-2.png?updatedAt=1720777158298"} alt="Apps 365" />
              {""}
            </a> */}
             <img src={Logo} alt="HR365" />


            <div>
              <span className="MBHAMBURGER" onClick={() => setHam(!ham)}><RxHamburgerMenu /></span>
              {/* <span className="MBHAMBURGER" onClick={() => setHam(!ham)}> ≡</span> */}

            </div>
          </div>

          <div className="HR_FlexCenterSpcBetween" style={{ width: "65%" }}>
            <div className="HR_navMenu">
              <ul>
                <li>
                  <a href="#features" >Features</a>
                </li>
                <li>
                  <a href="#client" >Clients</a>
                </li>
                <li>
                  <a href="#integration">Integration</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#faq">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="MB_button">
              <DemoButtons />
            </div>

            <div className="MB_button">
              <DemoButtons StickyButton={true} />
            </div>
          </div>
        </div>
      </div>



      {
        ham ? <div className="MBHB" style={{ position: "fixed",     zIndex: "9", top: "0vw", paddingTop: '1vw', background: "var(--panelBgColor)", height: "100vh" }}>
          <div className="mbflex">
            <div className="HR_LogoSection">
            <img src={Logo} alt="HR365" />
              {/* <a href="https://www.apps365.com" target="_blank" rel="noreferrer">
                <img src={"https://ik.imagekit.io/zn4au2jftpm5/Apps365/Logos/FA%20apps%20365_v10_7upk806-2.png?updatedAt=1720777158298"} alt="Apps365" />
                {""}
              </a> */}
            </div>{
              ham ? <div onClick={() => setHam(!ham)} style={{ margin: '12px 0px' }}>
                <span className="cross"><RxCross1 /></span>
              </div> : <div onClick={() => setHam(!ham)}>
                <span className="cross">+</span>
              </div>
            }


          </div>
          <div>
            <ul className={`${ham ? "mbmenu" : ""}`}><li>
              <a href="#features" onClick={() => setHam(false)}>Features</a>
            </li>
              <li>
                <a href="#client" onClick={() => setHam(false)}>Clients</a>
              </li>
              <li>
                <a href="#integration" onClick={() => setHam(false)}>Integration</a>
              </li>
              <li>
                <a href="#pricing" onClick={() => setHam(false)}>Pricing</a>
              </li>

              <li>
                <a href="#faq" onClick={() => setHam(false)}>FAQs</a>
              </li>
            </ul>
          </div>
        </div> : ""
      }



    </div>
  );
}
export default Header;
