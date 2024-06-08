import { Home, User, Activity, Truck,Settings } from "react-feather";

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
              <Activity size={"20"} />
              <Truck size={"20"} />
              <Settings size={"20"}/>
              <User size={"20"} />

            </div>
        </div>
    )
}

export default Footer