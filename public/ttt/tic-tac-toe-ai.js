/**
 * Tic-Tac-Toe AI Opponent System
 * 
 * Features:
 * - Minimax algorithm with alpha-beta pruning
 * - Multiple difficulty levels (Easy, Medium, Hard)
 * - Strategic opening moves and endgame scenarios
 * - Complete game state management
 * - Win condition detection and move validation
 * 
 * Author: GameLogicAnalyst Agent - Hive Mind Collective
 */

class TicTacToeAI {
    constructor(difficulty = 'medium') {
        this.difficulty = difficulty.toLowerCase();
        this.playerSymbol = 'X';
        this.aiSymbol = 'O';
        this.maxDepth = this.getMaxDepth();
        
        // Win patterns for fast evaluation
        this.winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
        
        // Strategic positions (center, corners, edges)
        this.strategicPositions = {
            center: 4,
            corners: [0, 2, 6, 8],
            edges: [1, 3, 5, 7]
        };
    }
    
    /**
     * Get maximum search depth based on difficulty
     */
    getMaxDepth() {
        switch (this.difficulty) {
            case 'easy': return 1;      // Very shallow search
            case 'medium': return 5;    // Moderate search
            case 'hard': return 9;      // Full search (perfect play)
            default: return 5;
        }
    }
    
    /**
     * Make AI move based on current board state
     * @param {Array} board - Current board state (9 elements, null/X/O)
     * @returns {number} - Position index (0-8) for AI move
     */
    makeMove(board) {
        if (!this.isValidBoard(board)) {
            throw new Error('Invalid board state provided');
        }
        
        const availableMoves = this.getAvailableMoves(board);
        if (availableMoves.length === 0) {
            throw new Error('No available moves on the board');
        }
        
        switch (this.difficulty) {
            case 'easy':
                return this.makeEasyMove(board, availableMoves);
            case 'medium':
                return this.makeMediumMove(board, availableMoves);
            case 'hard':
                return this.makeHardMove(board);
            default:
                return this.makeMediumMove(board, availableMoves);
        }
    }
    
    /**
     * Easy AI: Random moves with occasional strategic play
     */
    makeEasyMove(board, availableMoves) {
        // 20% chance to make a strategic move
        if (Math.random() < 0.2) {
            const strategicMove = this.findStrategicMove(board);
            if (strategicMove !== -1) {
                return strategicMove;
            }
        }
        
        // Otherwise random move
        return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }
    
    /**
     * Medium AI: Mix of strategic and optimal play
     */
    makeMediumMove(board, availableMoves) {
        // First move: prefer center or corner
        if (availableMoves.length === 9) {
            return this.strategicPositions.center;
        }
        
        // Check for immediate win
        const winMove = this.findWinningMove(board, this.aiSymbol);
        if (winMove !== -1) return winMove;
        
        // Block player win
        const blockMove = this.findWinningMove(board, this.playerSymbol);
        if (blockMove !== -1) return blockMove;
        
        // 70% chance to use minimax, 30% strategic/random
        if (Math.random() < 0.7) {
            return this.minimax(board, 0, true, -Infinity, Infinity).position;
        } else {
            const strategicMove = this.findStrategicMove(board);
            return strategicMove !== -1 ? strategicMove : availableMoves[0];
        }
    }
    
    /**
     * Hard AI: Perfect play using minimax with alpha-beta pruning
     */
    makeHardMove(board) {
        // Opening book for optimal first moves
        const availableMoves = this.getAvailableMoves(board);
        if (availableMoves.length === 9) {
            return this.strategicPositions.center;
        }
        
        if (availableMoves.length === 8) {
            // If center taken, take corner
            if (board[this.strategicPositions.center] === this.playerSymbol) {
                return this.strategicPositions.corners[0];
            }
            // If corner taken, take center
            return this.strategicPositions.center;
        }
        
        // Use minimax for optimal play
        return this.minimax(board, 0, true, -Infinity, Infinity).position;
    }
    
