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
        <div className="grid grid-cols-3 p-20 gap-10 justify-items-center">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={bootstrap} alt="" />
            <img src={tailwindcss} alt="" />
            <img src={javascript} alt="" />
            <img src={react} alt="" />
            <img src={mongodb} alt="" />
            <img src={firebase} alt="" />
            <img src={typescript} alt="" />
        </div>
    );
};

export default Skills;