import React from "react";
import { ClipLoader, BarLoader } from 'react-spinners'
import './spinner.css'

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomfact(): string {
    const facts: string[] = [
        "Anime was originated in Japan in the early 20th century",
        "Many anime series are adaptations of manga(Japanese comic books)",
        "The term `otaku` refers to avid anime and manga fans",
        "The creators of manga are called mangaka, responsible for the story, artwork, and character designs",
        "Manga is often categorized by target demographics",
        "The first comic was written by Will Einser in 1978",
    ]
    let randint: number = getRandomInt(0, facts.length - 1);
    return facts[randint];
}

export function Spinner() {
    const quote: string = getRandomfact();
    return (
        <div className="loader-wrapper">
            <div className="loader">
                <BarLoader color="#000"/>
            </div>
            <div className="facts-div">
                <p className="facts-text">"{quote}"</p>
            </div>
        </div>
    )
}