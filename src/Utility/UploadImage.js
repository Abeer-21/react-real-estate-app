export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "rhzzmyc4");
  formData.append("folder", "e-commerce-sda2-onsite");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dxbired2y/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    console.log("data secure url ", data.secure_url);
    return data.secure_url; // Return the secure URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
};
