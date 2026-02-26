import Link from "next/link"
import Image from "next/image"
import styles from "./Topo.module.css"
export default function Topo () {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_mini_container}>
                    <Image
                    src="/imagens/logo.png"
                    alt="Logo do Projeto"
                    width={100}
                    height={100}
                />

                <ul className={styles.links}>
                    <li><Link href="/" className = {styles.link_logo}>Home</Link></li>
                    <li><Link href="/Sabores" className = {styles.link_logo}>Sabores</Link></li>
                    <li><Link href="/Sobre" className = {styles.link_logo}>Sobre</Link></li>
                </ul>
            </div>
        </header>
    )
}