import { useEffect, useState } from "react";
import { pt, en } from "../data/strings";

import { useConfig } from "../contexts/config";

export default function useStrings() {
  const { language } = useConfig();
  const [strings, setStrings] = useState(pt);

  useEffect(() => {
    language === "en" ? setStrings(en) : setStrings(pt);
  }, [language]);

  return strings;
}
