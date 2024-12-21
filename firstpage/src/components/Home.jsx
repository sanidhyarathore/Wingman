import Card from "./Card"

function Home() {
    return (
        <div className='w-[1300px] h-auto max-h-[1591px] overflow-hidden m-[20px] border-[1px] border-[#DCDFE4] rounded-[20px] flex-col items-center justify-center'>
            <div className="flex pt-[32px] pr-[24px] pb-[16px] pl-[24px]">
                <div className="flex w-full gap-8 ">
                    <h4 className="text-3xl font-semibold text-gray-800">At a glance</h4>
                </div>
                <button className="bg-red-100 rounded-[10px]">7 Days</button>
            </div>

            <div className="pt-[32px] pr-[24px] pb-[32px] pl-[24px] grid grid-cols-3 gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="">c3</div>
            <div className="">c4c</div>
            <div className="">c5</div>
            <div className="">c6</div>
        </div>
    )
}

export default Home



