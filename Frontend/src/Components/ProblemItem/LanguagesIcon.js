import React from 'react';
import {SiPython,SiCplusplus,SiCsharp,SiC,SiRuby} from 'react-icons/si'
const Mode= [ 'light','dark']
const ProgrammingLanguages=({
    Language,
    theme,
    size
})=>{
    let ProgramLanguage=null;
    switch (Language){
        case "python":
            ProgramLanguage=SiPython;
            break;
        case "cplusplus":
            ProgramLanguage=SiCplusplus;
            break;
        case "csharp":
            ProgramLanguage=SiCsharp;
            break;
        case "c":
            ProgramLanguage=SiC;
            break;
        case "ruby":
            ProgramLanguage=SiRuby;
            break;
        default:
    }
    const ThemeMode=Mode.includes(theme) ? "#000000" : "#7d8bcc";
    const iconSize=size ? size : "30";
    return(
        <ProgramLanguage size={iconSize} color={ThemeMode}/>
    )
}

export default ProgrammingLanguages