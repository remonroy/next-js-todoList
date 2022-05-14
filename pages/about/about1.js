import Image from "next/image";
const about1 = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>This is about 1</h1>
        <Image src="/demo.jpg" width="300" height="300"></Image>
      </div>
    </>
  );
};

export default about1;
