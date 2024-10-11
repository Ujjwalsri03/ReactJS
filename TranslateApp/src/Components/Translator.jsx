import React, { useState } from 'react'
import { MdVolumeUp } from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import { FaExchangeAlt } from "react-icons/fa";
import languages from "../languages"

function Translator() {
    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    const [fromLang, setFromLang] = useState('en-GB');
    const [toLang, setToLang] = useState('hi-IN');
    const [loading, setLoading] = useState(false);
    
    const handleExchange = () => {
        let tempValue = fromText;
        setFromText(toText);
        setToText(tempValue);

        let tempLang = fromLang;
        setFromLang(toLang);
        setToLang(tempLang);
    };

    const copyContent = (text) => {
        navigator.clipboard.writeText(text);
        alert("Text copied");
    }

    const utterText = (text, lang) => {
       const synth = window.speechSynthesis;
       const utterance = new SpeechSynthesisUtterance(text);
       utterance.lang = lang; // Corrected to set the language
       synth.speak(utterance);
    }

    const handleIconClick = (target, id) => {
        if (target.classList.contains('copy')) {
            if (id === 'from') {
                copyContent(fromText);
            } else {
                copyContent(toText);
            }
        } else {
            if (id === 'from') {
                utterText(fromText, fromLang);
            } else {
                utterText(toText, toLang);
            }
        }
    }

    const handleTranslate = async () => {
        setLoading(true);
        let url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLang}|${toLang}`;
        const res = await fetch(url);
        const data = await res.json();
        setToText(data.responseData.translatedText);
        setLoading(false);
    }

    return (
        <>
            <div className='wrapper'>
                <div className='textareaBox'>
                    <textarea
                        name="from"
                        id="from"
                        className='from-text'
                        placeholder='Enter text'
                        value={fromText}
                        onChange={(e) => setFromText(e.target.value)}
                    />
                    <textarea
                        name="to"
                        id="to"
                        className='Output-text'
                        placeholder='Your translated text will appear here.'
                        value={toText}
                        onChange={(e) => setToText(e.target.value)}
                    />
                </div>
                <ul className='controls'>
                    <li className='row from'>
                        <div className='icons'>
                            <MdVolumeUp className='iconfrom' onClick={(e) => handleIconClick(e.target, 'from')} />
                            <FaCopy className='copy' id='from' onClick={(e) => handleIconClick(e.target, 'from')} />
                        </div>
                        <select value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
                            {Object.entries(languages).map(([code, name]) => (
                                <option key={code} value={code}>{name}</option>
                            ))}
                        </select>
                    </li>
                    <li className='exchange' onClick={handleExchange}><FaExchangeAlt /></li>
                    <li className='row to'>
                        <select value={toLang} onChange={(e) => setToLang(e.target.value)}>
                            {Object.entries(languages).map(([code, name]) => (
                                <option key={code} value={code}>{name}</option>
                            ))}
                        </select>
                        <div className='icons'>
                            <FaCopy className='copy' id='to' onClick={(e) => handleIconClick(e.target, 'to')} />
                            <MdVolumeUp className='iconfrom' onClick={(e) => handleIconClick(e.target, 'to')} />
                        </div>
                    </li>
                </ul>
            </div>
            <button onClick={handleTranslate}>
                {loading ? 'Translating.....' : 'Translate'}
            </button>
        </>
    );
}

export default Translator;