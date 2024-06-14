import { Home, User, Activity, Truck,Settings } from "react-feather";
import { Link } from "react-router-dom";

const isSignedIn =true

function Footer(){
    return (
        <div
        style={{
          background:"lavender",
          position: "fixed",
          bottom: "0",
          height: "60px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex:"120"
        }}
      >
         <div style={{
            display:"flex",
            justifyContent:"space-around",
            width:"100%"
         }}>

          <Link to="/activity">
            <Activity size={"20"} />
          </Link>
          <Link to="/vehicles">
             <Truck size={"20"} />
          </Link>
          <Link to="/spares">
            <Settings size={"20"}/>
          </Link>
          <Link to="/profile">
             <User size={"20"} />
          </Link>

            </div>
        </div>
    )
}

export default Footer