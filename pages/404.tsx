const notFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        flexDirection:"column"
      }}
    >
        <h1>404</h1>
        <br />
      <h3>صفحه ی مورد نظر پیدا نشد</h3>
    </div>
  );
};

export default notFound;
