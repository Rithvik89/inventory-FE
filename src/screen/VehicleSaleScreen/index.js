import { Container, TextInput, rem,NativeSelect, Button } from '@mantine/core';
import { useState } from 'react';


function VechilcleSaleScreen() {
//   const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const [value, setValue] = useState('');

  return (
      <Container style={{
        marginTop:"70px",
        marginBottom:"65px",
        display:"flex",
        flexDirection: "column",
  
      }}>
      <h3>Vehicle Details</h3>
      <NativeSelect
      value={value}
       label="Select Vehicle"
      onChange={(event) => setValue(event.currentTarget.value)}
      data={['Hero Splendor Plus', 'Hero Splendor Plus XTEC', 'Hero HF Deluxe', 'Hero Super Splendor']}
      />

      <TextInput
        leftSectionPointerEvents="none"
        label="Engine Id"
        placeholder="#fe7557yg5"
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

export default VechilcleSaleScreen