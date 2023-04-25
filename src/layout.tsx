import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import BasicTabs from 'src/components/Tabs/Tabs2';
import { TabPanel, TabPanelProps } from './components/Tabs/Tabs2';
import Header from 'src/components/Header/Header';

const HeaderContainer = styled(Grid)(({ theme }: any) => ({
    height: '200px',
    backgroundColor: theme.palette.colors.grey['400'],
}));

const SideBar = styled(Grid)(({ theme }: any) => ({
    width: '200px',
    backgroundColor: theme.palette.background.default,
}));

const Content = styled(Grid)(({ theme }: any) => ({
    backgroundColor: theme.palette.colors.grey['500'],
    flexGrow: 1,
}));

const MainGrid = styled(Grid)(({ theme }: any) => ({
    height: '100vh',
    backgroundColor: 'lightgrey',
}));

const GridContainer = styled(Grid)(({ theme }: any) => ({
    height: 'calc(100% - 200px)',
    bottom: '0px',
}));


function MyLayout(): JSX.Element {
    const [value, setValue] = useState(0);

    return (
        <MainGrid container gap={0}>
            <HeaderContainer item xl={12} xs={12}>
                <Header />
            </HeaderContainer>
            <GridContainer container>
                <BasicTabs />
            </GridContainer>
        </MainGrid>
    );
}

export default MyLayout;
