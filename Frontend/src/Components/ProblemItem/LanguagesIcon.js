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
        case "Python":
            ProgramLanguage=SiPython;
            break;
        case "C++":
            ProgramLanguage=SiCplusplus;
            break;
        case "C#":
            ProgramLanguage=SiCsharp;
            break;
        case "C":
            ProgramLanguage=SiC;
            break;
        case "Ruby":
            ProgramLanguage=SiRuby;
            break;
        default:
            ProgramLanguage=SiCsharp;
            break;
    }
    const ThemeMode=Mode.includes(theme) ? "#000000" : "#7d8bcc";
    const iconSize=size ? size : "30";
    return(
        <ProgramLanguage size={iconSize} color={ThemeMode}/>
    )
}

export default ProgrammingLanguages