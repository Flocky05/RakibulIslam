
import facebook from "../../assets/contact/facebook-50.png"
import linkedin from "../../assets/contact/linkedin-50.png"
import whatsapp from "../../assets/contact/whatsapp-48.png"
import telegram from "../../assets/contact/telegram.png"
import discord from "../../assets/contact/discord-32.png"
import instagram from "../../assets/contact/instagram-48.png"
import github from "../../assets/contact/github-32.png"
import { Link } from "react-router-dom"
const Contract = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center p-2 lg:p-4 uppercase">Let's Contact</h2>
            <h2 className="text-md text-center p-0 lg:p-2 uppercase">Contact or Write Me</h2>
            <div className="p-8 lg:p-12 text-center text-black">
                <div>
                    <div>
                        <input className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg  hover:shadow-gray-400 duration-700 ease-in-out" type="text" placeholder="Name"/>
                        <input className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg  hover:shadow-gray-400 duration-700 ease-in-out" type="email" placeholder="Email"/>
                    </div>
                    <input className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg hover:shadow-gray-400 duration-700 ease-in-out" type="text" placeholder="subject" />
                    <textarea className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg hover:shadow-gray-400 duration-700 ease-in-out" name="message" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    <br />
                    <button className="bg-gray-500 text-white w-3/5 hover:shadow-lg hover:shadow-gray-400 duration-700 ease-in-out">send</button>
                    <div className="flex gap-6 items-center justify-center p-4 ">
                        <Link to="/"><img className="invert hover:shadow-lg shadow-gray-400 w-9" src={facebook} alt="" /></Link>
                        <Link to="/"><img className="invert hover:shadow-lg shadow-gray-400 w-9" src={linkedin} alt="" /></Link>
                        <Link to="/"><img className="invert hover:shadow-lg shadow-gray-400 w-9" src={whatsapp} alt="" /></Link>
                        <Link to="/"><img className="invert hover:shadow-lg shadow-gray-400 w-9" src={telegram} alt="" /></Link>
                        <Link to="/"><img className="invert hover:shadow-lg shadow-gray-400 w-9" src={instagram} alt="" /></Link>
                        <Link to="/"><img className="invert hover:shadow-lg shadow-gray-400 w-9" src={discord} alt="" /></Link>
                        <Link to="/"><img className="invert hover:shadow-xl shadow-gray-400 w-9" src={github} alt="" /></Link>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Contract;