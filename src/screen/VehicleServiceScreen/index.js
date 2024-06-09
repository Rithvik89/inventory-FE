import { Container, TextInput, rem,MultiSelect ,Button} from '@mantine/core';
import { useState } from 'react';

function VechicleServiceScreen() {
  const [value, setValue] = useState([]);
  return (
    
      <Container style={{
      marginTop:"70px",
      marginBottom:"65px",
      display:"flex",
      flexDirection: "column",
    }}>
      <h3>Service Info</h3>

      <MultiSelect
      value={value}
      onChange={setValue}
      label="Services"
      placeholder="Pick Services"
      data={['Water Wash', 'EngineOil', 'Air Filter','Oil Filter for Clutch','Brake fluid','Wheel bearings']}
    />
      <TextInput
        placeholder="96700"
        label="Price"
      />
      <h3>Customer Details</h3>
      <TextInput
        placeholder="A.Revanth Reddy"
        label="Name"
      />
       <TextInput
        placeholder="9876543210"
        label="Mobile number"
      />
       <TextInput
        placeholder="Flat-320, Sri Ganesh Apartment, Gajwel "
        label="Address"
      />

      <Button style={{
        marginTop:"10px",
        width:"30%"
        }} size="xs">Submit</Button>

      </Container>
  );
}

export default VechicleServiceScreen