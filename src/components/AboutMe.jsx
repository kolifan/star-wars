import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const AboutMe = () => {
    const [openingAboutMe , setAboutMe] = useState();

    useEffect(() => {
        const episode = 1;
        fetch(`${base_url}/v1/peoples/${episode}`)
            .then(res => res.json())
            .then(data => setAboutMe({
                name: data.name,
                gender: data.gender,
                skin: data.skin_color,
                hair: data.hair_color,
                height: data.height,
                eye: data.eye_color,
                mass: data.mass,
                birth: data.birth_year,
            }))
            .catch(() => setAboutMe('Error loading'));
    }, [])

    if (openingAboutMe) {
        return (
            <ul className="far-galaxy">
                <li>Fullname: {openingAboutMe.name}</li>
                <li>Gender: {openingAboutMe.gender}</li>
                <li>Birth Year: {openingAboutMe.birth}</li>
                <li>Skin color: {openingAboutMe.skin}</li>
                <li>Hair color: {openingAboutMe.hair}</li>
                <li>Eye color: {openingAboutMe.eye}</li>
                <li>Height: {openingAboutMe.height} cm</li>
                <li>Mass: {openingAboutMe.mass} kg</li>
            </ul>
        )
    } else {
        return (
            <p className="far-galaxy">
                <span className={'spinner-border-sm spinner-border'}></span>
                <span className={'spinner-grow spinner-grow-sm'}>Loading...</span>
            </p>
        )
    }
}

export default AboutMe