import styles from './Banner.module.css';
import ImagemBanner from '../../assets/imagemBanner.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Capacitar, incluir e desenvolver mulheres em tecnologia!
                </h1>

                <p className={styles.paragrafo}>
                    A plataforma de trainee gamificada é focada no desenvolvimento de mulheres.
                </p>

            </div>
            
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={ImagemBanner}
                    aria-hidden={true}
                />
            </div>
        </div>
    )
}