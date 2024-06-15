import { Tabs, rem ,TextInput,Button} from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import {Settings,Logout} from './Subsection';


function UserTransaction(props){
    return (
        <div style={{
            marginTop:"30px"
        }}>
    <Tabs defaultValue="services">
      <Tabs.List >
        <Tabs.Tab value="services">
          Services
        </Tabs.Tab>
        <Tabs.Tab value="vehicles" >
          Vehicles
        </Tabs.Tab>
        <Tabs.Tab value="settings" >
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="logout" >
          Logout
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="services">
        
      </Tabs.Panel>

      <Tabs.Panel value="vehicles">
       
      </Tabs.Panel>

      <Tabs.Panel value="settings">
            <Settings/>
      </Tabs.Panel>

      <Tabs.Panel value="logout">
           <Logout/>
      </Tabs.Panel>
    </Tabs>
        </div>
    );
}

export default UserTransaction