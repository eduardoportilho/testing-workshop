export default arrayify
// Here's where you'll write arrayify. Look at
// `api/src/routes/utils/arrayify.js` for instructions.

function arrayify(arg) {
  if (arg) {
    return Array.isArray(arg) ? arg : [arg]
  }
  return []
}
