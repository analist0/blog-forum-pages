const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy 'img' and 'css' to '_site'
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  // Date formatting filter
  eleventyConfig.addFilter("dateToRfc3339", function(date) {
    return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
  });

  // Truncate filter
  eleventyConfig.addFilter("truncate", function (str, length) {
    if (typeof str === "string") {
      if (str.length <= length) {
        return str;
      }
      return str.substring(0, length) + "...";
    }
    return str;
  });

  // Create a collection for posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // Define collections for different post types if needed
  // This helps organize different types of content (blog posts, forum threads, etc.)
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  };
};