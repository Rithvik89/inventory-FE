import { ActionIcon, Modal,Card, Title, useMantineTheme ,Text,Button,Menu} from "@mantine/core";
import { Plus } from "react-feather";
import { useDisclosure } from '@mantine/hooks';
import {Link} from 'react-router-dom'
import Services from "./Services";
import { useState } from "react";


function Activity(){

  const [opened, { open, close }] = useDisclosure(false);
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
      <Modal opened={opened} onClose={close} title="Transaction">
        <h3> pick the desired service</h3>
        <div style={{
          height:"200px",
          width:"100%",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-around",
          alignItems:"center"
        }}>
          <Link to="/vehicle/service">
            <Button variant="outline">Vehicle service</Button>
          </Link>
          <Link to="/vehicle/sale">
            <Button variant="outline">Vehicle sale</Button>
          </Link>
          <Link to="/inventory/vehicle">
            <Button variant="outline">Vehicle Inventory</Button>
          </Link>
          <Link to="/inventory/spares">
            <Button variant="outline">Spare Inventory</Button>
          </Link>
        </div>
        
      </Modal>

      <Plus style={{
        position:"fixed",
        bottom:"75",
        right:"20",
        zIndex:"1000"
      }}  onClick={open}/>
     
     
      
    </div>

    
    )
}

export default Activity