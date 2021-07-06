import './App.css';
import Subject from "./components/Subject"
import Todo from "./components/Todo"
import ReadTodo from "./components/ReadTodo"
import CreateTodo from "./components/CreateTodo"
import UpdateTodo from "./components/UpdateTodo"
import Control from "./components/Control"
import {Component} from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.todoListSize = 3;
    this.state = {
      mode: 'welcome',
      selectedTodoListId: 1,
      subject: {title: '오늘의 할 일', sub: '할 일 체크리스트!'},
      welcome: {title: '할 일', desc: '세부 내용'},
      todoList: [
        {id: 1, title: '운동하기', desc: '팔굽혀펴기, 스쿼트, 턱걸이'},
        {id: 2, title: '공부하기', desc: '리액트 복습'},
        {id: 3, title: '수업듣기', desc: '구글미트 화상회의 참여'}
      ]
    }
  }

  getReadTodo() {
    let _todo, _title, _desc, _readTodo = null;
    switch (this.state.mode) {
      case 'welcome':
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _readTodo = <ReadTodo title={_title} desc={_desc}/>;
        break;
      case 'read':
        _todo = this.getTodo();
        _readTodo = <ReadTodo title={_todo.title} desc={_todo.desc}/>;
        break;
      case 'create':
        _readTodo = <CreateTodo onSubmit={this.createTodo.bind(this)}/>;
        break;
      case 'update':
        _todo = this.getTodo();
        _readTodo = <UpdateTodo data={_todo} onSubmit={this.updateTodo.bind(this)}/>
        break;
    }
    return _readTodo;
  }

  createTodo(_title, _desc) {
    const newTodoList = Array.from(this.state.todoList);
    newTodoList.push({
      id: ++this.todoListSize,
      title: _title,
      desc: _desc
    });
    this.setState({
      todoList: newTodoList,
      mode: 'read',
      selectedTodoListId: this.todoListSize
    });
  }

  updateTodo(_id, _title, _desc) {
    const _todoList = Array.from(this.state.todoList);
    for (let i = 0; i < _todoList.length; i++) {
      if (_todoList[i].id === _id) {
        _todoList[i] = {id: _id, title: _title, desc: _desc};
        break;
      }
    }
    this.setState({
      todoList: _todoList,
      mode: 'read'
    });
  }

  deleteTodo(_mode) {
    if (_mode === 'delete' && window.confirm('delete?')) {
      let _todoList = Array.from(this.state.todoList);
      for (let i = 0; i < this.state.todoList.length; i++) {
        if (_todoList[i].id === this.state.selectedTodoListId) {
          _todoList.splice(i, 1);
          break;
        }
      }
      this.setState({
        mode: 'welcome',
        todoList: _todoList
      })
    } else {
      this.setState({mode: _mode});
    }
  }

  getTodo() {
    for (let i = 0; i < this.state.todoList.length; i++) {
      const todo = this.state.todoList[i];
      if (todo.id === this.state.selectedTodoListId) {
        return todo;
      }
    }
  }

  getTodoId(id) {
    this.setState({
      mode: 'read',
      selectedTodoListId: Number(id)
    });
  }

  getWelcome() {
    this.setState({mode: 'welcome'});
  }

  render() {
    return (
        <div className="App">
          <Subject title={this.state.subject.title}
                   sub={this.state.subject.sub}
                   onChangePage={this.getWelcome.bind(this)}
          />
          {this.getReadTodo()}
          <Todo data={this.state.todoList}
                onChangePage={this.getTodoId.bind(this)}
          />
          <Control onChangeMode={this.deleteTodo.bind(this)}/>
        </div>
    );
  }
}

export default App;
