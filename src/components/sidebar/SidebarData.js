import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import GroupIcon from '@material-ui/icons/Group';
export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/"
    },
    {
        title: "Mailbox",
        icon: <MailIcon/>,
        link: "/mailbox"
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/dashboard"
    },
    {
        title: "Maps",
        icon: <MapIcon/>,
        link: "/maps"
    },
    {
        title: "Friends",
        icon: <GroupIcon/>,
        link: "/friends"
    }
];