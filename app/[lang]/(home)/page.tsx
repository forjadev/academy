import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center flex-1 text-center">
      <h1 className="mb-4 text-2xl font-bold">Forja Academy</h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="font-semibold underline text-fd-foreground"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
