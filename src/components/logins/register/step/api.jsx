const API_BASE_URL = "http://localhost:8000/api/v1";
// "http://localhost:8000/api/v1/bride-groom/create"
export const registerBrideGroom = async (formData) => {
  try {
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value && key !== "profilePhoto" && key !== "aadharPhoto") {
        formDataToSend.append(key, value);
      }
    });

    if (formData.profilePhoto instanceof File) {
      formDataToSend.append("profilePhoto", formData.profilePhoto);
    }
    if (formData.aadharPhoto instanceof File) {
      formDataToSend.append("aadharPhoto", formData.aadharPhoto);
    }

    const response = await fetch(`${API_BASE_URL}/bride-groom/create`, {
      method: "POST",
      body: formDataToSend,
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || "Something went wrong!");
    }
    return result;
  } catch (error) {
    console.error("❌ API Error:", error);
    throw error;
  }
};
