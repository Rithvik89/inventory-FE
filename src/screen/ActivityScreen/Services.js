import { Menu } from '@mantine/core';

function Services(){
   return (
    <Menu  position="left">
    <Menu.Dropdown >
    <Menu.Item>
         Settings
       </Menu.Item>
       <Menu.Item >
         Messages
       </Menu.Item>
    </Menu.Dropdown>
 </Menu>
   )
}

export default Services