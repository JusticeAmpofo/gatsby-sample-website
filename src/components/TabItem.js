import * as React from 'react';

const TabItem = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`btn mr1 tabs__item ${
                isActive ? 'tabs__item--active' : ''
            }`}
        >
            {label}
        </button>
    );
};
export default TabItem;
