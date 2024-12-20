function Button({ title, svg }) {
    return (
        <div className="">
            <button className="group relative h-12 w-48 overflow-hidden rounded-full hover:bg-[#CCFBEF] text-lg font-bold text-[#8A94A6]">
                {title}
            </button>
        </div>
    )

}

export default function Topbar() {
    return (
        <div className="flex space-x-4 h-[94px] bg-[#ffffff]">
            <Button title="Summary" />
            <Button title="Chat" />
            <Button title="Sales" />
        </div>
    )
}

