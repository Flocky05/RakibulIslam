
import img from "../../assets/images/home.jpeg"
import About from "../About/About";
import Contract from "../Contract/Contract";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";
const Home = () => {
    const newTab=url=>{
        window.open(url);
    }
    return (
        <div className="bg-blue-950">
                <div className="lg:flex grid grid-cols-1 justify-around items-center pt-15 h-screen">
                <div className="p-10 justify-items-center text-center lg:text-start lg:w-2/4">
                    <h2 className="text-2xl font-bold">Hi,This Rakibul Islam</h2>
                    <p className="my-2">I’m a Web Developer and has been learning web developing more than 1 year now. I am completed B.Sc in Computer Science and Engineering at Faridpur Engineering College.</p>
                    <p className="my-5">With the ability to learn new things and adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines. Eager to obtain a challenging position at a prestigious company. I’m very much interested in new technologies and problem solving.</p>
                    <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:shadow-lg shadow-blue-500/40 hover:shadow-gray-400 duration-700 ease-in-out" onClick={()=>newTab('https://drive.google.com/file/d/1GXtvXuihnkRckEdls9hxbQnFCLkQKQT8/view')}>
                        Resume
                    </button>
                </div>
                <div className="lg:w-2/4 flex flex-col items-center ">
                    <img className="w-2/4 h-[370px] rounded-full border-4 border-gray-400 hover:shadow-xl shadow-blue-500/40 hover:shadow-gray-400 duration-700 ease-in-out" src={img} alt="" />
                </div>
            </div>
            <div className="bg-blue-950">
                <Profile></Profile>
                <Skills></Skills>
                <About></About>
                <Contract></Contract>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;