import { Box } from '@mui/material'
import './styles.css'

type ContactListProps = {
  children: React.ReactNode
}
export function ContactList({ children }: ContactListProps) {
  return (
    <>
      <Box component="span" /* sx={{ p: 2, border: '15px dashed grey' }} */>
        <section className='contactList'>
          {children}
        </section>
      </Box>

    </>
  )
}