    /**
     * Minimax algorithm with alpha-beta pruning
     * @param {Array} board - Current board state
     * @param {number} depth - Current search depth
     * @param {boolean} isMaximizing - Whether AI is maximizing
     * @param {number} alpha - Alpha value for pruning
     * @param {number} beta - Beta value for pruning
     * @returns {Object} - {score, position}
     */
    minimax(board, depth, isMaximizing, alpha, beta) {
        const winner = this.checkWinner(board);
        
        // Terminal states
        if (winner === this.aiSymbol) return { score: 10 - depth, position: -1 };
        if (winner === this.playerSymbol) return { score: depth - 10, position: -1 };
        if (this.isBoardFull(board) || depth >= this.maxDepth) {
            return { score: this.evaluateBoard(board), position: -1 };
        }
        
        const availableMoves = this.getAvailableMoves(board);
        let bestMove = { score: isMaximizing ? -Infinity : Infinity, position: availableMoves[0] };
        
        for (const move of availableMoves) {
            // Make move
            const newBoard = [...board];
            newBoard[move] = isMaximizing ? this.aiSymbol : this.playerSymbol;
            
            // Recursive call
            const result = this.minimax(newBoard, depth + 1, !isMaximizing, alpha, beta);
            
            // Update best move
            if (isMaximizing) {
                if (result.score > bestMove.score) {
                    bestMove = { score: result.score, position: move };
                }
                alpha = Math.max(alpha, result.score);
            } else {
                if (result.score < bestMove.score) {
                    bestMove = { score: result.score, position: move };
                }
                beta = Math.min(beta, result.score);
            }
            
            // Alpha-beta pruning
            if (beta <= alpha) break;
        }
        
        return bestMove;
    }
    
    /**
     * Evaluate board position for non-terminal states
     */
    evaluateBoard(board) {
        let score = 0;
        
        // Evaluate each win pattern
        for (const pattern of this.winPatterns) {
            const line = pattern.map(pos => board[pos]);
            score += this.evaluateLine(line);
        }
        
        // Bonus for center control
        if (board[this.strategicPositions.center] === this.aiSymbol) score += 3;
        if (board[this.strategicPositions.center] === this.playerSymbol) score -= 3;
        
        // Bonus for corners
        for (const corner of this.strategicPositions.corners) {
            if (board[corner] === this.aiSymbol) score += 2;
            if (board[corner] === this.playerSymbol) score -= 2;
        }
        
        return score;
    }
    
    /**
     * Evaluate a single line (3 positions)
     */
    evaluateLine(line) {
        const aiCount = line.filter(cell => cell === this.aiSymbol).length;
        const playerCount = line.filter(cell => cell === this.playerSymbol).length;
        const emptyCount = line.filter(cell => cell === null).length;
        
        // Can't win this line if opponent has pieces
        if (aiCount > 0 && playerCount > 0) return 0;
        
        if (aiCount === 3) return 100;
        if (playerCount === 3) return -100;
        if (aiCount === 2 && emptyCount === 1) return 10;
        if (playerCount === 2 && emptyCount === 1) return -10;
        if (aiCount === 1 && emptyCount === 2) return 1;
        if (playerCount === 1 && emptyCount === 2) return -1;
        
        return 0;
    }
    
    /**
     * Find immediate winning move
     */
    findWinningMove(board, symbol) {
        for (const move of this.getAvailableMoves(board)) {
            const testBoard = [...board];
            testBoard[move] = symbol;
            if (this.checkWinner(testBoard) === symbol) {
                return move;
            }
        }
        return -1;
    }
    
    /**
     * Find strategic move (center, corners, etc.)
     */
    findStrategicMove(board) {
        // Prefer center
        if (board[this.strategicPositions.center] === null) {
            return this.strategicPositions.center;
        }
        
        // Then corners
        for (const corner of this.strategicPositions.corners) {
            if (board[corner] === null) return corner;
        }
        
        // Finally edges
        for (const edge of this.strategicPositions.edges) {
            if (board[edge] === null) return edge;
        }
        
        return -1;
    }
    
    /**
     * Get all available moves on the board
     */
    getAvailableMoves(board) {
        return board.map((cell, index) => cell === null ? index : null)
                   .filter(index => index !== null);
    }
    
    /**
     * Check if board is valid
     */
    isValidBoard(board) {
        if (!Array.isArray(board) || board.length !== 9) return false;
        
        let xCount = 0, oCount = 0;
        for (const cell of board) {
            if (cell === 'X') xCount++;
            else if (cell === 'O') oCount++;
            else if (cell !== null) return false;
        }
        
        // X goes first, so X count should be equal or one more than O
        return Math.abs(xCount - oCount) <= 1;
    }
    
    /**
     * Check if board is full
     */
    isBoardFull(board) {
        return board.every(cell => cell !== null);
    }
    
