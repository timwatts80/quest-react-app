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
    <Box sx={{ width: '100%', bgcolor: 'grey.300' }}>
      <Tabs value={value} onChange={handleChange} centered>
        {tabs.map((label: string, index: number) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>
    </Box>
  );
}

