import html from "../../assets/images/html-48.png"
import css from "../../assets/images/css-48.png"
import bootstrap from "../../assets/images/bootstrap-64.png"
import tailwindcss from "../../assets/images/tailwindcss.png"
import javascript from "../../assets/images/javascript-48.png"
import react from "../../assets/images/react-native-48.png"
import mongodb from "../../assets/images/mongodb-48.png"
import firebase from "../../assets/images/firebase-48.png"
import typescript from "../../assets/images/typescript-48.png"
import python from "../../assets/images/python-48.png"
import next from "../../assets/images/nextjs-48.png"
import angular from "../../assets/images/angular-48.png"

const Skills = () => {
    return (
        <div>
            <div>
                <h2 className="text-4xl text-center p-4 font-bold">Skills Section</h2>
            </div>
            <div className="grid grid-cols-3 p-20 gap-x-5 gap-y-5 justify-items-center">
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-orange-500 duration-700 ease-in-out" src={html} alt="" />
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-blue-500 duration-700 ease-in-out" src={css} alt="" />
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-indigo-500 duration-700 ease-in-out" src={bootstrap} alt="" />
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-blue-400 duration-700 ease-in-out" src={tailwindcss} alt="" />
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-yellow-500 duration-700 ease-in-out" src={javascript} alt="" />
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-indigo-400 duration-700 ease-in-out" src={react} alt="" />
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-green-500 duration-700 ease-in-out" src={mongodb} alt="" />
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-orange-400 duration-700 ease-in-out" src={firebase} alt="" />
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-blue-500 duration-700 ease-in-out" src={typescript} alt="" />
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-blue-600 duration-700 ease-in-out" src={python} alt="" />
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-white duration-700 ease-in-out" src={next} alt="" />
            <img className="opacity-70 hover:opacity-100 hover:shadow-xl shadow-blue-500/40 hover:shadow-red-500 duration-700 ease-in-out" src={angular} alt="" />
        </div>
        </div>
    );
};

export default Skills;