import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("https://api.bbafrica.co/api/dapps-news");
    if (!response.data) {
      throw new Error("Network response was not ok");
    }
    
    // Return just the data part for simplicity in further processing
    return response.data; 

  } catch (error) {
    throw error;
  }
};

export const getSingleNews = async (_id: string) => {
  try {
    const newsData = await getData(); // Assuming this now correctly returns the data part directly
    // Since getData is adjusted to return the data part directly, 
    // we can access the data array directly assuming the structure is { data: [...] }
    const singleItemNews = newsData.data.find((iNews: any) => iNews._id === _id);
    return singleItemNews;
  } catch (error) {
    throw error;
  }
};

export const getDapps = async () => {
  try {
    const response = await axios.get("https://api.bbafrica.co/api/dappstore-info");
    if (!response.data) {
      throw new Error("Network response was not ok");
    }
    
    // Return just the data part for simplicity in further processing
    return response.data; 

  } catch (error) {
    throw error;
  }
};

export const getSingleDapps = async (_id: string) => {
  try {
    const newsDapp = await getDapps(); // Assuming this now correctly returns the data part directly
    // Since getData is adjusted to return the data part directly, 
    // we can access the data array directly assuming the structure is { data: [...] }
    const singleDapp = newsDapp.data.find((iDapps: any) => iDapps._id === _id);
    return singleDapp;
  } catch (error) {
    throw error;
  }
};