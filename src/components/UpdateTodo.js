import {Component} from "react";

class UpdateTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
    }

    inputForm(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    updateTodo(e) {
        e.preventDefault();
        this.props.onSubmit(
            this.state.id,
            this.state.title,
            this.state.desc
        );
    }

    render() {
        return (
            <div>
                <h2>Update</h2>
                <form action="/update_process"
                      method="post"
                      onSubmit={this.updateTodo.bind(this)}
                >
                    <p>
                        <input type="hidden"
                               name="id"
                               value={this.state.id}
                        />
                    </p>
                    <p>
                        <input type="text"
                               name="title"
                               value={this.state.title}
                               onChange={this.inputForm.bind(this)}
                        />
                    </p>
                    <p>
                        <textarea name="desc"
                                  value={this.state.desc}
                                  onChange={this.inputForm.bind(this)}
                        />
                    </p>
                    <p>
                        <input type="submit"/>
                    </p>
                </form>
                <hr/>
            </div>
        );
    }
}

export default UpdateTodo;