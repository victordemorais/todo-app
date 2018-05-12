import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
export default props => (
    <div role="form" className="todoForm row">
        <Grid cols='12 9 10'>
            <input type="text" id="description" className='form-control'
                onChange={props.handleChange}
                value={props.description}
                placeholder="Adicione uma tarefa" />
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}
                 />
                 <IconButton style="info" icon="search"
                 onClick={props.handleSearch}/>
        </Grid>
    </div>
)