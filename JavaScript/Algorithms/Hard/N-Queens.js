/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
    const result = [];

    // Helper function to check if a queen can be placed at a given row and column
    function canPlaceQueen(board, row, col) {
        // Check if there's already a queen in the same column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === "Q") {
                return false;
            }
        }

        // Check if there's already a queen in the same diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === "Q") {
                return false;
            }
        }

        // Check if there's already a queen in the same diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === "Q") {
                return false;
            }
        }

        return true;
    }

    // Helper function to backtrack and find solutions
    function backtrack(board, row) {
        // If we've reached the end of the board, we've found a solution
        if (row === n) {
            result.push(board.map(row => row.join("")));
            return;
        }

        // Try to place a queen in each column of the current row
        for (let col = 0; col < n; col++) {
            if (canPlaceQueen(board, row, col)) {
                // Place the queen and move on to the next row
                board[row][col] = "Q";
                backtrack(board, row + 1);
                // Backtrack by removing the queen from the board
                board[row][col] = ".";
            }
        }
    }

    // Initialize the board to all empty cells
    const board = Array(n).fill().map(() => Array(n).fill("."));
    backtrack(board, 0);

    return result;
}
