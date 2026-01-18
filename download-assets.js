
const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://www.gowthaminursery.in';
const OUTPUT_DIR = path.join(__dirname, 'public/images');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Simple regex to find img src
const extractImages = (html) => {
  const regex = /<img[^>]+src="([^">]+)"/g;
  const images = new Set();
  let match;
  while ((match = regex.exec(html)) !== null) {
      let src = match[1];
      if (!src.startsWith('http')) {
        src = BASE_URL + (src.startsWith('/') ? '' : '/') + src;
      }
      images.add(src);
  }
  return Array.from(images);
};

const downloadImage = (url, filename) => {
  const file = fs.createWriteStream(path.join(OUTPUT_DIR, filename));
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filename);
    console.error(`Error downloading ${url}: ${err.message}`);
  });
};

https.get(BASE_URL, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const images = extractImages(data);
    console.log(`Found ${images.length} images.`);
    images.forEach((imgUrl, index) => {
      const ext = path.extname(imgUrl) || '.jpg';
      // Filter out small icons or irrelevant stuff if possible, or just download all
      // We will name them generically or try to keep basename
      let name = path.basename(imgUrl);
      if(name.includes('?')) name = name.split('?')[0];
      if(!name) name = `image-${index}${ext}`;
      
      downloadImage(imgUrl, name);
    });
  });
}).on('error', (err) => {
  console.error('Error fetching page:', err);
});
