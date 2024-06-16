import { Accordion, Grid, Col, Card, Text, Modal } from "@mantine/core";
import { Info } from "react-feather";
import { useState } from "react";

const groceries = [
  {
    emoji: '😥',
    value: 'Spark Plugs',
    count: 5,
    color: '#FFA500',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '😎',
    value: 'Fuel Injector',
    count: 10,
    color: '#F03232',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '😎',
    value: 'Tyres',
    count: 14,
    color: '#FFA500',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '😥',
    value: 'Suspension',
    count: 0,
    color: '#78C850',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
  {
    emoji: '😎',
    value: 'Clutch',
    count: 10,
    color: '#F03232',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
];

function SparesScreen() {
  const [opened, setOpened] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');

  const handleMoreClick = (description, title) => {
    setCurrentDescription(description);
    setCurrentTitle(title);
    setOpened(true);
  };

  return (
    <div
      style={{
        marginTop: "70px",
        marginBottom: "65px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
      }}
    >
      <h4>Inventory Spare Part details</h4>

      <div style={{ padding: '20px' }}>
        <Grid gutter="lg">
          {groceries.map((groceri, index) => (
            <Col span={6} key={index} style={{ marginBottom: '20px' }}>
              <Card
                shadow="md"
                padding="xl"
                radius="xl"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '180px',
                  width: '100%',
                  maxWidth: '400px',
                  margin: '0 auto',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e0e0e0',
                  position: 'relative',
                }}
              >
                <Info
                  color={groceri.color}
                  style={{ position: 'absolute', top: '15px', right: '20px', cursor: 'pointer' }}
                  onClick={() => handleMoreClick(groceri.description, groceri.value)}
                />
                <Text size="xl" weight={400} color="black" style={{ marginBottom: '10px' }}>
                  {groceri.value}
                </Text>
                <Text size="xl" weight={800} color={groceri.color} align="center">
                  {groceri.count}
                </Text>
              </Card>
            </Col>
          ))}
        </Grid>
      </div>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={currentTitle}
        centered
      >
        <Text>{currentDescription}</Text>
      </Modal>
    </div>
  );
}

export default SparesScreen;
