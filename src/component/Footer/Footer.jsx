
import facebook from "../../assets/contact/facebook-50.png"
import linkedin from "../../assets/contact/linkedin-50.png"
import whatsapp from "../../assets/contact/whatsapp-48.png"
import telegram from "../../assets/contact/telegram.png"
import discord from "../../assets/contact/discord-32.png"
import instagram from "../../assets/contact/instagram-48.png"
import github from "../../assets/contact/github-32.png"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className="p-20">
            <hr className="p-2"/>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-gray-400 hover:text-white">Rakibul Islam</h2>
                <div>
                    <h2 className="text-lg font-bold text-gray-400 hover:text-white" > © Donot Copy this</h2>
                </div>
            </div>
            <div className="flex gap-6 items-center justify-center p-4 ">
                        <Link to="https://www.facebook.com/rakibulislam2527" target="_blank"><img className="invert hover:shadow-xl shadow-white w-9" src={facebook} alt="" /></Link>
                        <Link to="https://www.linkedin.com/in/rakibulislam2527/" target="_blank"><img className="invert hover:shadow-xl shadow-gray-400 w-9" src={linkedin} alt="" /></Link>
                        <Link to="/"><img className="invert hover:shadow-lg shadow-gray-400 w-9" src={whatsapp} alt="" /></Link>
                        <Link to="/"><img className="invert hover:shadow-lg shadow-gray-400 w-9" src={telegram} alt="" /></Link>
                        <Link to="https://www.instagram.com/rakibul_01islam/" target="_blank"><img className="invert hover:shadow-lg shadow-gray-400 w-9" src={instagram} alt="" /></Link>
                        <Link to="" target="_blank"><img className="invert hover:shadow-lg shadow-gray-400 w-9" src={discord} alt="" /></Link>
                        <Link to="https://github.com/Flocky05" target="_blank"><img className="invert hover:shadow-xl shadow-gray-400 w-9" src={github} alt="" /></Link>
            </div>
            <img src="" alt="" />
        </div>
    );
};

export default Footer;