import React from 'react';

const Content = (props) => {
    const {allTabs, currentTab } = props;

    return (
        <div className='content'>
            {allTabs[currentTab].content}
        </div>
    )
}

export default Content;