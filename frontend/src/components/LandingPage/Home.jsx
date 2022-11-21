import styles from "../../style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./index";

const Home = () => (

    <div className="bg-primary w-full overflow-hidden">



        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>

                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Stats />
                {/* <Clients /> */}
                <CTA />
                <Footer />
            </div>

        </div>

    </div>

);

export default Home;
