import React from 'react';
import ComicPage from './ComicPage';
import Pager from './Pager';

class ComicBook extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        // load
    }

    render(){
        return (
            <div>
                <ComicPage />
                <Pager />
            </div>
        );
    }

}

export default ComicBook;