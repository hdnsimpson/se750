import React from 'react';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: this.props.items ? props.items.map((item) => ({ item, complete: false })) : []
        };
    }

    render() {
        return (
            this.props.items ? this.populatedList() : this.emptyList()
        );
    }

    toggleComplete(index) {
        this.setState((state) => {
            const items = state.items;
            items[index].complete = !items[index].complete;

            return { items };
        });
    }

    emptyList() {
        return <p>There are no to-do items!</p>
    }

    populatedList() {
        const styleComplete = {
            color: 'green'
        };

        const styleIncomplete = {
            color: 'red'
        }

        return (
            <ul>
                {this.props.items.map((item, index) => <li key={index} onClick={() => this.toggleComplete()} style={this.state.items[index].complete ? styleComplete : styleIncomplete}>{item}</li>)}
            </ul>
        );
    }
}

export default ToDoList;
