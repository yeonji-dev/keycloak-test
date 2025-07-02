import { createFileRoute } from '@tanstack/react-router'
import ProtectedRoute from '../components/ProtectedRoute';

export const Route = createFileRoute('/content')({
  component: () => (
    <ProtectedRoute>
      <Content />
    </ProtectedRoute>
  ),
})

function Content() {
  return (
      <h1>Content</h1>
  )
}

export default Route;
