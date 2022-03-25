import React from 'react';
import { ITarefa } from '../../types/tarefas';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import {v4 as uuidv4} from 'uuid';
import { randomUUID } from 'crypto';

class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}>{

    state = {
        tarefa: "" ,
        tempo: "00:00:00"
    }

    adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    complentado: false,
                    id: uuidv4()
                }
            ]
        );
        this.state.tarefa = "";
        this.state.tempo = "00:00"
    }

    render(){
        return(
            <form  className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                         Adicione um novo estudo
                    </label>
                    <input
                        value={this.state.tarefa}
                        onChange={(evento => this.setState({...this.state, tarefa: evento.target.value}))}
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
                        value={this.state.tempo}
                        onChange={(evento => this.setState({...this.state, tempo: evento.target.value}))}
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
        );
    }
}

export default Formulario;