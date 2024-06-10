import { Button, Container, TextInput,NativeSelect, rem, ActionIcon } from '@mantine/core';
import { useState } from 'react'
import { Minus } from 'react-feather';

//TODO: Fix Delete button.

function SpareInventoryScreen() {
  const [spares,setSpares] = useState([{"name":"Air filter","units":"12","price":"240"}]) 
  const [name,setName] = useState('');
  const [units,setUnits] = useState('');
  const [price,setPrice] = useState('');

  console.log(spares)

  return ( 
      <Container style={{
      marginTop:"70px",
      marginBottom:"65px",
      display:"flex",
      flexDirection: "column",
    }}>
    <h3>Spares Transaction</h3>

      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        
        label="Retailer Unit"
        placeholder="Gear Motors pvt ltd"
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
        spares.map((spare)=>{
            console.log("In Map:",spare)
            return (
                <div style={{
                    display:"flex",
                    justifyContent:"space-around"
                    
                }}>
                    <TextInput style={{
                        width:"45%"
                    }}
                        value={spare.name}
                    />
                    <TextInput style={{
                        width:"15%"
                    }}
                        value={spare.units}/>
                    <TextInput style={{
                        width:"30%"
                    }}
                        value={spare.price}/>

                  
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
            const newSpares = spares.concat([{name,units,price}])
            setSpares(newSpares)
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

export default SpareInventoryScreen


