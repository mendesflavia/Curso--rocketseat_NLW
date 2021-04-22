
import styles from'./styler.module.scss';
export function Header(){    
    return(
        <header className={styler.headerContainer} >
         
            <img src="/logo.svg" alt="Podcastr"/>

            <p>O melhor para você ouvir, sempre</p>

            <span> Qui, 8 de Abril</span>
        </header>
    );
}