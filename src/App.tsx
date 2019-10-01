import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar, NavBarIcon, NavBarIconAnchor } from '@dfds-ui/react-components'
import { Button } from '@dfds-ui/react-components'
import { Close } from '@dfds-ui/icons'
const contentful = require('contentful')


var client = contentful.createClient({
  space: 'xtsdk79cmd4d',
  accessToken: '9a7a0231ec319f18fab74119fa47a90385eb59125bfcace620eca25056369b6e',
  environment: 'WiFiPortal'
})


const App: React.FC = () => {
  const [content, setContent] = useState("")
  const [value, setValue] = useState("") 
  const [imgUrl, setImgUrl] = useState("")
  
  client.getEntries({
    'content_type': 'flowTravel'
  })
  .then(function (entries: any) {
      console.log(JSON.stringify(entries))
              entries.items.forEach(function (entry: any) {
              setContent(entry.fields.oneway)
      })
  })
  

  client.getEntry('JyYjkVCW52anktb0999no').then((entry: any) => setValue(entry.fields.value))
  client.getAsset("5qUgeLjfMgYBMZRAKlKq89").then((entry: any) => setImgUrl(entry.fields.file.url))
  
  return (
    
    <div className="App">
      <NavBar >
        <NavBarIcon>

        </NavBarIcon>
        <NavBarIconAnchor menuShown={false}>
      <Close></Close>

        </NavBarIconAnchor>
      </NavBar>
      <Button></Button>
      <header className="App-header">
        <img src={imgUrl} alt=""/>
        <p>
          {value}
          <br/>
          {content}
        </p>
      </header>
    </div>
    
  );
}

export default App;
