import React from 'react';
import { Sidebar__Container } from './style';
import SidebarFooter from '../SidebarFooter';
import SidebarBody from '../SidebarBody';
import SidebarHeader from '../SidebarHeader';

const Sidebar = () => {
    return (
        <Sidebar__Container>
            <SidebarHeader />
            <SidebarBody />
            <SidebarFooter />
        </Sidebar__Container>
    );
};

export default Sidebar;
