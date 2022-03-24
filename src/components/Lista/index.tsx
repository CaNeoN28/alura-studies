import React from 'react';
import { addSyntheticLeadingComment } from 'typescript';
import './style.scss'

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
        <aside className='listaTarefas'>
            <h2>Tarefas do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className='item'>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Lista;