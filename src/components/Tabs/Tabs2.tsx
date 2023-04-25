import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Grid container spacing={0} sx={{ backgroundColor: '#fff', height: '100%'}}>
                    <Grid item xs={3}>
                        <Box sx={{ p: 3 }}>
                            <Tabs>
                                <Tab label="Item One" />
                                <Tab label="Item Two" />
                                <Tab label="Item Three" />
                            </Tabs>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box sx={{ p: 3 }}>
                            <Typography>{children}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tabStyles = {
        '&:hover, &.Mui-selected': {
            bgcolor: 'white',
        },
    };

    return (
        <Box sx={{ height: 'auto', width: '100%', backgroundColor: '#ff0000' }}>
            <Box sx={{ position: 'relative', width: '100%', borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{ sx: { top: 0 } }}
                    aria-label="basic tabs example"
                    sx={{
                        position: 'absolute',
                        bottom: '0px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <Tab label="Item One" {...a11yProps(0)} sx={tabStyles} />
                    <Tab label="Item Two" {...a11yProps(1)} sx={tabStyles} />
                    <Tab label="Item Three" {...a11yProps(2)} sx={tabStyles} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}
