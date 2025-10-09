import { toast } from "react-toastify";

export const getStoredItems = () => {
  const storedItems = localStorage.getItem("readList");

  if (storedItems) {
    const converted = JSON.parse(storedItems);
    return converted;
  } else {
    return [];
  }
};

export const storeItem = (id) => {
  const storedItems = getStoredItems();

  if (storedItems.includes(id)) {
    toast.info("App is already installed"); 
  } else {
    storedItems.push(id);
    const converted = JSON.stringify(storedItems);
    localStorage.setItem("readList", converted);
    toast.success("App installed successfully");
  }
};

export const removeItem = (id) => {
  const storedItems = getStoredItems();
  const updatedApps = storedItems.filter((appId) => appId !== String(id));
  localStorage.setItem("readList", JSON.stringify(updatedApps));
  toast.error("App uninstalled successfully");
};
