import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container_title}>
              <div>
                  <Image src="/imagens/banner-home.png"
                    className={styles.main_image}
                    height={500}
                    width={500}
                    alt="principal-banner"
                    />
              </div>
              <h1>SORVETE ARTESANAL</h1>
      </section>
      <section className={styles.main_container}>
        <div className={styles.container_image}>
          <Image 
            src="/imagens/banner-sabores.jpg"
            className={styles.div_image}
            alt="Imagens do sorvete"
            fill
            />
        </div>
        <div className={styles.div_texto}>
          <h2>NOSSOS SABORES</h2>
          <span>Novos e Deliciosos!</span>
          <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
        </div>
      </section>
      <section className={styles.main_container}>
        <div className={styles.div_texto}>
          <h2>NOSSOS EVENTOS</h2>
          <span>Delicias com sorvete!</span>
          <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
        </div>
        <div className={styles.container_image}>
          <Image src="/imagens/eventos-image.jpg"
            className={styles.div_image}
            alt="imagens de sorvetes"
            fill
            />
        </div>
      </section>
      <section className={styles.main_container}>
        <div className={styles.container_image}>
          <Image src="/imagens/sobre-image.jpg"
            className={styles.div_image}
            alt="imagem de pessoas"
            fill
            />
        </div>
        <div className={styles.div_texto}>
          <h2>Sobre Nós</h2>
          <span>Alegria em cada casquinha!</span>
          <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
        </div>
      </section>
    </main>
  );
}
