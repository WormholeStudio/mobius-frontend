/**
 *  截断钱包账号
 */
export const shortCutOfAccountHash = (hash) => {
  return hash.replace(/^0x\w{4}(.*)\w{4}$/, (match, p1, offset, string) => {
    return string.replace(p1, '...');
  });
};

/**
 * hex to string
 */
export const hexToStr = (str) => {
  var hex = str.toString().replace(/^0x/, '');
  var ret = '';

  for (var n = 0; n < hex.length; n += 2) {
    ret += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return ret.toString();
};

/**
 * Token Struct to string
 */
export const toTokenString = ({ addr = '', module_name = '', name = '' }) => {
  if (!addr || !module_name || !name) return '';
  return `${addr}::${hexToStr(module_name)}::${hexToStr(name)}`;
};