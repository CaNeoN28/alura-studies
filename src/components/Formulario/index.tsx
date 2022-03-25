import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component{

    state = {
        tarefa: "" ,
        tempo: "00:00:00"
    }

    adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        console.log(this.state)
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