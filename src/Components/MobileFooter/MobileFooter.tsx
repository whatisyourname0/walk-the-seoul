import { useState } from "react";
import "./_styles_MobileFooter.scss"

// function MobileFooter() {
//   return (
//     <div className={`FooterContainer`}>
//       <div className="Menus">

//       </div>
//       <div className="StreetSoundContainer">

//       </div>
//       <div className="VideoSourceContainer">
//         <a>

//         </a>
//       </div>
//     </div>
//   );
// }

function MobileFooter() {
  const [visible, setVisible] = useState<boolean>(true);
  const spanStyle = {
    color: "whitesmoke",
    fontSize: "24px",
  }
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "30px",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      visibility: visible ? "visible" : "hidden",
    }}>
      <span style={spanStyle}>It is better on desktop!</span>
      <div onClick={() => { setVisible(false); console.log(visible); }}>
        <span
          style={{
            ...spanStyle,
            textDecoration: "underline"
          }}
        >Continue anyway...</span>
      </div>
    </div>
  )
}

export default MobileFooter;