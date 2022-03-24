import React from 'react';
import { addSyntheticLeadingComment } from 'typescript';
import Item from './Item';
import style from './Lista.module.scss';

function Lista(){
    const tarefas = [
        {
            tarefa: 'Javascript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'React',
            tempo: '03:00:00'
        },
        {
            tarefa: 'Typescript',
            tempo: '02:00:00'
        }
    ]

    return(
        <aside className={style.listaTarefas}>
            <h2>Tarefas do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        //tarefa={item.tarefa}
                        //tempo={item.tempo}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default Lista;