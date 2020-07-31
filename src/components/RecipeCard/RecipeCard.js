import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

import heart_white from '../../assets/heart_white.png';


export default class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="RecipeCard">
                <Link to={{
                    pathname: `recipe/${this.props.recipe ? this.props.recipe.id : null}`,
                    data: {
                        recipe: this.props.recipe ? this.props.recipe : null,
                        recipeList: this.props.recipeList ? this.props.recipeList : []
                    }
                }}
                      style={{textDecoration: 'none'}}>
                    <div className="RecipeCardImage" style={{
                        backgroundImage: `url(${this.props.recipe ? this.props.recipe.image : null})`,
                    }}>
                        <div className="RecipeCardImageBlack">
                            <div className="RecipeCardImageText">
                                {this.props.recipe ? this.props.recipe.category : null}
                            </div>
                        </div>
                    </div>
                    <div className="RecipeCardDescription">
                        <div className="RecipeCardDescriptionHeader">
                            <div className="RecipeCardDescriptionName">
                                {this.props.recipe ? this.props.recipe.name : null}
                            </div>
                            <div className="RecipeCardDescriptionLike">
                                <img src={heart_white} alt="like"/>
                            </div>
                        </div>

                        <div className="RecipeCardDescriptionPrice">
                            &#36; {this.props.recipe ? this.props.recipe.price : null}
                        </div>

                        <div className="RecipeCardDescriptionDescription">
                            {this.props.recipe ? this.props.recipe.description : null}
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
