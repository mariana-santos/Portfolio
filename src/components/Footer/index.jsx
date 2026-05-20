import './style.css'

import { useConfig } from "../../contexts/config";

export default function Footer(){
    const { t } = useConfig();

    return(
        <footer>
            <p>{t("common.footer-text")}</p>
            <a href="mailto:marianasfernandessousa@gmail.com">marianasfernandessousa@gmail.com</a>
        </footer>
    )
}