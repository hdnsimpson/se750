import React from 'react';
import styles from './todolist.module.css';

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
        return <p className={styles.todolist}>There are no to-do items!</p>
    }

    populatedList() {
        const styleComplete = {
            textDecoration: 'line-through'
        };

        return (
            <ul className={styles.todolist}>
                {this.props.items.map((item, index) => <li key={index} onClick={() => this.toggleComplete(index)} style={this.state.items[index].complete ? styleComplete : null}>{item}</li>)}
            </ul>
        );
    }
}

export default ToDoList;
