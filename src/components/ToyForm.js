// import React from "react";

// function ToyForm() {
//   return (
//     <div className="container">
//       <form className="add-toy-form">
//         <h3>Create a toy!</h3>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter a toy's name..."
//           className="input-text"
//         />
//         <br />
//         <input
//           type="text"
//           name="image"
//           placeholder="Enter a toy's image URL..."
//           className="input-text"
//         />
//         <br />
//         <input
//           type="submit"
//           name="submit"
//           value="Create New Toy"
//           className="submit"
//         />
//       </form>
//     </div>
//   );
// }

// export default ToyForm;

//Original code



import React from "react";

function ToyForm({submitOrInputField, newToy}) {
  return (
    <div className="container">
      <form
        className="add-toy-form"
      onSubmit={submitOrInputField}
      >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={submitOrInputField}
          value= {newToy.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={submitOrInputField}
          value={newToy.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          
        />
      </form>
    </div>
  );
}

export default ToyForm;