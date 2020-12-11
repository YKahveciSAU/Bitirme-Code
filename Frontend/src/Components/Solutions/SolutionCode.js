import React from 'react'
import Editor  from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neat.css';
import './SolutionCode.css'
function Solution(props) {
    const code = props.code;
    return (
                <>
                      <div style={{display:"flex",flex:"1",justifyContent:"space-between",paddingRight:"1rem",paddingLeft:"1rem",marginBottom:"0"}}>
                          <div style={{backgroundColor:"#fff",fontWeight:"bold",padding:"3px 12px",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",border: "1px solid #dee2e6",borderBottom:"0"}}>{props.lang}</div>
                          <div style={{backgroundColor:"#fff",fontWeight:"bold",padding:"3px 12px",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",border: "1px solid #dee2e6",borderBottom:"0",cursor:"pointer"}}>Kopyala</div>
                      </div>
                      <Editor
                          value={code}
                              options={{
                                  theme: 'neat',
                                  tabSize: 2,
                                  keyMap: 'sublime',
                                  mode: props.lang,
                                  scrollbarStyle:'null',
                                  lineWrapping:'true',
                                  readOnly:'true'
                              }}
                          />
                </>
            );
}
export default Solution