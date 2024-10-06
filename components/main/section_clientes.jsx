import Image from "next/image";
import Carousel from '../carousel/carousel.jsx';

export default function Clientes ({imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven, imgEight, imgNine, imgTen, imgEleven, imgTwelve}){
    return(
        <>
        <div>
        <Carousel 
        imgOne={imgOne}
        imgTwo={imgTwo}
        imgThree={imgThree}
        imgFour={imgFour}
        imgFive={imgFive}
        imgSix={imgSix}
        imgSeven={imgSeven}
        imgEight={imgEight}
        imgNine={imgNine}
        imgTen={imgTen}
        imgEleven={imgEleven}
        imgTwelve={imgTwelve}
        />
        </div>
        </>
    )
}