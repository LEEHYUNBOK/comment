import React from 'react'
import dynamic from 'next/dynamic'
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
})
const MyComponent = (props) => {
  const handleClick = (event) => {
    props.setCommentAddContent(event)
    console.log('@@@@@@@@@@@', event) //Get the click event
  }
  return (
    <div>
      <SunEditor onChange={handleClick} />
    </div>
  )
}
export default MyComponent
