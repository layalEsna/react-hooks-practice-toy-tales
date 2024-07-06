// import React from "react";
// import ToyCard from "./ToyCard";

// function ToyContainer() {
//   return (
//     <div id="toy-collection">{/* Render the collection of ToyCards */}</div>
//   );
// }

// export default ToyContainer;
//Original code




import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys , handleDelete, handleLikes}) {
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}
      {toys.map(toy => (
        <ToyCard key={toy.id} toy={toy} handleDelete={handleDelete} handleLikes={handleLikes } />
      ))}
    </div>
  );
}

export default ToyContainer;