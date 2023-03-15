const getPageSize = () => {
  const outerHeight = window.outerHeight;
  const clientHeight = document.documentElement.clientHeight;
  return typeof outerHeight != 'undefined' ? Math.max(outerHeight, clientHeight) : clientHeight;
};
export default getPageSize;
