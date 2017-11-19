### react-cards-stack
#### A react for creating cards stack for a quiz.

![ScreenShot](https://i.imgur.com/1lqze2U.png)

Note : Screenshot source http://wordbook.imabhi.in

### #Installation
```javascript
npm install react-cards-stack --save
```

### #Usage
```javascript
import Reactcardstack from 'react-cards-stack'

class Yourcomponent extends React.Component {
  render(){
    return (
      <Reactcardstack images={<Pass your images array here>} />
    )
  }

 export Yourcomponent;
```

### #Props
  * images : An aaray of images for e.g. ['imgurl1', 'imgurl2']
  * postivebtnlabel : "String" | default - Yes
  * negativebtnlabel : "String" | default - No
  * onstackendfn : "Function" | Will be called on Stack End
  
  * More features are coming in next realease.
