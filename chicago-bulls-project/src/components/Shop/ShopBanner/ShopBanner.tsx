import shopBg from '../../../assets/shop-bg.png'
import './ShopBanner.css'
import { Link, animateScroll as scroll } from 'react-scroll'



export const ShopBanner = () => {
  return (
    <div className="background">
      <img src={shopBg} />

      <div className="container-shopbg">
        <div className="main-shop">
          <h1 className='text-shop'>BACK TO SCHOOL WITH CHICAGO BULLS!</h1>
          <Link 
          to='shopping'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
            <button className='btn-shop'>SHOP NOW</button>
          </Link>
        </div>
      </div>
    </div>
  )
}


