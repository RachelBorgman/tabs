import { useState } from 'react'
import './App.css'
import Click from './components/Click'
import Content from './components/Content'

function App() {
  // const [count, setCount] = useState(0)
  // const tabStyle = {
  //   display: flex
  // };
  const tabsArr = [
    { id: 0, tab: "Tab 1", content: "Tab 1 content is showing here."},
    { id: 1, tab: "Tab 2", content: "Tab 2 content is showing here."},
    { id: 2, tab: "Tab 3", content: "Tab 3 content is showing here."}
  ];

  const [ allTabs, setAllTabs ] = useState(tabsArr);
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <Click header = { "Tabs" } allTabs = { allTabs } setCurrentTab = { setCurrentTab } currentTab = {currentTab}></Click>
      <Content allTabs = { allTabs } currentTab = { currentTab }></Content>
        {/* <div className='tabs'>
          <h2 className='tab'>Tab 1</h2>
          <h2 className='tab'>Tab 2</h2>
          <h2 className='tab'>Tab 3</h2>
        </div>
        <div className='contents'>
          <p className='content1'>Tab 1 content is showing here.</p>
          <p className='content2'>Tab 2 content is showing here.</p>
          <p className='content3'>Tab 3 content is showing here.</p>
        </div> */}
    </>
  )
}

export default App
