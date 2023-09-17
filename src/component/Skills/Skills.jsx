import html from "../../assets/images/html-48.png"
import css from "../../assets/images/css-48.png"
import bootstrap from "../../assets/images/bootstrap-64.png"
import tailwindcss from "../../assets/images/tailwindcss.png"
import javascript from "../../assets/images/javascript-48.png"
import react from "../../assets/images/react-native-48.png"
import mongodb from "../../assets/images/mongodb-48.png"
import firebase from "../../assets/images/firebase-48.png"
import typescript from "../../assets/images/typescript-48.png"

const Skills = () => {
    return (
        <div className="grid grid-cols-3 p-40 gap-x-5 gap-y-5 justify-items-center">
            <img className="opacity-70 hover:opacity-100" src={html} alt="" />
            <img className="opacity-70 hover:opacity-100" src={css} alt="" />
            <img className="opacity-70 hover:opacity-100" src={bootstrap} alt="" />
            <img className="opacity-70 hover:opacity-100" src={tailwindcss} alt="" />
            <img className="opacity-70 hover:opacity-100" src={javascript} alt="" />
            <img className="opacity-70 hover:opacity-100" src={react} alt="" />
            <img className="opacity-70 hover:opacity-100" src={mongodb} alt="" />
            <img className="opacity-70 hover:opacity-100" src={firebase} alt="" />
            <img className="opacity-70 hover:opacity-100" src={typescript} alt="" />
        </div>
    );
};

export default Skills;