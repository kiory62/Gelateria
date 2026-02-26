import Image from "next/image"
import styles from "./Rodape.module.css"

export default function Rodape () {
    return (
        <footer className={styles.rodape}>
            <div className={styles.infos}>
                <Image src="/imagens/logo.png"
                width={100}
                height={100}
                alt="logo-final"
                />

                <div className={styles.endereço}>
                    <div className={styles.mini_endereço}>
                        <h3>ENDEREÇO</h3>
                        <p>Av. Bernadino de Campos, 98</p>
                        <p>São Paulo, SP 12345-678</p>
                    </div>

                    <div className={styles.mini_endereço}>
                        <h3>CONTATO</h3>
                        <p>info@meusite.com</p>
                        <p>tel: (11) 3456-7890</p>

                    </div>
                    <div className={styles.mini_endereço}>
                        <h3>HORÁRIOS</h3>
                        <p>ABERTO TODOS OS DIAS</p>
                        <p>10:00 - 22:00</p>
                    </div>
                </div>
            </div>

            <p className={styles.final_menssage}>Gelataria. Orgulhosamente desenvolvida por kiory.</p>
        </footer>
    )
}