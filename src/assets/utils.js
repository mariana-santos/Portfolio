import { useEffect } from "react";
import { pt, en } from './strings';

import { ConfigContext } from '../App';

import { useContext, useState } from 'react';

function Utils() {
    
    const { language, setLanguage } = useContext(ConfigContext);
    const [strings, setStrings] = useState(pt)

    const exports = {
        strings,
        // Outras exportações...
    };

    useEffect(() => {
        language == 'en' ? setStrings(en) : setStrings(pt)
    }, [language])
}

export default exports;