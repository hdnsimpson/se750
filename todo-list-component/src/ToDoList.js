import React from 'react';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.items ? this.populatedList() : this.emptyList()
        );
    }

    emptyList() {
        return <p>There are no to-do items!</p>
    }

    populatedList() {
        return (
            <ul>
                {this.props.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        );
    }
}

export default ToDoList;