    /**
     * Check for winner
     * @param {Array} board - Board state
     * @returns {string|null} - Winner symbol or null
     */
    checkWinner(board) {
        for (const pattern of this.winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }
    
    /**
     * Check if game is over
     */
    isGameOver(board) {
        return this.checkWinner(board) !== null || this.isBoardFull(board);
    }
    
    /**
     * Get game result
     */
    getGameResult(board) {
        const winner = this.checkWinner(board);
        if (winner) return winner === this.aiSymbol ? 'AI_WIN' : 'PLAYER_WIN';
        if (this.isBoardFull(board)) return 'DRAW';
        return 'ONGOING';
    }
    
    /**
     * Reset AI for new game
     */
    reset() {
        // Nothing to reset for this stateless AI
    }
    
    /**
     * Set difficulty level
     */
    setDifficulty(difficulty) {
        this.difficulty = difficulty.toLowerCase();
        this.maxDepth = this.getMaxDepth();
    }
    
    /**
     * Get current difficulty
     */
    getDifficulty() {
        return this.difficulty;
    }
}

/**
 * Game Manager Class - Handles complete game flow
 */
class TicTacToeGame {
    constructor(difficulty = 'medium') {
        this.ai = new TicTacToeAI(difficulty);
        this.board = new Array(9).fill(null);
        this.currentPlayer = 'X'; // Human player starts
        this.gameHistory = [];
        this.gameStats = {
            playerWins: 0,
            aiWins: 0,
            draws: 0,
            totalGames: 0
        };
    }
    
    /**
     * Make a move on the board
     */
    makeMove(position, player = null) {
        if (player === null) player = this.currentPlayer;
        
        if (!this.isValidMove(position)) {
            throw new Error('Invalid move');
        }
        
        this.board[position] = player;
        this.gameHistory.push({ position, player, board: [...this.board] });
        
        if (!this.ai.isGameOver(this.board)) {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
        
        return this.getGameState();
    }
    
    /**
     * Make AI move
     */
    makeAIMove() {
        if (this.currentPlayer !== 'O' || this.ai.isGameOver(this.board)) {
            throw new Error('Not AI turn or game is over');
        }
        
        const aiMove = this.ai.makeMove(this.board);
        return this.makeMove(aiMove, 'O');
    }
    
    /**
     * Check if move is valid
     */
    isValidMove(position) {
        return position >= 0 && position <= 8 && this.board[position] === null;
    }
    
    /**
     * Get current game state
     */
    getGameState() {
        return {
            board: [...this.board],
            currentPlayer: this.currentPlayer,
            winner: this.ai.checkWinner(this.board),
            gameResult: this.ai.getGameResult(this.board),
            isGameOver: this.ai.isGameOver(this.board),
            availableMoves: this.ai.getAvailableMoves(this.board),
            difficulty: this.ai.getDifficulty(),
            moveCount: this.gameHistory.length
        };
    }
    
    /**
     * Start new game
     */
    newGame(playerGoesFirst = true) {
        this.board = new Array(9).fill(null);
        this.currentPlayer = playerGoesFirst ? 'X' : 'O';
        this.gameHistory = [];
        
        // If AI goes first, make opening move
        if (!playerGoesFirst) {
            const aiMove = this.ai.makeMove(this.board);
            this.makeMove(aiMove, 'O');
        }
        
        return this.getGameState();
    }
    
    /**
     * Finish current game and update stats
     */
    finishGame() {
        const result = this.ai.getGameResult(this.board);
        this.gameStats.totalGames++;
        
        switch (result) {
            case 'PLAYER_WIN':
                this.gameStats.playerWins++;
                break;
            case 'AI_WIN':
                this.gameStats.aiWins++;
                break;
            case 'DRAW':
                this.gameStats.draws++;
                break;
        }
        
        return {
            result,
            stats: { ...this.gameStats },
            gameHistory: [...this.gameHistory]
        };
    }
    
    /**
     * Get game statistics
     */
    getStats() {
        return { ...this.gameStats };
    }
    
    /**
     * Set AI difficulty
     */
    setDifficulty(difficulty) {
        this.ai.setDifficulty(difficulty);
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TicTacToeAI, TicTacToeGame };
}

// Global scope for direct HTML usage
if (typeof window !== 'undefined') {
    window.TicTacToeAI = TicTacToeAI;
    window.TicTacToeGame = TicTacToeGame;
}