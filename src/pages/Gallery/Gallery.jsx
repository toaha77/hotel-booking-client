 
const Gallery = () => {
    return (
        <div>
            <h2 className="salsa text-4xl text-center my-20 ">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.map(image =>(
                        <div key={image._id}>
                           <img src={image.img} className="w-96 h-80" alt="" />
                           <p className="text-xl">{image.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const data =[
   {
    img : 'oswald-elsaboath-ym_EI-DTS1g-unsplash.jpg',
    title: 'Reception'
   },
   {
    img: '/restau.jpg',
    title: 'Restaurants'
   },
   {
    img: '/accomb.jpg',
    title: 'Accommodation'
   },
   {
    img: '/hall.jpg',
    title: 'Meetings & Events'
   },
   {
    img: '/gym.jpg',
    title: 'Life Style Gym'
   },
   {
    img: '/pool.jpg',
    title: 'The Infinity Pool'
   },
   {
    img: '/pool.webp',
    title: "Polo Games"
   },
   {
    img: '/pexels-jess-loiterton-5007356.jpg',
    title: 'The Beach'

   },
   {
    img: '/spa.webp',
    title: "Tararom SPA"
   }

]

export default Gallery;