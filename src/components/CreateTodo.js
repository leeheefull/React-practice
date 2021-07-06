import {Component} from "react";

class CreateTodo extends Component {

    createTodo(e) {
        e.preventDefault();
        this.props.onSubmit(
            e.target.title.value,
            e.target.desc.value
        )
    }

    render() {
        return (
            <div>
                <h2>Create</h2>
                <form action="/create_process"
                      method="post"
                      onSubmit={this.createTodo.bind(this)}
                >
                    <p><input type="text"
                              name="title"
                              placeholder="할 일"
                    /></p>
                    <p><textarea name="desc"
                                 placeholder="세부 내용"
                    /></p>
                    <p><input type="submit"/></p>
                </form>
                <hr/>
            </div>
        );
    }
}

export default CreateTodo;