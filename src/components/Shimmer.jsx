const Shimmer = () => {
  
  return (
    <div className="flex flex-col space-y-4 p-4">
      {Array(6).fill('').map((_, index) => (
        <div key={index} className="flex space-x-4 animate-pulse">
          <div className="bg-gray-300 h-24 w-24 rounded-md"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
