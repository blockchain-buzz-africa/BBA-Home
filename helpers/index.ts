import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("https://api.bbafrica.co/api/dapps-news");
    if (!response.data) {
      throw new Error("Network response was not ok");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSingleNews = async (_id: string) => { // _id should be a string
  try {
    const response = await getData();
    const news = response.data.data;

    // No need for `await` with `.find` as it's synchronous
    const singleItemNews = news.find((iNews: any) => iNews._id === _id);
    return singleItemNews;
  } catch (error) {
    throw error;
  }
};

