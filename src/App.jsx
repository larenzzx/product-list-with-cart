import Header from "./Header";
import Card from "./Card";

import waffleMobile from './assets/images/image-waffle-mobile.jpg';
import waffleTablet from './assets/images/image-waffle-tablet.jpg';
import waffleDesktop from './assets/images/image-waffle-desktop.jpg';
import cremeMobile from './assets/images/image-creme-brulee-mobile.jpg';
import cremeTablet from './assets/images/image-creme-brulee-tablet.jpg';
import cremeDesktop from './assets/images/image-creme-brulee-desktop.jpg';
import macaronMobile from './assets/images/image-macaron-mobile.jpg';
import macaronTablet from './assets/images/image-macaron-tablet.jpg';
import macaronDesktop from './assets/images/image-macaron-desktop.jpg';
import tiramisuMobile from './assets/images/image-tiramisu-mobile.jpg';
import tiramisuTablet from './assets/images/image-tiramisu-tablet.jpg';
import tiramisuDesktop from './assets/images/image-tiramisu-desktop.jpg';
import baklavaMobile from './assets/images/image-baklava-mobile.jpg';
import baklavaTablet from './assets/images/image-baklava-tablet.jpg';
import baklavaDesktop from './assets/images/image-baklava-desktop.jpg';
import pieMobile from './assets/images/image-meringue-mobile.jpg';
import pieTablet from './assets/images/image-meringue-tablet.jpg';
import pieDesktop from './assets/images/image-meringue-desktop.jpg';
import cakeMobile from './assets/images/image-cake-mobile.jpg';
import cakeTablet from './assets/images/image-cake-tablet.jpg';
import cakeDesktop from './assets/images/image-cake-desktop.jpg';
import brownieMobile from './assets/images/image-brownie-mobile.jpg';
import brownieTablet from './assets/images/image-brownie-tablet.jpg';
import brownieDesktop from './assets/images/image-brownie-desktop.jpg';
import pannaMobile from './assets/images/image-panna-cotta-mobile.jpg';
import pannaTablet from './assets/images/image-panna-cotta-tablet.jpg';
import pannaDesktop from './assets/images/image-panna-cotta-desktop.jpg';

import CartInfo from './CartInfo';


function App() {

  return (
    <>
      <Header />

      <Card imageMobile={waffleMobile}
        imageTablet={waffleTablet}
        imageDesktop={waffleDesktop}
        food="Waffle"
        description="Waffle with Berries"
        price="$6.50"
      />

      <Card imageMobile={cremeMobile}
        imageTablet={cremeTablet}
        imageDesktop={cremeDesktop}
        food="Creme Brulee"
        description="Vanilla Bean Creme Brulee"
        price="$7"
      />


      <Card imageMobile={macaronMobile}
        imageTablet={macaronTablet}
        imageDesktop={macaronDesktop}
        food="Macaron"
        description="Macaron Mix of Five"
        price="$8.00"
      />

      <Card imageMobile={tiramisuMobile}
        imageTablet={tiramisuTablet}
        imageDesktop={tiramisuDesktop}
        food="Tiramisu"
        description="Classic Tiramisu"
        price="$5.50"
      />

      <Card imageMobile={baklavaMobile}
        imageTablet={baklavaTablet}
        imageDesktop={baklavaDesktop}
        food="Baklava"
        description="Pistachio Baklava"
        price="$4.00"
      />

      <Card imageMobile={pieMobile}
        imageTablet={pieTablet}
        imageDesktop={pieDesktop}
        food="Pie"
        description="Lemon Meringue Pie"
        price="$5.00"
      />

      <Card imageMobile={cakeMobile}
        imageTablet={cakeTablet}
        imageDesktop={cakeDesktop}
        food="Cake"
        description="Red Velvet Cake"
        price="$5.00"
      />

      <Card imageMobile={brownieMobile}
        imageTablet={brownieTablet}
        imageDesktop={brownieDesktop}
        food="Brownie"
        description="Salted Caramel Brownie"
        price="$5.50"
      />

      <Card imageMobile={pannaMobile}
        imageTablet={pannaTablet}
        imageDesktop={pannaDesktop}
        food="Panna Cotta"
        description="Vanilla Panna Cotta"
        price="$6.50"
      />

      <CartInfo />

    </>
  )
}

export default App
