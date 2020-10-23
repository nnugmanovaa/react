import React, { ReactElement } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { recipeList, RecipeModel } from '../../models/Recipe';
import './details.css'

interface Props {
    curRecipeList?: RecipeModel[];
}

export default function RecipeDetails({}: Props): ReactElement {
    const match = useRouteMatch<{ id: string }>();
    const item = (recipeList.find(recipe => recipe.id.toString() === match.params.id) || recipeList[0]) ;

    return (
            <div>
                <div className="itemHeader">
                    <h1 className="itemTitle">{item.name}</h1>
                    <h6 className="itemInfo">
                        <span className="aftHeader">by: {item.author}</span> | 
                        <span className="aftHeader">{item.date} </span>|
                        <span className="aftHeader">&#8902;&#8902;&#8902;{item.review_count}</span> Reviews
                    </h6>
                </div>
                <div className="split">
                    <div id="left">
                        <img src={item.image} alt=""/>
                    </div>
                    <div id="right">
                       <div className="inner">
                    
                            <div className="innerText">
                                <div className="servTitle">Prep time</div> {item.prep_time}
                            </div>
                            <div className="innerText">
                                <div className="servTitle">Cook time</div>{item.cook_time}
                            </div>
                            <div className="innerText">
                                <div className="servTitle">Serves</div>{item.serves}
                            </div>
                            
                       </div>
                       <div className="notesText">
                            {item.notes}
                       </div>
                    </div>
                 </div>
            </div>
            
        );
}
