import { Carousel } from "@material-tailwind/react";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto mt-6 mb-6">
      <Carousel
        autoplay={true}
        loop={true}
        className="rounded-xl shadow-lg"
        transition={{ duration: 1 }}
      >
        <img
          src="https://img.freepik.com/free-vector/gradient-shopping-center-social-media-cover-template_23-2149328603.jpg?w=1380"
          alt="Shopping Center"
          className="h-[500px] w-full object-cover"
        />
        <img
          src="https://img.freepik.com/free-vector/flat-black-friday-social-media-cover-template_23-2149108898.jpg?w=1380"
          alt="Black Friday"
          className="h-[500px] w-full object-cover"
        />
        <img
          src="https://img.freepik.com/free-vector/flat-shopping-center-social-media-cover-template_23-2149320512.jpg?w=996"
          alt="Flat Shopping Center"
          className="h-[500px] w-full object-cover"
        />
        <img
          src="https://img.freepik.com/free-vector/flat-cyber-monday-social-media-cover-template_23-2149112472.jpg?w=1380"
          alt="Cyber Monday"
          className="h-[500px] w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
