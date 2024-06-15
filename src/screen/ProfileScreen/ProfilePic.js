import { Avatar } from "@mantine/core"

function ProfilePic(){
    return (
        <div style={{
            marginTop:"80px",
            marginBottom:"10px",
            display:"flex",
            justifyContent:"center",
      
          }}> 
           <Avatar size="xl" color="cyan" radius="xl">RR</Avatar>
        </div>
    );
}

export default ProfilePic