import React from 'react';
import './style.css';
import SearchBar from "../../components/SearchBar/SearchBar";
import back_arrow from '../../assets/back_arrow.png';
import {Link} from "react-router-dom";
import star from '../../assets/star.png';
import heart_white from '../../assets/heart_white.png';
import heart_red from '../../assets/heart_red.png';


export default class RecipeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWhiteHeart: true,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    ToggleFav = () => {
        this.setState({showWhiteHeart: !this.state.showWhiteHeart});
    };


    render() {
        return (
            <div className="RecipeDetail">
                {/*<SearchBar recipeList={this.props.location.data ? this.props.location.data.recipeList : []}/>*/}
                <Link to={{
                    pathname: `/recipe`
                }}
                      style={{textDecoration: 'none'}}>
                    <div className="RecipeDetailBack">
                        <img src={back_arrow}/> Go Back
                    </div>
                </Link>

                <div className="RecipeDetailContainer">
                    <div className="RecipeDetailContainerLeft">
                        <div className="RecipeDetailContainerLeftImage" style={{
                            backgroundImage: `url(${this.props.location.data && this.props.location.data.recipe ? this.props.location.data.recipe.image : null})`
                        }}>
                            <div className="RecipeDetailContainerLeftImageBlack"/>
                        </div>
                        <div className="RecipeDetailContainerLeftIngredientsHeader">
                            Ingredients :
                        </div>
                        <div className="RecipeDetailContainerLeftIngredientsDescription">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of
                            letters, as opposed to using 'Content here, content here', making it look like readable
                            English.
                        </div>
                        <div className="RecipeDetailContainerLeftIngredientsHeader">
                            How to Prepare :
                        </div>
                        <div className="RecipeDetailContainerLeftIngredientsDescription">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page
                            when looking at its layout.
                            <br/> <br/>
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it look like readable
                            English.
                            <br/> <br/>
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it look like readable
                            English.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                        </div>
                    </div>
                    <div className="RecipeDetailContainerRight">
                        <div className="RecipeDetailContainerRightName">
                            {this.props.location.data && this.props.location.data.recipe ? this.props.location.data.recipe.name : 'Recipe'}
                        </div>
                        <div className="RecipeDetailContainerRightRating">
                            <span className="Rating">4/5</span>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                        </div>
                        <div className="RecipeDetailContainerRightDescriptionHeader">
                            Description
                        </div>
                        <div className="RecipeDetailContainerRightDescriptionDescription">
                            There are many variations of passages of Lorem Ipsum, but the majority have suffered
                            alteration
                            in some form, by injected humour, or randomised words which don't look even slightly
                            believable.
                            If you are going to use a passage
                        </div>
                        <div className="RecipeDetailContainerRightList">
                            <div className="RecipeDetailContainerRightListItem">
                                <div className="RecipeDetailContainerRightListItemNumber">
                                    8
                                </div>
                                <div className="RecipeDetailContainerRightListItemText">
                                    Ingredients
                                </div>
                            </div>
                            <div className="RecipeDetailContainerRightListItem">
                                <div className="RecipeDetailContainerRightListItemNumber">
                                    170
                                </div>
                                <div className="RecipeDetailContainerRightListItemText">
                                    Bucks
                                </div>
                            </div>
                            <div className="RecipeDetailContainerRightListItem">
                                <div className="RecipeDetailContainerRightListItemNumber">
                                    34
                                </div>
                                <div className="RecipeDetailContainerRightListItemText">
                                    Minutes
                                </div>
                            </div>
                        </div>
                        <div className="RecipeDetailContainerRightFav" onClick={this.ToggleFav}>
                            Favourite the recipe
                            {
                                this.state.showWhiteHeart ?
                                    <img src={heart_white}/>
                                    : <img src={heart_red}/>
                            }
                        </div>
                        <br/>
                        <hr/>
                        <div className="CommentHeader">
                            Add Comments
                        </div>

                        <div className="commentBox">
                            <textarea rows="4" placeholder="Type something here ..."/>
                        </div>

                        <div className="AddComment">
                            Add Comment
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
