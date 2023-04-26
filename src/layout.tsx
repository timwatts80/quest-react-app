import React, { useState } from 'react';
import { Box, Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import TabContent from 'src/components/Tabs/AppNavTabs';
import { TabPanel, TabPanelProps } from './components/Tabs/AppNavTabs';
import Header from 'src/components/Header/Header';

const MainStack = styled(Stack)(({ theme }: any) => ({
    height: '100vh',
    backgroundColor: 'lightgrey',
}));

const HeaderContainer = styled(Grid)(({ theme }: any) => ({
    height: 'auto',
    backgroundColor: theme.palette.colors.grey['400'],
}));

const Content = styled(Grid)(({ theme }: any) => ({
    backgroundColor: theme.palette.colors.grey['500'],
    flexGrow: 1,
}));

const GridContainer = styled(Grid)(({ theme }: any) => ({
    height: 'calc(100vh - 124px)',
}));

function PageLayout(): JSX.Element {
    const [value, setValue] = useState(0);

    return (
        <MainStack spacing={0}>
            <HeaderContainer item xl={12} xs={12}>
                <Header />
            </HeaderContainer>
            <GridContainer container>
                <TabContent />
            </GridContainer>
        </MainStack>
    );
}

export default PageLayout;
