function getTimeAgo(timestamp) {
    const now = new Date();
    const timeElapsed = now - timestamp;
  
    // Calculate time differences in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;
  
    if (timeElapsed < minute) {
      return Math.floor(timeElapsed / 1000) + ' seconds ago';
    } else if (timeElapsed < hour) {
      return Math.floor(timeElapsed / minute) + ' minutes ago';
    } else if (timeElapsed < day) {
      return Math.floor(timeElapsed / hour) + ' hours ago';
    } else if (timeElapsed < month) {
      return Math.floor(timeElapsed / day) + ' days ago';
    } else if (timeElapsed < year) {
      return Math.floor(timeElapsed / month) + ' months ago';
    } else {
      return Math.floor(timeElapsed / year) + ' years ago';
    }
  }

  module.exports = {getTimeAgo}
