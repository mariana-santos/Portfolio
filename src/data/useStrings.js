import { useEffect, useContext, useState } from "react";
import { pt, en } from './strings';

import { ConfigContext } from '../App';

export default function useStrings() {
  const { language } = useContext(ConfigContext);
  const [strings, setStrings] = useState(pt);

  useEffect(() => {
    language === 'en' ? setStrings(en) : setStrings(pt);
  }, [language]);

  return strings;
}