// import { cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: 'your-cloud-name',
//   api_key: 'your-api-key',
//   api_secret: 'your-api-secret'
// });

// const uploadFileToCloudinary = async (file) => {
//   const formData = new FormData();
//   formData.append('file', file);
//   formData.append('upload_preset', 'your-upload-preset');

//   const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`, {
//     method: 'POST',
//     body: formData
//   });

//   const data = await response.json();
//   return data;
// };

// const saveFileDataToDB = async (fileData) => {
//   // Replace this with your own API call to save file data to your database
//   const response = await fetch('/api/saveFileData', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(fileData)
//   });

//   const data = await response.json();
//   return data;
// };

// const handleUpload = async (files) => {
//   for (const file of files) {
//     const cloudinaryResponse = await uploadFileToCloudinary(file);
//     await saveFileDataToDB(cloudinaryResponse);
//   }
// };

