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

// return the number of nxn chessboards that exist, with n rooks placed such 
// that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = []; // fixme
  
  // for each starting position
  for (let k = 0; k < n*n; k++) {
    let piecesOnBoard = 0;
    let solution = new Board({n: n});
    solution.togglePiece(0, k);
    piecesOnBoard++;
    // for each row
    for (let i = 0; i < n; i++) {
      // for each col
      for (let j = 0; j < n; j++) {
        if (solution.get(i)[j] !== 1){
          solution.togglePiece(i, j);
          piecesOnBoard++;
        }
        // if there are no conflicts
        if (!solution.hasAnyRowConflicts() && !solution.hasAnyColConflicts()) {
          // if n pieces are on the board
          if (piecesOnBoard === n) {
            console.log(solution.rows());
            // return your solution
            // TODO
            // check if already in array and push
            var numberSolution = [];
            numberSolution.push(solution.rows())            
            var answer = numberSolution.join("");
            if(!solutionCount.includes(answer)){
              solutionCount.push(answer);
              //console.log(solutionCount);
            }
          }
          // else if there are conflicts
        } else {
          // toggle piece back to 0 and try next space
          solution.togglePiece(i, j);
          piecesOnBoard--;
        }
      }
    }
  }
  return solutionCount.length;
};

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
