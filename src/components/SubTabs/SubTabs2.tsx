import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormEntity from 'src/components/FormEntity/FormEntity';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabStyles = {
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: 'bold',
    mr: 4,
    '&:hover': {
      color: 'primary.main',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: 'primary.main',
      fontWeight: 'bold',
    },
    '&.Mui-focusVisible': {
      boxShadow: '0 0 0 0.2rem rgba(0, 0, 255, .5)',
    },
  },
};

const TabPanelWrapper = styled(Box)({
    '& .MuiTypography-root': {
      padding: '16px',
      color: 'black'
    },
  });
  
  function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
    const { children, value, index, ...other } = props;
  
    return (
      <TabPanelWrapper
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Typography component="div">{children}</Typography>
        )}
      </TabPanelWrapper>
    );
  }

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224, width: '100%' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: '25%', maxWidth: '200px'}}
      >
        <Tab label="Entity" {...a11yProps(0)} sx={tabStyles} />
        <Tab label="Item Two" {...a11yProps(1)} sx={tabStyles} />
        <Tab label="Item Three" {...a11yProps(2)} sx={tabStyles} />
      </Tabs>
      <TabPanel value={value} index={0} sx={{ p: 3, display: 'flex', justifyContent: 'center', width: '100%' }}>
        <FormEntity />
      </TabPanel>
      <TabPanel value={value} index={1} sx={{ p: 3 }}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} sx={{ p: 3 }}>
        Item Three
      </TabPanel> 
    </Box>
  );
}