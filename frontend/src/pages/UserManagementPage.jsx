import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import Groups3Icon from '@mui/icons-material/Groups3';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserManagementPage = () => {
    const location = useLocation();
    const [role, setRole] = useState('user'); // Or an appropriate default value
    const [id, setId] = useState(''); // Or an appropriate default value
    const [users, setUsers] = useState([]); // Store users data
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true); // Start loading indicator
            try {
                // Fetching jobseeker profiles
                const response = await fetch('http://localhost:1000/jobseeker-profiles');
                const profiles = await response.json();
                setUsers(profiles); // Set the fetched profiles
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Ensure loading state is set to false after data is fetched or on error
            }
        };

        fetchUsers();
    }, []);

    const handleRoleChange = async (userId, newRole) => {
        try {
            console.log('Sending data:', { userId, newRole });

            const response = await axios.put(`http://localhost:1000/Jobseeker-profile/${userId}`, {
                role: newRole,
            });

            if (response.status === 200 || response.data.message === 'Role updated successfully') {
                toast.success('User role updated successfully', {
                    position: 'top-right',
                    autoClose: 5000,
                });

                // Update the user's role in the local state
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user._id === userId ? { ...user, role: newRole } : user
                    )
                );
            }
        } catch (error) {
            console.error('Error updating role:', error);
            toast.error('Failed to update role. Please try again.', {
                position: 'top-right',
                autoClose: 5000,
            });
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            console.log('Deleting user with ID:', userId);

            // Send DELETE request to the backend to delete the user
            const response = await axios.delete(`http://localhost:1000/Jobseeker-profile/${userId}`);

            if (response.status === 200) {
                toast.success('User deleted successfully', {
                    position: 'top-right',
                    autoClose: 5000,
                });

                // Remove the deleted user from the local state
                setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Failed to delete user. Please try again.', {
                position: 'top-right',
                autoClose: 5000,
            });
        }
    };


    const sidebarItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/Jobseekerdashboard' },
        { text: 'Messages', icon: <MessageIcon />, path: '/NotificationsJobseeker' },
        { text: 'Profile', icon: <AccountBoxIcon />, path: '/Jobseeker-profile' },
        { text: 'All Applications', icon: <PeopleIcon />, path: '/AllApplications' },
        { text: 'My Schedule', icon: <ScheduleIcon />, path: '/my-schedule' },
        { text: 'User Management', icon: <Groups3Icon />, path: '/UserManagementPage' },
        { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
        { text: 'Help Center', icon: <HelpIcon />, path: '/help-center' },
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
                    <h1 className="text-2xl font-bold">User Management</h1>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Avatar</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>E-mail</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user._id}>
                                        <TableCell>{user.avatar}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.phoneNumber}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.role}</TableCell>
                                        <TableCell className='ml-10'>
                                            <button
                                                onClick={() => handleRoleChange(user._id, 'user')}
                                                className={`px-4 py-2 ${user.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-600'} rounded-md`}
                                            >
                                                User
                                            </button>
                                            <button
                                                onClick={() => handleRoleChange(user._id, 'admin')}
                                                className={`px-4 py-2 ${user.role === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-600'} rounded-md`}
                                            >
                                                Admin
                                            </button>
                                            {/* Delete Button */}
                                            <button
                                                className='px-4 py-2 bg-red-500 text-white rounded-md'
                                                onClick={() => handleDeleteUser(user._id)}

                                            >
                                                Delete
                                            </button>

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
