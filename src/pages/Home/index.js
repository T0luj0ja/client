/* The following line can be included in a src/App.scss */
import { About } from "../../components/About"
import Banner from "../../components/Banner"
import { ProductsPreview } from "../../components/ProductsPreview"
import Carousels from "./Carousel"

const Home = () => {
    return(

        <div>
            <Carousels/>
            <Banner/>
            <ProductsPreview/> 
            <About/>
            

        </div>
    )
}

export default Home