//import { ActionIcon, Modal,Card, Title, useMantineTheme ,Text,Button,Menu} from "@mantine/core";
import { Card, Image, Text, Badge, Button, Group, Modal } from '@mantine/core';
import { Plus } from "react-feather";
import { useDisclosure } from '@mantine/hooks';
import {Link} from 'react-router-dom'
import Services from "./Services";
import { useState } from "react";


let service_data = [
  {
    "service_id":1,
    "name": "John Doe",
    "number": "+1234567890",
    "vehicle_number": "ABC1234",
    "service_type": "Vehicle Service",
    "date":"15 June 2024",
    "services": [
      {
        "type": "Oil Change",
        "cost": 50
      },
      {
        "type": "Tire Rotation",
        "cost": 30
      },
      {
        "type": "Brake Inspection",
        "cost": 20
      }
    ]
  },
  {
    "service_id":1,
    "name": "Jane Smith",
    "number": "+1987654321",
    "vehicle_number": "XYZ5678",
    "service_type": "Vehicle Service",
    "date":"3 June 2024",
    "services": [
      {
        "type": "Car Wash",
        "cost": 25
      },
      {
        "type": "Engine Tune-Up",
        "cost": 100
      }
    ]
  },
  {
    "service_id":1,
    "name": "Michael Brown",
    "number": "+1555123456",
    "vehicle_number": "DEF2468",
    "service_type": "Vehicle Service",
    "date":"4 June 2024",
    "services": [
      {
        "type": "Wheel Alignment",
        "cost": 75
      }
    ]
  }
]

let vehicle_book_data = [
  {
    "vehicle_name": "Honda Civic",
    "engine_id": "VTEC123",
    "price": 25000,
    "name": "John Doe",
    "number": "123-456-7890",
    "address": "123 Main St, Anytown, USA",
    "date": "2023-09-18",
    "service_type": "book_vehicle",
    "service_id":2,
  },
  {
    "vehicle_name": "Toyota Camry",
    "engine_id": "4CYL456",
    "price": 30000,
    "name": "Jane Smith",
    "number": "987-654-3210",
    "address": "456 Oak Ave, Somewhere, USA",
    "date": "2023-11-05",
    "service_type": "book_vehicle",
    "service_id":2,
  },
  {
    "vehicle_name": "Ford Mustang",
    "engine_id": "V8XYZ",
    "price": 40000,
    "name": "James Brown",
    "number": "555-123-4567",
    "address": "789 Elm St, Anywhere, USA",
    "date": "2023-07-22",
    "service_type": "book_vehicle",
    "service_id":2,
  }
]

function Activity(){

  const [opened, { open, close }] = useDisclosure(false);
    return (
    <div 
    style={{
      marginTop:"70px",
      marginBottom:"65px",
      marginLeft:"10px",
      marginRight:"10px",
      display:"flex",
      flexDirection: "column"
    }}>
      
    {service_data.map((elem,ind) => {
      if(elem.service_id == 1){
      const totalCost = elem.services.reduce((cnt, service) => cnt + service.cost, 0);
      return <Card shadow="sm" padding="lg" radius="md" withBorder style={{marginBottom:'20px'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',paddingBottom: '10px' }}>
        <Text fw={500} color="blue">{elem.service_type}</Text>
        <Text c="dimmed">{elem.date}</Text>
      </div>

      <div style={{ position: 'relative', marginTop: '0px' }}>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            borderBottom: '2px solid #eee',
            width: '80%',  
          }}
        ></div>
      </div>
      
      {elem.services.map((serv,index) => {
        return <Badge variant="light" color="blue"  radius="sm" style={{ marginTop: '15px', marginRight:'5px', height:'45px',fontSize:'14px' }}>{serv.type}</Badge>
      })}
      

      <div style={{ marginTop: '20px', padding: '10px',  borderRadius: '8px' }}>
          <Text fw={600} color="dark">Name: <Text fw={500} color="blue" component="span">{elem.name}</Text></Text>
          <Text fw={600} color="dark">Number: <Text fw={500} color="blue" component="span">{elem.number}</Text></Text>
          <Text fw={600} color="dark">Vehicle Number: <Text fw={500} color="blue" component="span">{elem.vehicle_number}</Text></Text>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0px' }}>
        <Badge
          style={{
            padding: '18px 20px',
            background: 'linear-gradient(90deg, rgba(72,201,176,1) 0%, rgba(46,204,113,1) 100%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: 'none'
          }}
        >
          ₹{totalCost}
        </Badge>
      </div>
      
    </Card>
    
  }

    

    

    })}
    
  
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