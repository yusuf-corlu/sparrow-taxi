import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../src/assets/optimized');

// Çıktı klasörünü oluştur
try {
  await fs.mkdir(outputDir, { recursive: true });
} catch (error) {
  console.error('Klasör oluşturma hatası:', error);
}

const optimizeImage = async (inputPath, outputPath, options) => {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Resim boyutlarını ayarla
    if (options.width && metadata.width > options.width) {
      image.resize(options.width, null, { fit: 'inside' });
    }

    // WebP formatına dönüştür
    if (options.toWebP) {
      outputPath = outputPath.replace(/\.[^.]+$/, '.webp');
      image.webp({ quality: options.quality });
    }

    await image.toFile(outputPath);
    console.log(`✓ Optimize edildi: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Hata: ${path.basename(inputPath)}`, error);
  }
};

const processImages = async () => {
  const files = await fs.readdir(inputDir);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    // Resim türüne göre optimizasyon ayarları
    if (file.startsWith('carousel-')) {
      await optimizeImage(inputPath, outputPath, {
        width: 1920,
        quality: 85,
        toWebP: true
      });
    } else if (file.startsWith('standard-') || file.startsWith('vip-') || file.startsWith('security-')) {
      await optimizeImage(inputPath, outputPath, {
        width: 800,
        quality: 85,
        toWebP: true
      });
    } else if (file.includes('ishak') || file.includes('furkan')) {
      await optimizeImage(inputPath, outputPath, {
        width: 400,
        quality: 90,
        toWebP: true
      });
    } else if (file === 'taxi-icon.png') {
      await optimizeImage(inputPath, outputPath, {
        width: 256,
        quality: 90,
        toWebP: false
      });
    }
  }
};

processImages().then(() => {
  console.log('✨ Tüm resimler optimize edildi!');
}); 