import React from 'react';

class Pager extends React.Component
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
                <a>&lt;&lt;</a>
                <a>&lt;</a>
                <a>&gt;</a>
                <a>&gt;&gt;</a>
            </div>
        );
    }

}

export default Pager;