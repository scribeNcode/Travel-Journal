import Marker from "../assets/Icons/Marker.svg"

function Article(prop) {

  return (
    <article className="w-[80%] flex flex-col justify-center items-center gap-4rem">
      <div
        className="w-[100%] h-[12rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${prop.img?.src})` }}
      ></div>

      <div className="">
        <div className="flex gap-3 p-2 justify-center items-center">
          <span className="flex justify-center items-center gap-1">
            <img src={Marker} alt="location marker icon" />
            <p>{prop.country}</p>
          </span>
          <a className="font-league ]" href={prop.googleMapsLink}>View on Google Maps</a>
        </div>
        <h2 className="font-[900] text-center text-lg">{prop.title}</h2>
        <time className=" block text-center">{prop.dates}</time>
        <p className="text-center">{prop.text}</p>
      </div>
    </article>
  );
}

export default Article

