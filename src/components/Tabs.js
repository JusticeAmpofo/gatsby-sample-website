import React, { useState } from 'react';
import TabItem from './TabItem';
import './tabs.css';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className='tabs mb5'>
            <div className='tabs__panels'>
                {tabs.map((tab) => (
                    <TabItem
                        key={tab.id}
                        label={tab.label}
                        isActive={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    />
                ))}
            </div>
            <div className='tabs__content website-border'>
                {tabs.find((tab) => tab.id === activeTab).content}
            </div>
        </div>
    );
};
export default Tabs;
