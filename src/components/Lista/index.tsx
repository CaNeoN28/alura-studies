import React, { useState } from 'react';
import { addSyntheticLeadingComment } from 'typescript';
import Item from './Item';
import style from './Lista.module.scss';
import { ITarefas } from '../../types/tarefas';

function Lista({tarefas}: {tarefas: ITarefas[]}){
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