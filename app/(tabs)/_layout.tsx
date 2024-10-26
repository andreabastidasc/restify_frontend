import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Icon } from 'react-native-paper';

import Home from '.';
import Profile from './profile';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            labeled={false}
        >
            <Tab.Screen 
                name="home" 
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Icon 
                            source="moon-waning-crescent"
                            size={24}
                        /> 
                    ),
                }}
            />
            <Tab.Screen 
                name="profile" 
                component={Profile}
                options={{
                    tabBarIcon: () => (
                        <Icon 
                            source="account"
                            size={24}
                        /> 
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
