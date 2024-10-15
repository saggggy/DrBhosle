import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

const tabData = [
    { label: "Item One", value: 0 },
    { label: "Item Two", value: 1 },
    { label: "Item Three", value: 2 },
    { label: "Item Four", value: 3 },
];

const MyTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange}>
            {tabData.map(tab => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
        </Tabs>
    );
}

export default MyTabs;
