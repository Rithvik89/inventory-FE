import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';




function CardElement(props){

    const navigate = useNavigate()
   
    const {vehicleDetails}=props
    const {image,available_count,name,description}=vehicleDetails
        return (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={image}
                height={150}
                alt="Norway"
              />
            </Card.Section>
      
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{name}</Text>
              <Badge color="pink">{available_count}</Badge>
            </Group>
      
            <Text size="sm" c="dimmed">
              {description}
            </Text>
      
           {
            available_count!=0 ?  <Button color="blue" fullWidth mt="md" radius="md" onClick={()=>{
                navigate("/vehicle/sale")
            }}>
            Book now
          </Button> :  <Button color="red" fullWidth mt="md" radius="md">
              Sold out
            </Button>
           }
          </Card> 
        );
}

export default CardElement