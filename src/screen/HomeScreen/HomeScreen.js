import { Textarea,Button,Container,Loader, Flex, Center } from '@mantine/core';
import { useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import styled from "styled-components";




// how to make the page loading while posting this record....
// so, okay do this way make the page loading for 10 sec when clicked on submit ..
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


function Home() {
  // use state object to maintain the state to the text area.
  const [value,setValue] = useState('') ;
  const [isLoading, setIsLoading] = useState(false);

  // capture location ..
  const {pathname} = useLocation();
  const navigate = useNavigate();

  // TODO: validate the body before making the api-call like:
  // 1. Atleast some content should be present over there ..

  async function SubmitContent(body){

    try{

      setIsLoading(true)
      const res = await fetch("http://localhost:8080/submit",{
        method:"POST",
        body:JSON.stringify(body)
      });

      const respBody = await res.json()

      // assuming respBody contains hash field.
      // get the hash from respBody ..
      // route to the edit page /:hash ... 
      const hash =respBody.hash;
      navigate("/"+hash);

    }
    catch(err){
        console.log(err);
    }
    finally{
      setIsLoading(false)
    }
    
  }

  // console.log(value)
    return (
        <div
        style={{
          marginTop:"70px",
          height:"70vh",
          display:"flex",
          flexDirection: "column",
          justifyContent:"space-around",
          alignItems:"center",

        }}>
           <div
           style={{
            display:"flex",
            flexDirection: "column",
            justifyContent:"space-around",
            alignItems:"center"
           }}>
          <h2>We are here with :)</h2>

              <Button style={{
                width:"150px",
                margin:"20px"
              }}>Service</Button>
              <Button
              style={{
                width:"150px",
                margin:"20px",
              }}> Sales</Button>
           </div>
        </div>
      );
}

export default Home;