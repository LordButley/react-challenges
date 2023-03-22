import React from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from './Loader.js';

class Content extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isLoaded : false,
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoaded : true,
            })            
            
        }, 2000)
    }

    render (){
        return(
            <div className={css.Content}>
=                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>

                    {this.state.isLoaded === false ? 
                    <Loader/>
                    :
                    (savedPosts.map(
                        (post) => <PostItem post={post} key={post.title} />
                        )
                    )}
                    
                </div>
            </div>
        )
    }
}

export default Content;