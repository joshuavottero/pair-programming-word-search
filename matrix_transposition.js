
// // joshua vottero and Matthew Woods peer program this function

const transpose = function(matrix) {
  const result = [];
  for (let i = 0; i < matrix[0].length; i ++) {
    const column = [];
    for (let j = 0; j < matrix.length; j++) {
      column.push(matrix[j][i]);
    }
    result.push(column);
  }
  return result;
};


module.exports = transpose;
