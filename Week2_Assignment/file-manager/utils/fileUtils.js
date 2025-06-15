const fs = require('fs').promises;
const path = require('path');

module.exports = {
  getFileList: async () => {
    const files = await fs.readdir(process.cwd());
    const fileStats = await Promise.all(
      files.map(async file => {
        const stats = await fs.stat(path.join(process.cwd(), file));
        return {
          name: file,
          isDirectory: stats.isDirectory(),
          size: stats.size,
          modified: stats.mtime
        };
      })
    );
    
    // Filtering out the directories and hidden files
    return fileStats.filter(file => !file.isDirectory && !file.name.startsWith('.'));
  }
};