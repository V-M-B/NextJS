import Link from 'next/link';

export default function Layout() {
  

  return (
    <>
      <h1>Welcome home</h1>
      <Link href="/articles/breacking-news-123?language=en">Read in English</Link>
      <Link href="/articles/breacking-news-123?language=fr">Read in French</Link>
    </>
  )
}
