import React from 'react'
import dynamic from 'next/dynamic'
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File'
// import styles from './suneditor.module.css'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
})

const MyComponent = (props) => {
  return (
    <div>
      <SunEditor
        setOptions={{
          iframeCSSFileName: ['./suneditor.module.css'],
          width: 'auto',
          height: 'auto',
          minHeight: '100px',
          toolbarContainer: '#toolbar_container',
          buttonList: [
            ['undo', 'redo'],
            [
              'bold',
              'underline',
              'italic',
              'strike',
              'subscript',
              'superscript',
              'removeFormat',
            ],
            [
              'fontColor',
              'hiliteColor',
              'align',
              'horizontalRule',
              'list',
              'table',
            ],
          ],

          // Or Array of button list, eg. [['font', 'align'], ['image']]
          // plugins: [font] set plugins, all plugins are set by default
          // Other option
        }}
        onChange={props.setCommentAddContent}
        setContents={props.commentAddContent}
      />
      {/* <SunEditor
        setAllPlugins={true}
        onChange={props.setCommentAddContent}
        setContents={props.commentAddContent}
      /> */}
    </div>
  )
}
export default MyComponent
