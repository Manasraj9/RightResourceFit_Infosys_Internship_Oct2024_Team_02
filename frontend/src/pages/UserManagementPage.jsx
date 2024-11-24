import React from 'react';
import Navbar from '../Components/Bars/NavbarJobseeker';
import Footer from '../Components/Footer';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { useLocation } from 'react-router-dom';

const UserManagementPage = () => {
    const location = useLocation();

    const sidebarItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/Jobseekerdashboard' },
        { text: 'Messages', icon: <MessageIcon />, path: '/NotificationsJobseeker' },
        { text: 'Profile', icon: <AccountBoxIcon />, path: '/Jobseeker-profile' },
        { text: 'All Applications', icon: <PeopleIcon />, path: '/AllApplications' },
        { text: 'Job Listing', icon: <WorkIcon />, path: '/joblisting' },
        { text: 'My Schedule', icon: <ScheduleIcon />, path: '/my-schedule' },
        { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
        { text: 'Help Center', icon: <HelpIcon />, path: '/help-center' },
    ];

    const rows = [
        {
            avatar: 'W',
            firstName: 'Jenny',
            lastName: 'Wilson',
            phone: '1234567890',
            email: 'jennywilson@gmail.com',
            role: 'admin',
            disabled: 'No',
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="flex flex-grow">
                {/* Sidebar */}
                <Box
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: 240,
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: '64px',
                            height: 'calc(100vh - 64px)',
                            overflowY: 'auto',
                        },
                    }}
                >
                    <List>
                        {sidebarItems.map((item) => (
                            <ListItem
                                button
                                key={item.text}
                                component="a"
                                href={item.path}
                                sx={{
                                    color: location.pathname === item.path ? 'blue' : 'inherit',
                                    backgroundColor: location.pathname === item.path ? 'rgba(0, 0, 255, 0.1)' : 'transparent',
                                }}
                            >
                                <ListItemIcon
                                    sx={{ color: location.pathname === item.path ? 'blue' : 'inherit' }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>

                <div className="flex-grow p-4">
                    {/* User Management Content */}
                    <h1 className='text-2xl font-bold'>User Management</h1>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginBottom: '10px',
                        }} >
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search"
                            sx={{ width: '300px' }}
                        />
                    </Box>

                    {/* Table Section */}
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Avatar</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>E-mail</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Disabled</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    width: '30px',
                                                    height: '30px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#2196f3',
                                                    color: '#fff',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }} >
                                                {row.avatar}
                                            </Box>
                                        </TableCell>
                                        <TableCell>{row.firstName}</TableCell>
                                        <TableCell>{row.lastName}</TableCell>
                                        <TableCell>{row.phone}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.role}</TableCell>
                                        <TableCell>{row.disabled}</TableCell>
                                        <TableCell>
                                            <Button size="small" variant="outlined" sx={{ marginRight: '5px' }}>
                                                View
                                            </Button>
                                            <Button size="small" variant="outlined" color="success" sx={{ marginRight: '5px' }}>
                                                Edit
                                            </Button>
                                            <Button size="small" variant="outlined" color="error">
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '10px',
                        }}
                    >
                        <FormControl size="small" sx={{ width: '100px' }}>
                            <InputLabel>Rows</InputLabel>
                            <Select defaultValue={10} label="Rows">
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={15}>15</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                            </Select>
                        </FormControl>
                        <Box>1</Box>
                    </Box>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserManagementPage;
