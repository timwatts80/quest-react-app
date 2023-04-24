import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

export interface TabBarProps {
  tabs: string[];
}

export function TabBar({ tabs }: TabBarProps) {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          style: {
            backgroundColor: '#fff',
            height: 2,
            transform: 'translateY(-100%)',
          },
          sx: {
            '&.Mui-selected': {
              transform: 'translateY(-100%)',
            },
            '&:hover': {
              transform: 'translateY(-100%)',
            },
          },
        }}
      >
        {tabs.map((label: string, index: number) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>
    </Box>
  );
}
