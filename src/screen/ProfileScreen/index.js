import { Card } from "@mantine/core";
import PrimaryInfo from "./PrimaryInfo";
import ProfilePic from "./ProfilePic";
import UserTransaction from "./UserTransactions";

const userInfo = {
    name:"Rithvik Reddy",
    mobile:"9573246320",
    mailId:"rithvikalkanti@gmail.com",
    pastTransactions:[{

    }]
}

function ProfileScreen(){
    return (
    <div style={{
        flexDirection:"column",
    }}>
        <Card>
            <ProfilePic/>
            <PrimaryInfo user={userInfo}/>
            <UserTransaction user={userInfo}/>
        </Card>
      
        
    </div>
    );
}

export default ProfileScreen