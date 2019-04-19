/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  // input = num
  // output = matrix
  // edge case = no solution?
  // if (n === 2 || n === 3) { return null; }
  var piecesOnBoard = 0;
  var solution = new Board({n: n});

  // for each row
  for (let i = 0; i < n; i++) {
    // for each col
    for (let j = 0; j < n; j++) {
      solution.togglePiece(i, j);
      piecesOnBoard++;
      // if there are no conflicts
      if (!solution.hasAnyRowConflicts() && !solution.hasAnyColConflicts()) {
        // if n pieces are on the board
        if (piecesOnBoard === n) {
          // return your solution
          console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
          return solution.rows();
        }
        // else if there are conflicts
      } else {
        // toggle piece back to 0 and try next space
        solution.togglePiece(i, j);
        piecesOnBoard--;
      }
    }
  }
};

window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  let board = new Board({n: n});
  // let row = 0;
 
  var rowsFunction = function (row) {
    if (row === n) {
      solutionCount++;
      return;
    }
  }
  
  for (let col = 0; col < n; col++) {
    board.togglePiece(row, col)
    if (!board.hasAnyRooksConflicts()) {
      rowsFunction(row++);
    }
    board.togglePiece(row, col)
  }
  
  rowsFunction(0);
  return solutionCount;
}
// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such 
// that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
