import AboutMe from "./aboutMe/aboutMe";
import Navbar from "./navbar/navbar";

export default function Layout(props:any) {
  const children = props.children;
  return (
<>
        <div className="main">
          <AboutMe/>
          <div>
          <Navbar/>
          <div className="children">{children}</div>
          </div>
        </div>       
</>
    );
  }
