import React, { Component } from 'react';

class Header extends Component {
    generateLetterButtons() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
            <button>
                {letter}
            </button>
        ));
    }

    render() {
        return (
            <div>
                <h1>Recipe Finder</h1>
                <p>Get Recipes By Letter</p>
                {this.generateLetterButtons()}
                <p>Get Recipes By Keyword</p>
                <form>
                    <input type='text' />
                    <input type='submit' value='Submit' />
                </form>
                <p>Get Random Recipe</p>
                <button>Submit</button>
            </div>
        );
    }
}

export default Header;