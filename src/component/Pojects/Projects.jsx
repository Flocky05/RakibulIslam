import Carousel from "./Carousel"

const slides = [
    "./1.jpg",
    "./2.jpg",
    "./3.jpg",
    "./4.jpg",
  ]

const Projects = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
      <div className="max-w-lg">
        <Carousel autoSlide={true} >
          {[...slides.map((s) => (
            <img src={s} />
          )), <video src={vid} autoPlay muted loop />]}
        </Carousel>

      </div>
    </div>
    );
};

export default Projects;