import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { Tabs, Tab } from "@mui/material";
import { MyTabProps } from 'src/types';

const LinkTabs = styled('div')(({ theme }) => ({
  width: '100%',
}));  

const LinkTab = styled(Tab)(({ theme }) => ({
  maxWidth: '100%',
  padding: '48px 100px',
  '& .MuiTabLabel-wrapper': {
    textAlign: 'left',
  },
}));

function MyTabs(props: MyTabProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <LinkTabs>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        orientation="vertical"
        className={props.className}
      >
        <LinkTab label="Tab 1" />
        <LinkTab label="Tab 2" />
        <LinkTab label="Tab 3" />
      </Tabs>
    </LinkTabs>
  );
}

export default MyTabs;
