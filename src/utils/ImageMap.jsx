// src/utils/imageMap.js
function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
      // Remove the leading "./" and file extension to get a clean key
      const key = item.replace('./', '').replace(/\.[^/.]+$/, '');
      images[key] = r(item);
    });
    return images;
  }
  
  // Adjust the folder path and file types as needed
  const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));
  
  export default images;
  