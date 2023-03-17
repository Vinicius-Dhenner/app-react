import './style.css'

type MenuProps = {
    children: React.ReactNode /* ESTÁ PEGANDO UM TSX */
}

export function Menu ({children} : MenuProps) {
    return (
        <>
            <div className="menu">
                {children}
            </div>
        </>
    )
}