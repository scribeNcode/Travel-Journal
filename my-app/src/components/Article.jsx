import Marker from "../assets/Icons/Marker.svg";

function Article(prop) {
  return (
    <article className="w-[80%] flex flex-col md:flex-row justify-center items-center gap-4rem border-b border-gray-200 pb-10 last:border-b-0 first:m-12">
      <div
        className="w-[100%] h-[12rem] bg-cover bg-center rounded-sm"
        style={{ backgroundImage: `url(${prop.img?.src})` }}
      ></div>
      <div className="">
        <div className="flex gap-3 pt-3  justify-center items-center ">
          <div className=" flex justify-center items-center gap-3 ">
            <div className=" flex justify-center items-center gap-1">
              <svg
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z"
                  fill="#F55A5A"
                />
              </svg>
              <p className="  text-[0.6rem] font-light flex justify-center items-center">
                {prop.country}
              </p>
            </div>

            <a
              className=" underline font-league flex justify-center items-center font-light text-[0.6rem] text-text"
              href={prop.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </div>
        <h2 className="font-[700] text-[1.2rem] text-center mt-0 pb-4">
          {prop.title}
        </h2>
        <time className=" block text-center font-bold font-medium text-[0.8rem] mb-1.5">
          {prop.dates}
        </time>
        <p className="text-center text-[0.8rem] font-light">{prop.text}</p>
      </div>
    </article>
  );
}

export default Article;
