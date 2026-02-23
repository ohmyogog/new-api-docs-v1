import { redirect } from 'next/navigation';

/**
 * Fallback redirect for `/`.
 *
 * Keep this page server-only and route all root traffic to the Chinese API index.
 */
export default function RootPage() {
  redirect('/zh/docs/api');
}
