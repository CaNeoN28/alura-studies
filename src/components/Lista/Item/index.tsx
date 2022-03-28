import { spawn } from 'child_process';
import { ITarefa } from '../../../types/tarefas';
import style from './Item.module.scss';

interface Props extends ITarefa{
    selecionarTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({
        tarefa,
        tempo,
        completado,
        selecionado,
        id,
        selecionarTarefa
    }: Props){

    console.log({tarefa, tempo, completado, selecionado, id})
    return (
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado: ''} ${completado ? style.itemCompletado: ''}`}
            onClick={() => !completado  && selecionarTarefa({
                tarefa,
                tempo,
                completado,
                selecionado,
                id
                }
            )}>

            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}