import { Search } from "react-feather";
import { Burger } from "@mantine/core";


const isSignedIn =true

function Topbar(){
    return (
        <div
        style={{
          background:"lavender",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "100",
          right: "0",
          height: "60px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
       <div>
        {isSignedIn?
        <>
        <Burger
            style={{
            position: "absolute",
            top: "12px",
            left: "13px",
            color: "black"
            }}
        />
        <Search
            style={{
            position: "absolute",
            top: "20px",
            right: "13px",
            color: "black"
            }}
        /></>:<></>
        }
       </div>

      </div>
    );
}

export default Topbar