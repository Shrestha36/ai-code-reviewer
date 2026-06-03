import axios from "axios";

export const reviewCode = async (
  language: string,
  code: string
) => {
  const response = await axios.post(
    "http://localhost:4000/api/review",
    {
      language,
      code,
    }
  );

  return response.data;
};