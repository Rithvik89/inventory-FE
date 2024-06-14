import { Accordion } from "@mantine/core";

const groceries = [
    {
      emoji: '😥',
      value: 'Spark Plugs',
      count: 5,
      description:
        'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    },
    {
      emoji: '😎',
      value: 'Fuel Injector',
      count: 10,
      description:
        'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
    },
    {
        emoji: '😎',
        value: 'Tyres',
        count: 14,
        description:
          'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
    },
    {
      emoji: '😥',
      value: 'Suspension',
      count: 0,
      description:
        'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
    },
    {
        emoji: '😎',
        value: 'Clutch',
        count: 10,
        description:
          'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
      },
  ];

function SparesScreen(){
    const items = groceries.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
          <Accordion.Panel>{item.count} left<br></br>{item.description}</Accordion.Panel>
        </Accordion.Item>
      ));
    
      return (
        <div  style={{
            marginTop:"70px",
            marginBottom:"65px",
            display:"flex",
            flexDirection: "column",
            textAlign:"center"
      
          }}>

        <h4>Inventory Spare Part details</h4>
        <Accordion >
          {items}
        </Accordion>
        </div>
      );
}


export default SparesScreen