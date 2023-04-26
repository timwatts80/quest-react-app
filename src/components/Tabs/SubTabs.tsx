import * as React from 'react';
import { styled, createTheme } from '@mui/material/styles';
import { Tab, Tabs, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Grid, Stack } from '@mui/material';
import FormEntity from '../FormEntity/FormEntity';

export interface SubTabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const ContentGrid: any = styled(Grid)(({ theme }: any) => ({
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
}))

const SubNav: any = styled(Box)(({ theme }: any) => ({
    height: '100%',
}));

const SubNavTab = styled(Tab)(({ theme }: any) => ({
    '&:hover, &.Mui-selected': {
        backgroundColor: theme.palette.primary.contrast,
    },
}));

const SubTabPanelContainer = styled('div')({
    flexGrow: 1,
    height: '100%',
});

const MainContent: any = styled(Box)(({ theme }: any) => ({
    height: '100%',
}));

export function SubTabPanel(props: SubTabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <SubTabPanelContainer
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
                    <Grid item xs={12}>
                        <MainContent>
                            <Typography sx={{ p: 3 }}>{children}</Typography>
                        </MainContent>
                    </Grid>
                </Grid>
            )}
        </SubTabPanelContainer>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Main app nav. Tabs and content frames.
export default function SubTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ContentGrid container>
                <Grid item xs={3}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        TabIndicatorProps={{ sx: { top: 0 } }}
                        aria-label="basic tabs example"
                        orientation='vertical'
                    >
                        <SubNavTab label="Item One" {...a11yProps(0)} />
                        <SubNavTab label="Item Two" {...a11yProps(1)} />
                        <SubNavTab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </Grid>
                <Grid item xs={9}>
                    <SubTabPanel value={value} index={0}>
                        Item One Content
                    </SubTabPanel>
                    <SubTabPanel value={value} index={1}>
                        Item Two Content
                    </SubTabPanel>
                    <SubTabPanel value={value} index={2}>
                        Item Three Content
                    </SubTabPanel>
                </Grid>
        </ContentGrid>
    );
}
