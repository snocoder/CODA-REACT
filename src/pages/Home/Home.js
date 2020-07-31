import React from 'react';
import './style.css';

import Request from '../../utils/request';
import HomeSkeleton from "../../common/HomeSkeleton";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import SearchBar from "../../components/SearchBar/SearchBar";


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            recipeList: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({
            loading: true
        }, async () => {
            try {
                await Promise.all([
                    this.getRecipeList()
                ]);
            } finally {
                this.setState({
                    loading: false,
                });
            }
        });
    }

    async getRecipeList() {
        let url = 'http://starlord.hackerearth.com/recipe';
        const res = await Request.getApi(url);
        let result = await res.json();
        this.setState({
            recipeList: result
        });
    }


    render() {
        return (
            <div className="HomeContainer">
                {
                    this.state.loading ?
                        <HomeSkeleton/>
                        :
                        <div className="RecipeBody">
                            <SearchBar recipeList={this.state.recipeList}/>
                            <div className="RecipeCategories">
                                Pizza & Noodles
                            </div>
                            {
                                this.state.recipeList.length > 0 ?
                                    <div className="RecipeList">
                                        {
                                            this.state.recipeList.map((recipe, index) => (
                                                <RecipeCard recipe={recipe} recipeList={this.state.recipeList}/>
                                            ))
                                        }
                                    </div>
                                    :
                                    <div className="RecipeListEmpty">
                                        Sorry, The List is Empty
                                    </div>
                            }
                        </div>
                }
            </div>
        )
    }
}
