# react-input-button

This button was inspired by removing the default "Choose File" input file type with a custom option.

```
Import { InputBtn } from 'react-input-button'
```

The props include

```
<InputBtn
  multiple={false} //Upload multiple files
  onChange={(e) => {}} //Get the event
  style={{}} //Overwrite the existing styles
  text="Upload" // The text of the button
  showText={true} //Add custom component e.g. icon
  component={} if showText = false
/>
```
