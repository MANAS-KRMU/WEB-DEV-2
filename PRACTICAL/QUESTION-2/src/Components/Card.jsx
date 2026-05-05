import React from 'react'

const Card = async () => {

  const fetchApi = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const tasks = await fetchApi.json()
  console.log(tasks);

  return (
    <div>
      {tasks.length > 0 ?
        tasks.map((el, idx) => {
          return (
            <div className="product_container" key={idx} onClick={() => showDetail(el)} >
              <h1>{el.userId}</h1>
              <p>{el.id}</p>
              <p>{el.title}</p>
              <p>{el.completed}</p>
            </div>
          )
        }) : <p>No Tasks</p>
      }
    </div>

  )
}

export default Card
