module.exports = {
    isValidFilename: (filename) => {
      return filename && 
             !filename.includes('/') && 
             !filename.includes('\\') && 
             !filename.includes('..') && 
             filename.trim() === filename;
    }
  };