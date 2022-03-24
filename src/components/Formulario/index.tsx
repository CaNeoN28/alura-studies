import React from 'react';
import Botao from '../Botao';
import './style.scss';

class Formulario extends React.Component{
    render(){
        return(
            <form action="">
                <div className='novaTarefa'>
                    <label htmlFor="tarefa">
                         Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder='O que você quer estudar' 
                        required
                    />
                </div>
                <div className='novaTarefa'>
                    <label htmlFor="tempo">

                    </label>
                    <input 
                        type="time" 
                        name='tempo' 
                        id='tempo' 
                        step='1'
                        max='01:30:00'
                        min='00:00:00'
                        required
                    />
                </div>
                <Botao/>
            </form>
        );
    }
}

export default Formulario;