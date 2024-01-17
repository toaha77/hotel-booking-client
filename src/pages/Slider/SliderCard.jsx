import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
    
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className="">
        <div className=" p-4">
   <Slider {...settings}>
            {
                data.map(image => (
                    <div key={image._id} className="flex items-center justify-center">
                        <img src={image.img} alt="" className="h-44 lg:h-96 w-96" />
                        </div>
                ))
            }
      </Slider>
        </div>
    </div>
  );
};


const data =[
    {
        img: '/public/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg'
    },
    {
        img: '/kelsey-curtis--27u_GzlAFw-unsplash.jpg'
    },
    {
        img: '/pexels-asman-chema-594077.jpg'
    },
    {
        img: '/pexels-donald-tong-189296.jpg'
    },
    {
        img: '/pexels-pixabay-258154.jpg'
    },
    {
        img: '/saad-khan-425b2PhNuHA-unsplash.jpg'
    },
    {
        img: '/sasha-kaunas-TAgGZWz6Qg8-unsplash.jpg'
    },
]

export default SliderCard;
