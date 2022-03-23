import React from 'react';

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
        <ul>
            {tarefas.map((item, index) => (
                <li key={index}>
                    <h3>{item.tarefa}</h3>
                    <span>{item.tempo}</span>
                </li>
            ))}
        </ul>
    );
}

export default Lista;