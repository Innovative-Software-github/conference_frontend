import Link from 'next/link'
import { ROUTES } from '../constants/Routes'

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>Адрес говно, забей урл нормально</h2>
      <p>Еблом не щелкай</p>
      <Link href={ROUTES.home}>Return Home</Link>
    </div>
  )
}