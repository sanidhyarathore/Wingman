import image from "../assets/logo.svg";

const Sidebar = () => {
    return (
        <>
            <div className="bg-[#115E56] justify-items-center w-fit min-w-[60px] h-[1080px]">
                <div className="  pt-6 pr-4 pb-6 pl-4" >
                    <img src={image} />
                </div>
                <div className="h-px bg-[#134E48] min-w-[34px]">

                </div>
            </div>

        </>
    )

}

export default Sidebar