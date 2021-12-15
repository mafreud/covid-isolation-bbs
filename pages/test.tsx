import Link from "next/link";

function Home() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/post/first">
            <a>First Post</a>
          </Link>
        </li>
        <li>
          <Link href="/post/second">
            <a>Second Post</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Home;
