import React from 'react';
    
const Click = (props) => {

    const { header, allTabs, currentTab, setCurrentTab } = props;

    // const [isClicked, setIsClicked] = useState(false);

    // const clickTab = (e) => {
    //     e.preventDefault();
    //     setIsClicked(true);
    // }

    // const tabContent = (tab) => {
    //     if ( isClicked ) {
    //         return `Tab ${tab} content is showing here.`
    //     }
    //     else {
    //         return "Please click a tab."
    //     }
    // }

    const tabStyle = (index) => {
        if (index === currentTab) {
            console.log("THIS IS THE CURRENT TAB: ", currentTab)
            return "selectedTab"
        }
        else {
            return "nonSelectedTab"
        }
    }

    const setSelectedTab = (index) => {
        setCurrentTab(index)
    }

    const mapTabs = allTabs.map((item, index) => (
        <div key={item.id} className={`tab ${ tabStyle(index) }`} onClick = {(e) => setSelectedTab(index)}>{item.tab}</div>
    ))

    return(
        <div>
            <h1>{header}</h1>
            <div className='tabs'>
                { mapTabs }
            </div>
        </div>
    )
}
    
export default Click;

