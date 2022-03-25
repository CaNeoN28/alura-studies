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
            className={`${style.item} ${selecionado ? style.itemSelecionado: ''}`}
            onClick={() => selecionarTarefa({
                tarefa,
                tempo,
                completado,
                selecionado,
                id
                }
            )}>

            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}