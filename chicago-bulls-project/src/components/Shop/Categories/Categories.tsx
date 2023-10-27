import './Categories.css'
import { useTranslation } from 'react-i18next'

export const Categories = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div className="categories-top">
                <div className="container container-categories-red">
                    <div className="categories-left">
                        <a href="#">{t("MEN")}</a>
                        <a href="#">{t("WOMEN")}</a>
                        <a href="#">{t("KIDS")}</a>
                        <a href="#">{t("JERSEY")}</a>
                        <a href="#">{t("TSHIRT")}</a>
                        <a href="#">{t("SWEATSHIRTS")}</a>
                        <a href="#">{t("HATS")}</a>
                    </div>
                    <div className="categories-right">
                        <a href="#">{t("ACCESORIES")}</a>
                        <a href="#">{t("HOMEOFFICE")}</a>
                        <a href="#">{t("COLLECTIBLES")}</a>
                        <a href="#">{t("SALE")}</a>
                        <a href="#">{t("NEWARRIVAL")}</a>
                    </div>
                </div>
            </div>
            <div className="categories-bottom">
                <div className="container container-categories-white">
                    <h2>{t("ENDIN")}: <span>01 HRS 15 MIN 03 SEC</span></h2>
                    <h2 className='categories-special'>{t("UPTO")}</h2>
                    <h2>{t("USECODE")}: <span>BACKCOURT</span></h2>
                </div>
            </div>
        </div>
    )
}


