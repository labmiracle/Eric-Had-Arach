import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

const LanguageContext = createContext({
    language: 'sp',
    changeLanguage: () => {},
});

function MainText() {
    const { language } = useContext(LanguageContext);
    
    return (
        <>
            <p>{language === 'sp' ? 'Primer texto' : 'First text'}</p>
            <p>{language === 'sp' ? 'Segundo texto' : 'Second text'}</p>
        </>
    );
}

function Button() {
    const { changeLanguage } = useContext(LanguageContext);
    
    function handleClick() {
        changeLanguage();
    }

    return (
        <button onClick={handleClick}>Change language</button>
    );
}

export default function App() {
    const [language, setLanguage] = useState('sp');

    function changeLanguage() {
        (language === 'sp') ? setLanguage('en') : setLanguage('sp');
    }      

    return (
        <LanguageContext.Provider value={ {language, changeLanguage} }>
            <MainText />
            <Button />
        </LanguageContext.Provider>
    );
}


