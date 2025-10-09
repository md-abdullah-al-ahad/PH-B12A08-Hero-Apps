const getStoredInstalled = () => {
  const storedSTR = localStorage.getItem("installedApps");
  if (storedSTR) {
    const storedData = JSON.parse(storedSTR);
    return storedData;
  } else {
    return [];
  }
};
const addToStoredInstalled = (id) => {
  const storedData = getStoredInstalled();
  if (storedData.includes(id)) {
    return;
  } else {
    storedData.push(id);
    localStorage.setItem("installedApps", JSON.stringify(storedData));
  }
};
const removeFromStoredInstalled = (id) => {
  const storedData = getStoredInstalled();
  const newData = storedData.filter((i) => i !== id);
  localStorage.setItem("installedApps", JSON.stringify(newData));
  return newData;
};
export { addToStoredInstalled, getStoredInstalled, removeFromStoredInstalled };
