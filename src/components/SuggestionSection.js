import React from 'react';
import SuggestionCards from './SuggestionCards';
import "./SuggestionCardStyle.css";

const SuggestionSection = ({ recipeData }) => {
    console.log(recipeData)


    return (
        <div className="suggestion-section">
            <h2 className="suggestion-header">Recipe Suggestions</h2>
            <section className="suggestion-selection">
                {recipeData.map((recipe, index) => {
                return <SuggestionCards key={index} {...recipe}/>
                })}
            </section>
        </div>
    )
}

export default SuggestionSection;