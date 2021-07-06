import {Component} from "react";

class Todo extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.data !== nextProps.data;
    }

    selectTodo(e) {
        e.preventDefault();
        this.props.onChangePage(e.target.dataset.id);
    }

    render() {
        let lists = [];
        const data = this.props.data;
        for (let i = 0; i < data.length; i++) {
            lists.push(
                <li key={data[i].id}>
                    <a href={"/todoList/" + data[i].id}
                       data-id={data[i].id}
                       onClick={this.selectTodo.bind(this)}
                    >
                        {data[i].title}
                    </a>
                </li>
            );
        }

        return (
            <nav>
                <ul>{lists}</ul>
                <hr/>
            </nav>
        );
    }
}

export default Todo;