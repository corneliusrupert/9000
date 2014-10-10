module.exports = {
  isOver9000: function(html) {
    if (html > 9000) {
      return true;
    } else {
      throw new Error("WHAT?! " + html + " is not over THOUSAND!!!");
    }
  }
};