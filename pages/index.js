import Link from "next/link";
function Home() {
  return (
    <div className="ankor">
      <h1>This is home page</h1>
      <Link href="/about">
        <a
          style={{
            background: "orange",
            padding: "1rem 3rem",
            borderRadius: " 2rem",
          }}
        >
          Click Here
        </a>
      </Link>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
    </div>
  );
}
export default Home;
