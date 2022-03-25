import { ITarefa } from '../../../types/tarefas';
import style from '../Lista.module.scss';

export default function Item({tarefa, tempo, complentado, selecionado, id}: ITarefa){
    console.log({tarefa, tempo, complentado, selecionado, id})
    return (
        <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        </li>
    )
}