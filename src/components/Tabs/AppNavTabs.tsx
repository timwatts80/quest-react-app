import * as React from 'react';
import { styled, createTheme } from '@mui/material/styles';
import { Tab, Tabs, Typography } from '@mui/material';
import SubTabs from './SubTabs';
import Box from '@mui/material/Box';
import { Grid, Stack } from '@mui/material';
import FormEntity from '../FormEntity/FormEntity';

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const ContentGrid: any = styled(Stack)(({ theme }: any) => ({
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.contrast,
}));

const TabBar: any = styled(Box)(({ theme }: any ) => ({
    position: 'relative',
    height: '100%',
    width: '100%',
    maxHeight: '52px',
    backgroundColor: theme.palette.colors.grey['200'],
}));

const AppNavTab: any = styled(Tab)(({ theme }: any) => ({
    backgroundColor: theme.palette.colors.grey['300'],
    margin: '0px 1px',
    '&:hover, &.Mui-selected': {
        backgroundColor: theme.palette.primary.contrast,
    },
}));

const TabPanelContainer = styled('div')({
    flexGrow: 1,
    height: '100%',
});

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <TabPanelContainer
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </TabPanelContainer>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Main app nav. Tabs and content frames.
export default function TabPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ContentGrid>
            <Box sx={{
                height: '100%',
                width: '100%',
            }}>
                <TabBar>
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
                        <AppNavTab label="Item One" {...a11yProps(0)} />
                        <AppNavTab label="Item Two" {...a11yProps(1)} />
                        <AppNavTab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </TabBar>
                <Box
                    sx={{
                        height: '40px',
                        width:  '100%',
                    }}
                />
                <Box sx={{ width: '100%', }}>
                    <TabPanel value={value} index={0}>
                        <SubTabs />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two Content
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three Content
                    </TabPanel>
                </Box>
            </Box>
        </ContentGrid>
    );
}
