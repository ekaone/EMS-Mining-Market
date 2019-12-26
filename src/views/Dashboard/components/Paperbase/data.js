import React from 'react';
// component
import Content from '../Content/Content';
import Content2 from '../Content/Content2';
// icons
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';

const categoriesListItem = [
  {
    id: 'Task',
    children: [
      { id: 'Labour', icon: <PeopleIcon />, active: true },
      { id: 'Inspection', icon: <DnsRoundedIcon /> },
      { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
      { id: 'Location', icon: <PublicIcon />, },
      { id: 'Functions', icon: <SettingsEthernetIcon /> },
      { id: 'Vehicle', icon: <SettingsInputComponentIcon /> },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Analytics', icon: <SettingsIcon /> },
      { id: 'Performance', icon: <TimerIcon /> },
      { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    ],
  },
];

const tabLabelsLabour = [
  { id: 0, label: 'Users', content: <Content /> },
  { id: 1, label: 'Work Order', content: <Content2 /> },
  { id: 2, label: 'Purchase Order', content: 'Content -- Purchase Order' },
  { id: 3, label: 'Approval', content: 'Content -- Approval' }
]

const tabLabelsInspection = [
  { id: 0, label: 'Inspect 1', content: 'Inspect 1' },
  { id: 1, label: 'Inspect 2', content: 'Inspect 2' },
]

const tabLabelsStorage = [
  { id: 0, label: 'Storage 1', content: 'Storage 1' },
  { id: 1, label: 'Storage 2', content: 'Storage 2' },
]

const tabLabelsLocation = [
  { id: 0, label: 'Location 1', content: 'Location 1' },
  { id: 1, label: 'Location 2', content: 'Location 2' },
]

const tabLabelsFunctions = [
  { id: 0, label: 'Functions 1', content: 'Functions 1' },
  { id: 1, label: 'Functions 2', content: 'Functions 2' },
]

const tabLabelsVehicle = [
  { id: 0, label: 'Vehicle 1', content: 'Vehicle 1' },
  { id: 1, label: 'Vehicle 2', content: 'Vehicle 2' },
]
// ----
const tabLabelsAnalytics = [
  { id: 0, label: 'Analytics 1', content: 'Analytics 1' },
  { id: 1, label: 'Analytics 2', content: 'Analytics 2' },
]

const tabLabelsPerformance = [
  { id: 0, label: 'Performance 1', content: 'C Performance 1' },
  { id: 1, label: 'Performance 2', content: 'C Performance 2' },
  { id: 2, label: 'Performance 3', content: 'C Performance 3' },
  { id: 3, label: 'Performance 4', content: 'C Performance 4' },
]

const tabLabelsTestLab = [
  { id: 0, label: 'TestLab 1', content: 'TestLab 1' },
  { id: 1, label: 'TestLab 2', content: 'TestLab 2' },
]

export { 
  categoriesListItem,
  tabLabelsLabour,
  tabLabelsInspection,
  tabLabelsStorage,
  tabLabelsLocation,
  tabLabelsFunctions,
  tabLabelsVehicle,
  tabLabelsAnalytics,
  tabLabelsPerformance,
  tabLabelsTestLab
}