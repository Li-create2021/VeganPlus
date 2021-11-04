import React from 'react';
import SuggestionCards from './SuggestionCards';
import "./SuggestionCardStyle.css";
import { nanoid } from 'nanoid';

const SuggestionSection = ({ recipeData }) => {
    console.log(recipeData)


    return (
        <div className="suggestion-section">
            <h2 className="suggestion-header">Recipe Suggestions</h2>
            <section className="suggestion-selection">
                {recipeData.map((recipe) => {
                return <SuggestionCards key={nanoid()} {...recipe}/>
                })}
            </section>
        </div>
    )
}

export default SuggestionSection;