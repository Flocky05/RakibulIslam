
import img from "../../assets/images/home.jpeg"
const Home = () => {
    const newTab=url=>{
        window.open(url);
    }
    return (
        <div className="flex justify-around items-center pt-15">
            <div className="p-10 flex flex-col items-center w-2/4">
                <h2 className="text-2xl font-bold">Hi,This Rakibul Islam</h2>
                <p className="my-2">I’m a Web Developer and has been learning web developing more than 1 year now. I am studying B.Sc in Computer Science and Engineering in Faridpur Engineering College.</p>
                <p className="my-5">With the ability to learn new things and adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines. Eager to obtain a challenging position at a prestigious company. I’m very much interested in new technologies and problem solving.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg border-white" onClick={()=>newTab('https://drive.google.com/file/d/1GXtvXuihnkRckEdls9hxbQnFCLkQKQT8/view')}>
                    Resume
                </button>
            </div>
            <div className="w-2/4 flex flex-col items-center ">
                <img className="w-2/4 h-[370px] rounded-full border-2" src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;