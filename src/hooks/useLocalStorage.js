import React from 'react';

function useLocalStorage(itemName, inicialValue) {
  const [item, setItem] = React.useState(inicialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName,JSON.stringify(inicialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000)
  }, []);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}

export { useLocalStorage };

/* localStorage.removeItem("Tareas_V1");
const defaultDatos = [
  {text: "comer", completed: true},
  {text: "beber", completed: false},
  {text: "Comparar cosas", completed: true},
  {text: "no se", completed: false}
];

localStorage.setItem("Tareas_V1", JSON.stringify(defaultDatos)); */