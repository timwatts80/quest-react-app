import * as React from 'react';
import { styled, createTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Stack } from '@mui/material';
import questTheme from 'src/MyDesignSystemLightTheme';

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const ContentGrid: any = styled(Stack)(({ theme }: any) => ({
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.colors.grey['300'],
}))

const AppNavTab: any = styled(Tab)(({ theme }: any) => ({
    '&:hover, &.Mui-selected': {
        backgroundColor: theme.palette.primary.contrast,
    },
}));

const SubNavTab = styled(Tab)(({ theme }: any) => ({
    '&:hover, &.Mui-selected': {
        backgroundColor: theme.palette.primary.contrast,
    },
}));

const TabPanelContainer = styled('div')({
    flexGrow: 1,
    height: '100%',
});

const SubNav: any = styled(Box)(({ theme }: any) => ({
    backgroundColor: '#f2f2f2',
    height: '100%',
}));

const MainContent: any = styled(Box)(({ theme }: any) => ({
    backgroundColor: 'yellow', height: '100%',
}));

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
                <Grid
                    container
                    spacing={0}
                    sx={{
                        position: 'relative',
                        height: '100%',
                    }}
                >
                    <Grid item xs={3} md={2}>
                    </Grid>
                    <Grid item xs={9} md={10}>
                        <MainContent>
                            <Typography>{children}</Typography>
                        </MainContent>
                    </Grid>
                </Grid>
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
                <Box sx={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    maxHeight: '52px',
                }}>
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
                </Box>
                <Box sx={{ height: '100%', width: '100%', }}>
                    <TabPanel value={value} index={0}>
                        Item One Content
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
