import React, {useState, useEffect, useLayoutEffect} from 'react';
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Leftcard from './components/Leftcard'
import PageNotFound from './components/PageNotFound'
import apidata from './components/api/UserData.json'


function App(props) {
  const theme = 'dark'
  const [isLoading, setisLoading] = useState(true);
  const [isAdmin, setisAdmin] = useState(true);
  const [data, setData] = useState([]);
  const [userid, setUserId] = useState('')
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const [device, setdevice] = useState(false);
  const [menuBool, setmenuBool] = useState(false);
  const [rendercomponent, setrendercomponent] = useState('Home');
  const [containerHeight, setcontainerHeight] = useState(null);

  const sectionHeightStyle = {
    'height': windowHeight
  }
  const containerHeightStyle = {
    'height': containerHeight
  }
  const onToggleMenuClick = (bool) => {
    setmenuBool(!bool)
  }
  const onClickGotoComponentFn = (param) => {
    setrendercomponent(param);
    setmenuBool(false)
  }
  useEffect(() => {
    setData(apidata)
    setUserId('syedbaji8');
  }, [])
  useLayoutEffect(() => {
    const windowWidthInit = () => {
      if(windowWidth < 769){
        setdevice(true)
      }else{
        setdevice(false)
      }
    }
    windowWidthInit();
    setcontainerHeight(windowHeight - (windowWidth < 769?96:192))
  }, [])
  const leftSideCard = data.length>0 && data.filter((item) => {
    if(userid === item.userId){
      return item;
    }
  }).map((item, index) => {
    return <Leftcard key={index} isLoading={isLoading} setisLoading={setisLoading} user={item} rendercomponent={rendercomponent} onClickGotoComponentFn={onClickGotoComponentFn} />
  });
  const oneComponent = data.length>0 && data.filter((item) => {
    if(userid === item.userId){
      return item;
    }
  }).map((item, index) => {
    return rendercomponent === 'Home'?<Home key={index} user={item} isLoading={isLoading} setisLoading={setisLoading} />:
    rendercomponent === 'About'?<About key={index} user={item} isLoading={isLoading} setisLoading={setisLoading} />:
    rendercomponent === 'Resume'?<Resume key={index} user={item} isLoading={isLoading} setisLoading={setisLoading} />:
    rendercomponent === 'Portfolio'?<Portfolio key={index} user={item} isLoading={isLoading} setisLoading={setisLoading} />:
    rendercomponent === 'Contact'?<Contact key={index} user={item} isLoading={isLoading} setisLoading={setisLoading} />:
    <Home key={index} user={item} isLoading={isLoading} setisLoading={setisLoading} />
  });
  
  return (
    <div className="app-wrapper bg-gradient">
      <header className="d-block d-lg-none">
        <button className="navv-toggle-button" onClick={() => {onToggleMenuClick(menuBool)}}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <section className={`main-section theme-${theme}`} style={sectionHeightStyle}>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-lg-12 p-3 p-lg-5 gap-around d-flex flex-row flex-wrap align-items-stretch justify-content-between">
              <div className={`main-card p-0 col-lg-12 d-flex flex-row flex-wrap align-items-stretch justify-content-between bg-theme br-30`}>
                <div className={`col-lg-3 pr-5 pl-3 py-4 p-lg-5 left-block ${device?'mobile bg-theme':'desktop'} ${menuBool?'on-open':'on-close'}`} style={{'right': !menuBool?-windowWidth:'-20px'}}>
                  {leftSideCard.length>0?leftSideCard:<PageNotFound />}
                </div>
                <div className="col-lg-8 pt-5 p-3 py-lg-5 pr-lg-3 pl-lg-5 right-block card-bg br-30">
                  <div className="col-lg-12 p-0 content-container pr-lg-4" style={containerHeightStyle}>
                    {oneComponent}
                  </div>
                </div>
                <div className="col-lg-1 p-0 last-block desktop-navigation-block br-30 d-none d-lg-block">
                  <Navigation isAdmin={isAdmin} active={rendercomponent} onClickGotoComponentFn={onClickGotoComponentFn} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
