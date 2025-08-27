import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    state = {
        count: 1,
        imageUrl:'https://picsum.photos/200',
        tags: ['tag1','tag2','tag3']

    };
    
    styles = {
        fontSize: 30,
        fontWight: "bold"
    }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    renderTags() {
        if(this.state.tags.length === 0) return <p>Thre are no tags!</p>;
        return  <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
    }

    handleIncrement = product => {
        
        this.setState({ count :  this.state.count + 1})
    }
    
    render() {
        
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick = {()=> this.handleIncrement({id: 1})} className = "btn btn-secondary btn-sm">Increment</button>
                {this.state.tags.length === 0 && "Please create a new Tag!"}
               {this.renderTags()}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state //#object destructure
        return count === 0 ? "Zero" : count;
    }
}
export default Counter;