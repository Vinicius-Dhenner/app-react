import './styles.css';

type MenuProps = {
  children: React.ReactNode
}

export function Menu({ children }: MenuProps) {
  return (
    <>
      <div className='menu'>
        {children}
      </div>
    </>
  )
}