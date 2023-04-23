import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const Header = styled(Grid)(({ theme }: any) => ({
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
}));


function MyLayout(): JSX.Element {
  const [value, setValue] = useState(0);

  return (
    <MainGrid container gap={0}>
      <Header item xl={12} xs={12} />
      <GridContainer item container xs={12}>
        <SideBar item xs={2}>
        </SideBar>
        <GridContainer item xs={10}>
        </GridContainer>
      </GridContainer>
    </MainGrid>
  );
}

export default MyLayout;
