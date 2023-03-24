import styles from "./Home.module.css"
export const Home = () => {
    return(
        <section id="welcome-world" className={styles.main}>
           
        <div >
            <h2>Welcome href our school portal</h2>
            
        </div>
        <img src="./images/four_slider_img01.png" alt="hero"/>

        <div id="home-page">
            <h1>Latest Games</h1>

            {/* <!-- Display div: with information about every game (if any) --> */}
            <div className="game">
                <div className="image-wrap">
                    <img src="./images/CoverFire.png"/>
                </div>
                <h3>Cover Fire</h3>
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div className="data-buthrefns">
                    <a href="#" className="btn details-btn">Details</a>
                </div>
            </div>
            <div className="game">
                <div className="image-wrap">
                    <img src="./images/ZombieLang.png"/>
                </div>
                <h3>Zombie Lang</h3>
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div className="data-buthrefns">
                    <a href="#" className="btn details-btn">Details</a>
                </div>
            </div>
            <div className="game">
                <div className="image-wrap">
                    <img src="./images/MineCraft.png"/>
                </div>
                <h3>MineCraft</h3>
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div className="data-buthrefns">
                    <a href="#" className="btn details-btn">Details</a>
                </div>
            </div>

            {/* <!-- Display paragraph: If there is no games  --> */}
            <p className="no-articles">No games yet</p>
        </div>
    </section>
    );
}