import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo.id}>
                <td className={todo.status === "true" ? 'markedAsDone' : ''}>{todo.descricao}</td>
                <td>

                    <IconButton style="success" icon='check'
                        onClick={() => props.handleMarkAsDone(todo)}  hide={todo.status === "true"}/>
                    <IconButton style="warning" icon="undo"
                        onClick={() => props.handleMarkAsPending(todo)} hide={todo.status === "false"}/>
                    <IconButton style="danger" icon="trash-o"
                        onClick={() => props.handleRemove(todo)} hide={todo.status === "false"}/>
                </td>
            </tr>
        ))
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}