import { Page } from '@/routes/pagesList';
import CustomNavLink from './CustomNavLink'

function PageLinks({
  title,
  to,
  icon
}: Page) {
  return <CustomNavLink to={to} title={title} icon={icon} />

}
export default PageLinks
