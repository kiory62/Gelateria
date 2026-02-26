import Image from "next/image"
import Link from "next/link"
import styles from "./page_sobre.module.css"

export default function Sobre () {
    return (
        <main>
            <section className={styles.principal_image}>
                    <h1>Gelateria</h1>
            </section>
            <section className={styles.container_textual}>
                <h2>Sobre Nós</h2>
                <span>Nós simplesmente amamos sorvete!</span>
                <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
            </section>
            <section className={styles.main_container}>
                <div className={styles.container_image}>
                    <Image 
                        src="/imagens/sobre-image.jpg"
                        className={styles.div_image}
                        alt="reuniao de pessoas"
                        fill
                        />
                </div>
                <div className={styles.container_image}>
                    <Image 
                        src="/imagens/sorveteria.jpg"
                        className={styles.div_image}
                        alt="sorveteria"
                        fill
                        />
                </div>
            </section>
        </main>
    )
}