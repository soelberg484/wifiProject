import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBar, NavBarIcon, NavBarIconAnchor } from '@dfds-ui/react-components'
import { Button } from '@dfds-ui/react-components'
import { Close } from '@dfds-ui/icons'
import { H2 } from '@dfds-ui/react-components'
import { ReactComponent as Wifi } from './img/wifi-svg.svg'
import { string } from 'prop-types';

const contentful = require('contentful')


var client = contentful.createClient({
  space: 'xtsdk79cmd4d',
  accessToken: '9a7a0231ec319f18fab74119fa47a90385eb59125bfcace620eca25056369b6e',
  environment: 'WiFiPortal'
})



const App: React.FC = () => {
  const [content, setContent] = useState({title: "", connect: "", subTitle: "", terms: ""})
  const [value, setValue] = useState("") 
  const [imgUrl, setImgUrl] = useState("")
  
  useEffect(() => { 
    client.getEntries({
      'content_type': 'wiFiPortal'
    })
    .then(function (entries: any) {
        console.log(JSON.stringify(entries))
                entries.items.forEach(function (entry: any) {
                setContent(entry.fields)
        })
    })
    
  }, [])

  client.getEntry('JyYjkVCW52anktb0999no').then((entry: any) => setValue(entry.fields.value))
  client.getAsset("5qUgeLjfMgYBMZRAKlKq89").then((entry: any) => setImgUrl(entry.fields.file.url))
  
  return (
    
    <div className="App">
      <NavBar >
        <NavBarIcon alignment="right">
        <Close></Close>
        </NavBarIcon>
      </NavBar>
      <Wifi></Wifi>
      <H2>{content.title}</H2>
      <p>{content.subTitle}</p>

      <p>{content.terms}</p>
      <Button variation="primary" >{content.connect}</Button>
    </div>
    
  );
}

export default App;
