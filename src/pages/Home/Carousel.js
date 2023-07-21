    import Carousel from 'react-bootstrap/Carousel'
    import abc from  "../../assets/imgs/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg"
    import xyz from "../../assets/imgs/side-view-meat-stew-lamb-stew-with-fried-onion-dried-fruits-with-rice-plate.jpg"
    import lmn from "../../assets/imgs/closeup-roasted-meat-with-sauce-vegetables-fries-plate-table.jpg"
    import fed from "../../assets/imgs/top-view-table-full-delicious-food-composition.jpg"

    function Carousels() {
    return (
        <Carousel fade className="d-block w-70   ">

            <Carousel.Item>
                <img
                // className="d-block w-70"
                className='my-carousel'
                src={abc}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className='my-carousel'
                src={xyz}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className='my-carousel'
                src={lmn}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className='my-carousel'
                src={fed}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className='my-carousel'
                src={abc}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className='my-carousel'
                src={abc}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className='my-carousel'
                src={abc}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
    }

    export default Carousels;