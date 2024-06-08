import { ActionIcon, Card, Title, useMantineTheme ,Text} from "@mantine/core";
import { Plus } from "react-feather";
import Services from "./Services";


function Activity(){
    return (
    <div
    style={{
      marginTop:"70px",
      marginBottom:"65px",
      display:"flex",
      flexDirection: "column",

    }}>
      <Card
      onClick={() => {}}
      shadow="sm"
      p="lg"
      radius="md"
      withBorder>
         <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>
      </Card>
      <Plus style={{
        position:"fixed",
        bottom:"75",
        right:"20",
        zIndex:"1000"
      }} onClick={<Services/>}/>
     
      
    </div>

    
    )
}

export default Activity