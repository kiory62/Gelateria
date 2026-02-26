import Image from "next/image"
import Link from "next/link"
import styles from "./page_sabores.module.css"


export default function Sabores () {
    return (
        <main>
            <section className={styles.principal_image}>
                    <h1>NOSSOS SABORES</h1>
            </section>
            <section className={styles.secao_sorvete}>
                <h2>Sabores de Sorvete</h2>

                <div className={styles.container_sabores}>
                    <div className={styles.div_sabores}>
                        <Image 
                        src="/imagens/sabor-oreo.png"
                        width={200}
                        height={200}
                        alt="sabor-oreo"
                        className={styles.imagens_sabores}
                        />
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabores.</p>
                    </div>
                    <div className={styles.div_sabores}>
                        <Image 
                        src="/imagens/sabor-pistache.png"
                        width={200}
                        height={200}
                        alt="sabor-pistache"
                        className={styles.imagens_sabores}
                        />
                        <h3>Sorvete de Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos.</p>
                    </div>
                    <div className={styles.div_sabores}>
                        <Image 
                        src="/imagens/sabor-cookies-avela.png"
                        width={200}
                        height={200}
                        alt="sabor-cookies"
                        className={styles.imagens_sabores}
                        />
                        <h3>Sorvete de Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. você vai adorar o sabor.</p>
                    </div>
                    <div className={styles.div_sabores}>
                        <Image 
                        src="/imagens/sorbet-kiwi.png"
                        width={200}
                        height={200}
                        alt="sabor-kiwi"
                        className={styles.imagens_sabores}
                        />
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. rico em vitamina C.</p>
                    </div>
                    <div className={styles.div_sabores}>
                        <Image 
                        src="/imagens/sorbet-morango.png"
                        width={200}
                        height={200}
                        alt="sabor-morango"
                        className={styles.imagens_sabores}
                        />
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className={styles.div_sabores}>
                        <Image 
                        src="/imagens/sorbet-limao.png"
                        width={200}
                        height={200}
                        alt="sabor-limao"
                        className={styles.imagens_sabores}
                        />
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}