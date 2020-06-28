function rot13(str) {
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str.replace(/[A-Z]/g, s => abc[(abc.indexOf(s)+13)%26]);
};

/*
function rotNum(str, num) {
  return str.replace(/[A-Z]/g, s => String.fromCharCode(s.charCodeAt()%26-13+65+num));
};
*/
