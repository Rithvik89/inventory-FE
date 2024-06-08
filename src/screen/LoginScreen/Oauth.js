
import { GoogleLogin,GoogleOAuthProvider } from "@react-oauth/google";


const CLIENT_ID =
  "1049758730435-5hb4o7jb7tlhi6d3f2cotspofpl02jks.apps.googleusercontent.com";

function Oauth(){
     return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GoogleLogin
          size="large"
          width="300px"
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
    </GoogleOAuthProvider>
     )
}

export default Oauth