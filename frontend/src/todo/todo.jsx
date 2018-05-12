import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = "http://localhost:8080/api/todo"
export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.refresh()
    }
    refresh(description = '') {
        const search = description ? `&like=${description}` : ''
        axios.get(`${URL}?sort=-data_criacao${search}`).then(
            resp => this.setState({ ...this.state, description, list: resp.data.data })
        ).catch(
            err => console.log(err)
        )
    }
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { descricao: description, status: 'i' }).then(
            resp => this.refresh()
        ).catch(
            err => console.log(err)
        )
    }
    handleRemove(todo) {
        axios.delete(`${URL}/${todo.id}`).then(
            resp => this.refresh(this.state.description)
        ).catch(
            err => console.log(err)
        )
    }
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo.id}`, { ...todo, status: "true" })
            .then(resp => this.refresh(this.state.description))
            .catch(err => console.log(err))
    }
    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo.id}`, { ...todo, status: "false" })
            .then(resp => this.refresh(this.state.description))
            .catch(err => console.log(err))
    }
    handleSearch() {
        console.log("teste")
        this.refresh(this.state.description)
    }
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    description={this.state.description} />
                <TodoList list={this.state.list} handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )

    }
}
