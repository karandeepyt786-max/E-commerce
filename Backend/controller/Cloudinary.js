import { v2 as cloudinary } from "cloudinary";

import fs from "fs/promises"; // ✅ correct
import path from "path";





const emptyDirectory = async (dirPath) => {
  const files = await fs.readdir(dirPath, { withFileTypes: true });

  for (let file of files) {
    if (file.isFile()) {
      await fs.unlink(path.join(dirPath, file.name));
    }
  }
};






const uploadImage = async (UploadingPath) => {
  const options = {
    use_filename: true,
    unique_filename: true,
    overwrite: true,
  };

  try {
    const result = await cloudinary.uploader.upload(UploadingPath, options);
    return result.secure_url; // Return the hosted URL
  } catch (err) {
    console.error("Cloudinary Error: ", err.message);
    throw err;
  }
};

export { uploadImage, emptyDirectory };
