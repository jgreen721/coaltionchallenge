import React, {useEffect,useState} from 'react'
import {HeaderLinkItem} from "./components"
import siteLinks from "../../sitelinks.json"
import "./Header.css"

const Header = () => {
   const [links,setLinks] = useState(siteLinks)

  // console.log(siteLinks)




  const [link,setLink] = useState([
    {id:1,name:"Title 1",isActive:false,children:[
      {id:1,name:"SubMenu 1",children:[
        {id:1,name:"SubMenu 2"},
        {id:2,name:"SubMenu 2"},
        {id:3,name:"SubMenu 2"},
      ]},
      {id:2,name:"SubMenu 2",children:[
        {id:1,name:"SubMenu 2"},
        {id:2,name:"SubMenu 2"},
        {id:3,name:"SubMenu 2"},
      ]},
      {id:3,name:"SubMenu 3",children:[
        {id:1,name:"SubMenu 2"},
        {id:2,name:"SubMenu 2"},
        {id:3,name:"SubMenu 2"},
      ]},
    ]}
  ])

  const changeLinkState=(id,state)=>{
    console.log('make link active!',id)
    setLinks(links=>links = links.map((l)=>l.id == id ? {...l,isActive:state} : l))
  }




  return (
    <nav className="header">
      <div className="header-content uppercase">
        <div className="header-header-div">
          <h1>Your<span className="text-orange">Logo</span></h1>
        </div>
        <ul className="header-links">
                       {links.map(l=>(
                      <HeaderLinkItem changeLinkState={changeLinkState}  key={l.id} link={l}/>
                      ))}

        </ul>
      </div>
    </nav>
  )
}

export default Header