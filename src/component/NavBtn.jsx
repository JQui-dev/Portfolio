import "./NavBtn.css"

function NavBtn({url, name="Name?"}) {
    return (
        <a className="NavBtn" href={url}>{name}</a>
    )
}
export default NavBtn