import { Container, TextInput, rem,Button } from '@mantine/core';
import { useState } from 'react';

function VechicleInventoryScreen() {

  const [vehicles,setVehicles] = useState([{"name":"Hero Splendor","units":"10","price":"78900"}]) 
  const [name,setName] = useState('');
  const [units,setUnits] = useState('');
  const [price,setPrice] = useState('');

  return (
    <Container style={{
      marginTop:"70px",
      marginBottom:"65px",
      display:"flex",
      flexDirection: "column",
    }}>
    <h3>Vehicle Transaction</h3>

      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        
        label="Retailer Unit"
        placeholder="Ram Honda pvt ltd"
      />
      <div style={{
        display:"flex",
        justifyContent:"space-around"
                    
      }}>
        <p style={{
            width:"45%"
            }}>Name</p>
        <p style={{
            width:"15%"
            }}>Units</p>
        <p style={{
            width:"30%"
            }}>Price/Unit</p>

      </div>
      {  
        vehicles.map((v)=>{
            console.log("In Map:",v)
            return (
                <div style={{
                    display:"flex",
                    justifyContent:"space-around"
                    
                }}>
                    <TextInput style={{
                        width:"45%"
                    }}
                        value={v.name}
                    />
                    <TextInput style={{
                        width:"15%"
                    }}
                        value={v.units}/>
                    <TextInput style={{
                        width:"30%"
                    }}
                        value={v.price}/>

                </div>
            )
        })
      }
       
       <div style={{
            display:"flex",
            justifyContent:"space-around"
            
        }}>
            <TextInput style={{
                width:"45%"
            }}
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
            />
            <TextInput style={{
                width:"15%"
            }}
            value={units}
            onChange={(event) => setUnits(event.currentTarget.value)}
            />
            <TextInput style={{
                width:"30%"
            }}
            value={price}
            onChange={(event) => setPrice(event.currentTarget.value)}
            />
        </div>


      <Button style={{
        marginTop:"10px",
        width:"30%"
        }} onClick={()=>{
            const newVehicles = vehicles.concat([{name,units,price}])
            setVehicles(newVehicles)
            setName('')
            setPrice('')
            setUnits('')
        }}>+ Add Item</Button>
        
        <Button style={{
          margin:"10px"
        }}>Submit Transaction</Button>
      </Container>
    
  );
}

export default VechicleInventoryScreen