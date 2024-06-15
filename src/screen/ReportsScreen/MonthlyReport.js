import { Text,Container, Title, Table } from '@mantine/core';

const vehicles = [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: 20000 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 22000 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2021, price: 26000 },
    { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2018, price: 18000 },
    { id: 5, make: 'Tesla', model: 'Model 3', year: 2022, price: 35000 },
  ];

function MonthlyReport(){
  const curDate = new Date()
  const formattedDate = curDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  
    return(
        <div style={{
            marginTop:"70px",
            marginBottom:"65px",
            display:"flex",
            flexDirection: "column",
            textAlign:"center"
      
          }}>
    <Container>
      <Title order={2} align="center" style={{ 
        margin: '20px 0',
        textDecoration:'underline' 
        }}>
        Vehicle Sale Daily Report
      </Title>
      {/* <Text align="center" style={{ marginBottom: '20px' }}>
        Date: {formattedDate}
      </Text> */}
      
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.year}</td>
              <td>${vehicle.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>

    <Container>
      <Title order={2} align="center" style={{
         margin: '30px 0', 
         textDecoration:'underline'
         }}>
        Service Sales Daily Report
      </Title>
      {/* <Text align="center" style={{ marginBottom: '20px' }}>
        Date: {formattedDate}
      </Text> */}
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.year}</td>
              <td>${vehicle.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>


    <Container>
      <Title order={2} align="center" style={{
         margin: '30px 0', 
         textDecoration:'underline'
         }}>
        Total In
      </Title>
      <Text align="center" style={{ marginBottom: '20px' }}>
        Date: {formattedDate}
      </Text>
       <Text>124000/-</Text>
    </Container>
    
    </div>
    );
}

export default MonthlyReport