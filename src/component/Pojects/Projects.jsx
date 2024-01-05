import img1 from "../../assets/projects/gpt3/bike-down.png"
import img2 from "../../assets/projects/gpt3/coocky.png"
import img3 from "../../assets/projects/gpt3/e-commerce-movie.png"
import img4 from "../../assets/projects/gpt3/ganimy.png"

const Projects = () => {
    return (
        <div className="grid grid-cols-3 gap-20 m-10">
            
            <div className="p-4 border border-blue-400 rounded-lg bg-blue-100">
                <img className="h-full" src={img1} alt="" />
                <div className=" flex justify-between">
                    <p className="border border-red-200 px-2 bg-green-400">Github</p>
                    <p>Code</p>
                </div>
            </div>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
    );
};

export default Projects;