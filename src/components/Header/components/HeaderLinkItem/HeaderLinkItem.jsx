import React, {useEffect, useState,useRef} from 'react'
import "./HeaderLinkItem.css"

const SubLinkItem=({link,linkId})=>{
  const [showMenu,setShowMenu] = useState(false)
  const [inChild,setInChild] = useState(false)
  let timerRef = useRef();

  useEffect(()=>{
    //prevents menu from closing if cursor is now in next element/submenu
      if(inChild){
        console.log('timer canceled!')
        clearTimeout(timerRef.current)
      }
  },[inChild])

  return(
  <li onMouseEnter={()=>setShowMenu(true)} onMouseLeave={()=>{
    timerRef.current = setTimeout(()=>setShowMenu(false),250)
  }}   className="sub-menu-link-item">
    <h5 className={inChild ? "header-link highlight" : "header-link"}>{link.name}</h5>
    <SubLinkMenu linkId={linkId} setInChild={setInChild} links={link.children} showMenu={showMenu}/> 
  </li>

  )
}



const SubLinkMenu = ({links,showMenu,setInChild,linkId})=>{
  return (
    <section onMouseEnter={()=>setInChild(true)} onMouseLeave={()=>setInChild(false)} 
      className={showMenu ? `sub-link-menu sub-link-menu-${linkId > 5 ? 'left' : 'right'} show-sub-link-menu-${linkId > 5 ? 'left' : 'right'}` : `sub-link-menu sub-link-menu-${linkId > 5 ? 'left' : 'right'}`}>
     {links.map(link=>(
        <li key={link.id} className="submenu-sublink-item">
          <h5 className="header-link">{link.name} </h5>
      </li>
      ))}
    </section>
  )
}


const SubMenu = ({links,isActive,linkId})=>{

  return (
    <section  className={isActive ? 'sub-menu' : "sub-menu shrink-menu"}>
     {links.map(link=>(
        <SubLinkItem   link={link} key={link.id} linkId={linkId}/>
      ))}
    </section>
  )
}

const HeaderLinkItem = ({changeLinkState,link}) => {



  return (
    <li onMouseEnter={()=>changeLinkState(link.id,true)} onMouseLeave={()=>changeLinkState(link.id,false)}  className="header-link-item">
      <h5 className={link.isActive ? "header-link header-link-text underline-link highlight" : "header-link header-link-text"}>{link.name}</h5>
      <SubMenu isActive={link.isActive} linkId={link.id}  links={link.children}/>
    </li>
  )
}

export default HeaderLinkItem