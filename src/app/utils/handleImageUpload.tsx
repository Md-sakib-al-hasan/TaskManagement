

export const handleImageUpload = async (file: File) => {
    const apiKey = "b17123664daf87224150e3130c133a67";
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
 