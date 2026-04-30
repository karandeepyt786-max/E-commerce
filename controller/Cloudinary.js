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






const uploadImage = async (UploadingPath,dirPath) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: true,
    overwrite: true,
  };

  try {
    console.log("1");
    // Upload the image
    const result = await cloudinary.uploader.upload(UploadingPath, options);
    console.log("2");
    console.log("cloudinary response ", result);
    console.log("Public id is ", result.public_id);
  } catch (err) {
    console.error(err.message);
  }
};

export { uploadImage ,emptyDirectory};
