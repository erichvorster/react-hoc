import React, { useState, useEffect } from 'react';
import withLoadingSpinner from '../components/withLoadingSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataComponent = ({ data }) => {
  return (
    <div>
      <ul>
        {data.todos.map(item => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
};



const DataComponentWithLoading = withLoadingSpinner(DataComponent);



const Loader = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(todoData => {
        setData(todoData);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <DataComponentWithLoading data={data} isLoading={isLoading} />
    </div>
  );
};

export default Loader;
