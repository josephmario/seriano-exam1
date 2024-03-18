import React, { useEffect, useState } from 'react';

const initialData = [
  {
    "id": 1,
    "name": "John Doe",
    "status": 1
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "status": 2
  },
  {
    "id": 3,
    "name": "Adam Rocket",
    "status": 2
  },
  {
    "id": 4,
    "name": "Luis Rocket",
    "status": 1
  }
];

const useGroupByStatus = (data) => {
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    const result = {};
    data.forEach(item => {
      const key = `status-${item.status}`;
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
    });
    setGroupedData(result);
  }, [data]);

  return groupedData;
};

const MyComponent = () => {
  const groupedData = useGroupByStatus(initialData);

  useEffect(() => {
    console.log(groupedData);
  }, [groupedData]);

  return (
    <div>
      {/* Render your component UI here */}
    </div>
  );
};

export default MyComponent;
