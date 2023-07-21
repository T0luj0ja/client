import Button from "./elements/Button"

export const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-description w-full md:w-1/2 p-3">
                <h2 className=" yellow mb-6 text-4xl font-bold text- ">Food Ordering Made Easy</h2>
            <p className="font-semibold text-lg py-2 text-black ">Everything you need in One place</p> 
            </div>
            <div className="btn-container w-full md:w-1/2  flex justify-end color-white">
                <button className=" text-white font-bold hover:text-gray-200  p-0">Order Here</button>
                <a href="/menu" className="text-black-400 hover:text-black-200 font-bold text-decoration-line ">
                    See Menu
                </a>
            </div>
        </div>
    )
    } 
export default Banner