import axios from "axios";
export const getStaticPaths = async () => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );

    const paths = data.map((currE) => {
      return {
        params: {
          pageNo: currE.id.toString(),
        },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log("errorrrrrr", error.message);
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return { props: { data } };
  } catch (error) {
    console.log("errorrrrrr", error.message);
  }
};

const pageNo = ({ data }) => {
  return (
    <>
      <div className="demoCard">
        <span>{data.id}</span>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
      ;
    </>
  );
};

export default pageNo;
