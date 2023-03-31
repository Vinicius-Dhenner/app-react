import { Button } from '@mui/material';
import './styles.css';

type MenuItemProps = {
  icon: React.ReactNode,
  text: String
}

export function MenuItem({ icon, text }: MenuItemProps) {
  return (
    <>
      <Button variant="contained" >{icon}{text}</Button>
    </>
  )
}