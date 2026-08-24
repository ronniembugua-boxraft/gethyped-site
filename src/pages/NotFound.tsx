import { PageHeader } from '../components/PageHeader'
import { Button } from '../components/Button'

export default function NotFound() {
  return (
    <PageHeader
      eyebrow="404"
      title="This one did not make the cut."
      intro="The page you were after does not exist — or it moved. Try the work, or tell us what you were looking for."
    >
      <Button variant="primary" to="/work">
        See our work
      </Button>
      <Button variant="surface" to="/">
        Back home
      </Button>
    </PageHeader>
  )
}
