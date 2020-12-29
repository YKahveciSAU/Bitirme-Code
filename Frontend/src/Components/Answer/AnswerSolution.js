import React from 'react'
import VsEditor from '@monaco-editor/react'
function AnswerSolution({code,lang,valueGetterRef}) {

    function handleEditorDidMount(_valueGetter) {
        valueGetterRef.current = _valueGetter;
    }

    return (
        <>
            <VsEditor
                value={code}
                language={lang}
                height="72vh"
                theme="dark"
                editorDidMount={handleEditorDidMount}
            />
        </>
    )
}
export default AnswerSolution