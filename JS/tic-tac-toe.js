const { render } = require("nunjucks");

const tic_tac_toe = {
    board: ['','','','','','','','',''],
    simbols: {
        opition: ['X','O'],
        turn_index: 0,
        change: function(){
            this.turn_index = (this.turn_index === 0 ? 1 : 0)
        }
     
},
    container_element: null,
    gameover: false,
    winning_sequences: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

    init: function(container){
        this.container_element = container;
    },

    make_play:function(position){
        if (this.gameover) return false;
        if (this.board[position] === ''){
            this.board[position] = this.simbols.opition [this.simbolos.turn_index];
            this.draw();
            let winning_sequences_index = this.chack_winning_sequences 
            (this.simbols.opition [this.simbolos.turn_index]);
            if (winning_sequences_index >= 0 ){
                this.game_is_over();
            } else {
                this.simbols.change();               
            }
               return true;
            }else {
               return false;

        }
    },

    game_is_over: function(){
        this.gameover = true;
        console.log("GAME OVER");
    },

    start: function(){
        this.board.fill('');
        this.draw();
        this.gameover = false;
        
        function Mudarestado() {
            var display = document.getElementById(el).style.display;
            if (display == "none")
              document.getElementById(el).style.display = 'block';
            else
              document.getElementById(el).style.display = 'none';
          }
    },


    chack_winning_sequences: function(simbol){
        for (i in this.winning_sequences){
            if (this.board[this.winning_sequences[1][0] ] == simbol &&
                this.board[this.winning_sequences[1][1] ] == simbol &&
                this.board[this.winning_sequences[1][2] ] == simbol ){
                    console.log('sequencia vencedora:' + 1);
                    return 1;
               }
        }
        return -1;
    },
    

    draw: function() {
        let content = '';

        for (i in  this.board) {
            content += '<div onclick="tic_tac_toe.make_play('+ 1 +')">' + this.board[i] + '</div>';
        }

        this.container_element.innerHTLM = content;
    }
};