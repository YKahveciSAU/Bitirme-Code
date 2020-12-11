import React from 'react'
import VsEditor from '@monaco-editor/react'
function AnswerSolution({code,lang}) {
    return (
        <VsEditor
            value={code}
            language={lang}
            height="72vh"
            theme="dark"
        />
    )
}
export default AnswerSolution