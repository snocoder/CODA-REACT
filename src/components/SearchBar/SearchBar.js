import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeList: [],
            searchText: '',
            filteredList: [],
        }
    }

    componentDidMount() {
        this.setState({
            recipeList: this.props.recipeList ? this.props.recipeList : [],
        });
        console.log("data ", this.props.recipeList);
    }

    searchListener = (e) => {
        this.setState({
            searchText: e.target.value.toLowerCase()
        }, () => {
            this.filterItem();
        });
        console.log("searchText ", e.target.value);
    };

    filterItem = () => {
        let data = [];
        for (let i = 0; i < this.state.recipeList.length; i++) {
            let name = this.state.recipeList[i].name.toLowerCase();
            if (name.includes(this.state.searchText)) {
                data.push(this.state.recipeList[i])
            }
            if (data.length > 6) {
                break;
            }
        }
        this.setState({
            filteredList: data
        })
    };

    render() {
        return (
            <div className="SearchBar">
                <div>
                    <input type="text" onChange={this.searchListener}/>
                </div>
                {
                    this.state.filteredList.length > 0 ?
                        <div className="filteredList">
                            {
                                this.state.filteredList.map((recipe, index) => (
                                    <Link to={{
                                        pathname: `recipe/${recipe.id}`,
                                        data: {
                                            recipe: recipe,
                                        }
                                    }}
                                          style={{textDecoration: 'none'}}>
                                        <div className="filteredListItem">
                                            {recipe.name}
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        : null
                }
            </div>
        )
    }
}
