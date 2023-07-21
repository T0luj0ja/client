import aboutimg from "../assets/imgs/man-enjoying-some-delicious-italian-food.jpg"

export const About = () => {
    return(
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2 justify-end">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ratione unde corrupti quasi quo, ipsam quam! Temporibus alias necessitatibus tempora, magnam facilis, error nobis laudantium, deserunt quidem odio illo at voluptas.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi ad magnam odio velit impedit quo doloribus asperiores mollitia adipisci libero rerum a aspernatur temporibus nostrum praesentium necessitatibus neque laboriosam.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutimg} alt="img" className="w-[400px] h-[400px] object-cover   "/>
                </div>
            </div>

        </div>
    )
}