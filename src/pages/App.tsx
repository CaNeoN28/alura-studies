import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefas';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [selecionado,  setSelecionado] = useState<ITarefa>();

  function selecionarTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAntigas => tarefasAntigas.map(tarefa => ({
      ...tarefa,
      selecionado : tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionarTarefa={selecionarTarefa}/>
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
