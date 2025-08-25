import React, { useState } from 'react';
import { Tabs } from '@/components/common/tabs/tabs';

const TabsShowcase = () => {
  const [activeTab1, setActiveTab1] = useState('in-progress');
  const [activeTab2, setActiveTab2] = useState('label1');

  const statusTabs = [
    { id: 'all', label: 'All' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'ready', label: 'Ready' },
    { id: 'completed', label: 'Completed' }
  ];

  const simpleTabs = [
    { id: 'label1', label: 'Label' },
    { id: 'label2', label: 'Label' }
  ];

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '40px',}}>
      <Tabs
        tabs={statusTabs}
        activeTab={activeTab1}
        onTabChange={setActiveTab1}
        variant="separated"
      />

      <Tabs
        tabs={simpleTabs}
        activeTab={activeTab2}
        onTabChange={setActiveTab2}
        variant="contained"
      />
    </div>
  );
};

export default TabsShowcase;
