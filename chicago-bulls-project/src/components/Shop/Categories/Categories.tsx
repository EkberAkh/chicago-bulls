import './Categories.css'

export const Categories = () => {
    return (
        <div>
            <div className="categories-top">
                <div className="container container-categories-red">
                    <div className="categories-left">
                        <a href="#">MEN</a>
                        <a href="#">WOMEN</a>
                        <a href="#">KIDS</a>
                        <a href="#">JERSEY</a>
                        <a href="#">T-SHIRTS</a>
                        <a href="#">SWEATSHIRTS</a>
                        <a href="#">HATS</a>
                    </div>
                    <div className="categories-right">
                        <a href="#">ACCESORIES</a>
                        <a href="#">HOME&OFFICE</a>
                        <a href="#">COLLECTIBLES</a>
                        <a href="#">SALE</a>
                        <a href="#">NEW ARRIVALS</a>
                    </div>
                </div>
            </div>
            <div className="categories-bottom">
                <div className="container container-categories-white">
                    <h2>END  IN: <span>01 HRS 15 MIN 03 SEC</span></h2>
                    <h2 className='categories-special'>UP TO 70% OFF</h2>
                    <h2>USE CODE: <span>BACKCOURT</span></h2>
                </div>
            </div>
        </div>
    )
}


