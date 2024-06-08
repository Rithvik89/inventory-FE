import { Button } from "@mantine/core";
import Oauth from "./Oauth";


function LoginScreen(){

  const parentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };
    return (
      <div style={parentStyle}>
         <Oauth/>
       </div>
    );

}

export default LoginScreen