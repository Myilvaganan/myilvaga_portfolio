export const fetchResumeUrl = async () => {
  try {
    const response = await fetch(
      "https://zxjl6fs080.execute-api.ap-south-1.amazonaws.com/prod",
    );
    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error("Error fetching pre-signed URL:", error);
  }
};
