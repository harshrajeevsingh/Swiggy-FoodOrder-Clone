const Shimmer = () => {
  return (
    <div className="shimmer-div">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-card-img"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-info-1"></div>
            <div className="shimmer-info-2"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
