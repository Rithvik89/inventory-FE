import { Search } from "react-feather";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import LeftPane from "../LeftPane";
import { useState } from "react";

const isSignedIn =true


// TODO: Close the leftpane after clicking ....

function Topbar(){

  const [opened, setOpened] = useState(false);

    return (
      <>
      {
        opened && <LeftPane  toggle={()=>setOpened(false)}/>
      }
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
            }} opened={opened} onClick={()=>setOpened(!opened)} aria-label="Toggle navigation"
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
      </>
        
    );
}

export default Topbar