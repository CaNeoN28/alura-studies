import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";

export default function Cronometro(){
    console.log(tempoParaSegundos('01:01:01'))
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma tarefa e comece os estudos</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}