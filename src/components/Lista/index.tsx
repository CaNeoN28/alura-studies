import React, { useState } from 'react';
import { addSyntheticLeadingComment } from 'typescript';
import Item from './Item';
import style from './Lista.module.scss';
import { ITarefa } from '../../types/tarefas';

interface Props{
    tarefas: ITarefa[],
    selecionarTarefa: (tarefaSelecionada: ITarefa) => void 
}

function Lista({tarefas, selecionarTarefa}: Props){
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
                        selecionarTarefa={selecionarTarefa}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default Lista;