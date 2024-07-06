// import React, { useState } from "react";

// import Header from "./Header";
// import ToyForm from "./ToyForm";
// import ToyContainer from "./ToyContainer";

// function App() {
//   const [showForm, setShowForm] = useState(false);

//   function handleClick() {
//     setShowForm((showForm) => !showForm);
//   }

//   return (
//     <>
//       <Header />
//       {showForm ? <ToyForm /> : null}
//       <div className="buttonContainer">
//         <button onClick={handleClick}>Add a Toy</button>
//       </div>
//       <ToyContainer />
//     </>
//   );
// }

// export default App;
//Original code





import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const [newToy, setNewToy] = useState({
    name: '',
    image: '',
    likes: 0
  })
    useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(res => res.json())
      .then(data => {
        setToys(data)
      })
      .catch(e => console.error(e))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function submitOrInputField(e) {
    e.preventDefault()
    if (e.type === 'submit') {
      fetch('http://localhost:3001/toys',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'

          },
          body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(newToy => {
          setToys([...toys, newToy])
          setNewToy({
            name: '',
            image: '',
            likes: 0
          })
        })
        .catch(e => console.error(e))
    } else {
      const name = e.target.name
      const value = e.target.value
      setNewToy(toys => (
        { ...toys, [name]: value })
      )
    }
  }

  function handleDelete(toyId) {
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: 'DELETE'
    })

      .then(res => {
        if (res.ok) {
          setToys(toys.filter(toy => toy.id !== toyId))
        }
      })
  }
  function handleLikes(toyId) {
    const toyToUpdate = toys.find(toy => toy.id === toyId)
    const updateLikes = toyToUpdate.likes + 1
    const updatedToy = toys.map(toy =>
      toy.id === toyId? {...toy, likes: updateLikes }: toy
    )
    setToys(updatedToy)
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: updateLikes
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
    .catch(e => console.error(e))
  }
  
  
  return (
    <>
      <Header />
      {showForm ? <ToyForm submitOrInputField={submitOrInputField} newToy={newToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete} handleLikes={handleLikes } />
    </>
  );
}

export default App;