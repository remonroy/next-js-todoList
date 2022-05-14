import axios from "axios";
import Link from "next/link";
export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );

    return { props: { data } };

    // return {
    //   this: { data },
    // };
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    // const data = await res.json();
  } catch (error) {
    console.log("errorrrrrr", error.message);
  }
};
const about = ({ data }) => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Fetch Data Here</h1>
        {data.slice(0, 5).map((res) => {
          return (
            <div className="demo" key={res.id}>
              <span>{res.id}</span>
              <Link href={`/about/${res.id}`}>
                <a>{res.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default about;
