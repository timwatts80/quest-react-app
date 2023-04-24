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
        <Box sx={{ position: 'absolute', width: '100%', bottom: '0px' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{
                    style: {
                        height: 2,
                        top: '0px',
                    },
                    sx: {
                        '&.Mui-selected': {
                            backgroundColor: '#fff',
                        },
                        '&:hover': {
                            backgroundColor: '#fff',
                        },
                    },
                }}
            >
                {tabs.map((label: string, index: number) => (
                    <Tab
                        key={index}
                        label={label}
                        sx={{
                            height: '100%',
                            '&.Mui-selected': {
                                backgroundColor: '#fff',
                            },
                            '&:hover': {
                                backgroundColor: '#fff',
                            },
                        }}
                    />
                ))}
            </Tabs>
        </Box>
    );
}
