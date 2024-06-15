import { Center, Text } from "@mantine/core";

function PrimaryInfo(props){
    const {user}=props

    return (
        <div  style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"

      
          }}>
            <Text >{user.name}</Text>
            <Text >{user.mobile}</Text>
        </div>
    );
}

export default PrimaryInfo