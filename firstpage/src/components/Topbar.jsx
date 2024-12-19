
function Button({ title }) {
    return (
        <div>
            <span className="">
                svg
            </span>
            <span className="">
                {title}
            </span>
        </div>
    )

}

export default function Topbar() {
    return (
        <div>
            <Button title="Summary" />
            <Button title="Chat" />
            <Button title="Sales" />
        </div>
    )
}

