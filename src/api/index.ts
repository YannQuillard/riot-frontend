import axios from "axios";
import { BestChampion, Champions } from "../decl";


export const getChampions = async() : Promise<Champions>=> {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/champions`,
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
      console.error("error", error);
      return [];
  }
};

export const postBestChampions = async (BestChampion: BestChampion): Promise<BestChampion> => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/match`,
      BestChampion
    );
    return res.data;
  } catch (error) {
    throw new Error("An error occurred saving the user.");
  }
};