import React, { Component } from 'react';

export class TicTacToe extends Component {
    constructor() {
        super();
        this.state = {
            board: Array(9).fill(null),
            xIsNext: true,
            winner: null,
            isDraw: false,
        };
    }

    handleClick = (index) => {
        const newboard = [...this.state.board];
        if (newboard[index] || this.state.winner || this.state.isDraw) {
            return;
        }
        newboard[index] = this.state.xIsNext ? 'X' : 'O';

        let winner = null;

        if (
            (newboard[0] && newboard[0] === newboard[1] && newboard[0] === newboard[2]) ||
            (newboard[3] && newboard[3] === newboard[4] && newboard[3] === newboard[5]) ||
            (newboard[6] && newboard[6] === newboard[7] && newboard[6] === newboard[8]) ||
            (newboard[0] && newboard[0] === newboard[3] && newboard[0] === newboard[6]) ||
            (newboard[1] && newboard[1] === newboard[4] && newboard[1] === newboard[7]) ||
            (newboard[2] && newboard[2] === newboard[5] && newboard[2] === newboard[8]) ||
            (newboard[0] && newboard[0] === newboard[4] && newboard[0] === newboard[8]) ||
            (newboard[2] && newboard[2] === newboard[4] && newboard[2] === newboard[6])
        ) {
            winner = this.state.xIsNext ? 'X' : 'O';
        }

        let isDraw = newboard.every((cell) => cell !== null) && !winner;

        this.setState({
            board: newboard,
            xIsNext: !this.state.xIsNext,
            winner: winner,
            isDraw: isDraw,
        });
    };

    getCurrentPlayer = () => {
        return this.state.xIsNext ? 'X' : 'O';
    };

    resetGame = () => {
        this.setState({
            board: Array(9).fill(null),
            xIsNext: true,
            winner: null,
            isDraw: false,
        });
    };

    render() {
        return (
            <>
                <div className="text-center">
                    <h3>Tic Tac Toe .jsx</h3>
                    <div>
                        <h4 className='mt-3'>
                            {this.state.winner ? `${this.state.winner} Is The Winner.` : this.state.isDraw ? 'It\'s a Draw !!' : `Player ${this.getCurrentPlayer()} Turn.`}
                        </h4>
                        <div className="d-flex justify-content-center">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5cm', justifyContent: 'center', alignItems: 'center' }}>
                                {this.state.board && this.state.board.length > 0 && this.state.board.map((symbols, index) => (
                                    <button disabled={this.state.board[index] !== null || this.state.winner !== null || this.state.isDraw} key={index} onClick={() => this.handleClick(index)} style={{ width: '2cm', height: '2cm', boxShadow: '0px 0px 30px 5px rgb(230, 0, 255)', borderRadius: '24px 4px', border: '2px solid black', fontSize: '1cm', color: symbols === 'X' ? 'blue' : symbols === 'O' ? 'red' : 'black', fontWeight: '800' }} className="btn btn-outline-dark m-3" >
                                        {symbols}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button style={{ boxShadow: '0px 0px 5px 2px rgb(230, 0, 255)' }} onClick={() => { this.resetGame() }} className="btn btn-outline-dark col-md-2" >
                            Reset This Game
                        </button>
                    </div>
                </div >
            </>
        );
    }
}

export default TicTacToe;
