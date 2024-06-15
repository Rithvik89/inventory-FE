import { TextInput,Button } from "@mantine/core"

function Settings(){
    return (
        <div style={{
            height:"250px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around"
          }}>
        <TextInput
            label="User Name"
            placeholder="Rithvik Reddy "
            />
            <TextInput 
            label="Email ID"
            placeholder="rithvikalkanti@gmail.com"
            />
            <TextInput
            label="Mobile Number"
            placeholder="9573246445"
            />
            <Button>Save Changes</Button></div>
    )
}

function Logout(){
    return (
        <div style={{
            display:"flex",
            marginTop:"20px",
            justifyContent:"center"
        }}>
 <Button variant='outline' color='red'>Logout</Button>
        </div>
    )
}
export {Settings,Logout}
