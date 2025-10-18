export const getEvents = async () => {
  try {
    const response = await fetch("/api/event/activeEvents");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error("API error:", err);
    return null;
  }
};

export const getEventById = async(id) =>{
  try {
    const response = await fetch(`/api/event/name/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error("API error:", err);
    return null;
  }
}

