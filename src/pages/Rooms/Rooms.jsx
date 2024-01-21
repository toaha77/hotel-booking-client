import RoomsCard from "./RoomsCard";

 
const Rooms = () => {
    return (
        <div>
            <div className="hero h-[50vh]" style={{backgroundImage: 'url(http://www.oceanparadisehotel.com/storage/homes/room_banner_image_room_banner_image1572267070.jpg)'}}>
 
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold salsa">Rooms</h1>
     
    </div>
  </div>
</div>

<RoomsCard></RoomsCard>
        </div>
    );
};

export default Rooms;