import React from 'react';
import { ITarefa } from '../../types/tarefas';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import {v4 as uuidv4} from 'uuid';
import { randomUUID } from 'crypto';

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas}: Props){

    const [tarefa, setTarefa] = "";
    const [tempo, setTempo] = "00:00";

    function adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
    }

    return(
        <form  className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                         Adicione um novo estudo
                    </label>
                    <input
                        value={tarefa}
                        onChange={(evento => evento.target.value)}
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder='O que você quer estudar' 
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo: 
                    </label>
                    <input 
                        value={tempo}
                        onChange={(evento => evento.target.value)}
                        type="time" 
                        name='tempo' 
                        id='tempo' 
                        step='1'
                        max='01:30:00'
                        min='00:00:00'
                        required
                    />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
    )
}

export default Formulario;