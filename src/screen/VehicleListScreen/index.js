import { Avatar, Text, Card, Badge} from '@mantine/core';


let vehicle_data = [
    {
        "vehicle_number":"TS23E1234",
        "date":"15 June 2024",
        "number": "+91 8651438290",
        "name": "Vikranth Rathod",
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
    }
]

function VehicleListScreen(){
    return (
    <div style={{
        marginTop:"70px",
        marginBottom:"65px",
        marginLeft:"10px",
        marginRight:"10px",
        display:"flex",
        flexDirection: "column"
      }}> 
        
        


    <div
        style={{display: "flex",flexDirection: "column",alignItems: "center", marginBottom: "20px"}}>
        <Avatar src={null} alt="Vikranth Rathod" color="red" size="lg">
            VR
        </Avatar>
        <Text size="xl" weight={500} mt="md">TS23E1234</Text>
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





    {vehicle_data.map((elem,key_1) => {
      
      const totalCost = elem.services.reduce((cnt, service) => cnt + service.cost, 0);
      return <Card shadow="sm" padding="lg" radius="md" withBorder style={{marginBottom:'20px'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',paddingBottom: '10px' }}>
        <Text fw={500} color="blue">Vehicle Service</Text>
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
    })}

        
</div>
    )
     
    
  }


    


export default VehicleListScreen




        