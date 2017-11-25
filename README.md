### react-cards-stack
#### A react component for creating cards stack for a quiz.

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
  * images : An array of images for e.g. ['imgurl1', 'imgurl2']
  * imgclass : "String" - CSS
  * postivebtnlabel : "String" | default - Yes
  * negativebtnlabel : "String" | default - No
  * onstackendfn : "Function" | Will be called on Stack End
  * postivebtnclass : "String" - CSS
  * negativebtnclass : "String" - CSS
  * query : "String" - For specifying message
  * queryclass : "String" - CSS

  * More features are coming in next release.

### #Feature Request
  Drop a mail on abhisharjangir@ymail.com for any new feature request.
