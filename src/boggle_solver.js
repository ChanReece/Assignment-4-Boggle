/**
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */

/**
 * Author: Chandler Bursey-Reece
 * Linted and Reviewed Code
 * */

function findAllSolutions(grid, dictionary) {
    if (grid.length <= 1){
        return [];
    }
    if (dictionary.length == 0){
        return [];
    }
    //convert all to lowercase
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            grid[i][j] = grid[i][j].toLowerCase();
        }
    }
    for(let i = 0; i < dictionary.length; i++){
        dictionary[i] = dictionary[i].toLowerCase();
    }
   
    if (grid.length == 0 || dictionary.length == 0) {
        return false;
    }
    var condition = false;

    function helper(grid, word, index, x, y) {
        let newgrid = [];
        for (var i = 0; i < grid.length; i++){
            newgrid[i] = grid[i].slice();}

        if (index >= (word.length - 1)) {
            condition = true;
        }
        if (index == 0) {
            condition = false;
        }
        let letter = word[index+1];
        // One move
        //right
        let tester;
        if (y < grid.length - 1 && index < word.length-1) {
            tester = word.slice(index+1,  index+3);
            if (newgrid[x][y+1] == "qu" && tester == "qu"){
                letter = word.slice(index+1,  index+3); 
                index = index +1;}
            if (newgrid[x][y+1] == "st" && tester == "st"){
                letter = word.slice(index+1,  index+3);
                index = index +1;
            }
            if (grid[x][y+1] == letter) {
                newgrid[x][y] = null;
                helper(newgrid, word, index+1, x, y+1);
            }
        }
        //down
        if (x < grid.length - 1 && index < word.length-1) {
            tester = word.slice(index+1,  index+3); 
            if (newgrid[x+1][y] == "qu" && tester == "qu"){
                letter = word.slice(index+1,  index+3); 
                index = index +1;}
            if (newgrid[x+1][y] == "st" && tester == "st"){
                letter = word.slice(index+1,  index+3);
                index = index +1;
            }
            if (newgrid[x+1][y] == letter) {
                newgrid[x][y] = null;
                helper(newgrid, word, index+1, x+1, y);
            }
            else{
                letter=word[index+1];
            }
        }
        //left
        if (y > 0 && index < word.length-1) {
            tester = word.slice(index+1,  index+3);
            if (newgrid[x][y-1] == "qu"  && tester == "qu"){
                letter = word.slice(index+1,  index+3); 
                index = index +1;}
            if (newgrid[x][y-1] == "st"  && tester == "st"){
                letter = word.slice(index+1,  index+3);
                index = index +1;
            }
            if (newgrid[x][y-1] == letter) {
                newgrid[x][y] = null;
                helper(newgrid, word, index+1, x, y-1);
            }
        }
        //up
        if (x > 0 && index < word.length-1) {
            tester = word.slice(index+1,  index+3);
            if (newgrid[x-1][y] == "qu"  && tester == "qu"){
                letter = word.slice(index+1,  index+3); 
                index = index +1;}
            if (newgrid[x-1][y] == "st"  && tester == "st"){
                letter = word.slice(index+1,  index+3);
                index = index +1;
            }
            if (newgrid[x-1][y] == letter) {
                newgrid[x][y] = null;
                helper(newgrid, word, index+1, x-1, y);
            }
        }
      
        // Two moves
        //down and right
        if (x < grid.length - 1 && y < grid.length - 1 &&  index < word.length-1) {
            tester = word.slice(index+1,  index+3);
            if (newgrid[x+1][y+1] == "qu"  && tester == "qu"){
                letter = word.slice(index+1,  index+3); 
                index = index +1;}
            if (newgrid[x+1][y+1] == "st"  && tester == "st"){
                letter = word.slice(index+1,  index+3);
                index = index +1;
            }
            if (newgrid[x+1][y+1] == letter) {
                newgrid[x][y] = null;
                helper(newgrid, word, index+1, x+1, y+1);
            }
        }
        //down and left
        if (x < grid.length - 1 && y > 0 &&  index <= word.length-1) {
            tester = word.slice(index+1,  index+3);
            if (newgrid[x+1][y-1] == "qu"  && tester == "qu"){
                letter = word.slice(index+1,  index+3); 
                index = index +1;}
            if (newgrid[x+1][y-1] == "st"  && tester == "st"){
                letter = word.slice(index+1,  index+3);
                index = index +1;
            }
            if (newgrid[x+1][y-1] == letter) {
                newgrid[x][y] = null;
                helper(newgrid, word, index+1, x+1, y-1);
            }
        }
        //up and right
        if (x > 0 && y < grid.length - 1 &&  index <= word.length-1) {
            tester = word.slice(index+1,  index+3);
            if (newgrid[x-1][y+1] == "qu" && tester == "qu"){
                letter = word.slice(index+1,  index+3); 
                index = index +1;}
            if (newgrid[x-1][y+1] == "st" && tester == "st"){
                letter = word.slice(index+1,  index+3);
                index = index +1;
            }
            if (newgrid[x-1][y+1] == letter) {
                newgrid[x][y] = null;
                helper(newgrid, word, index+1, x-1, y+1);
            }
        }
        //up and left
        if (x > 0 && y > 0 &&  index <= word.length-1) {
            tester = word.slice(index+1,  index+3);
            if (newgrid[x-1][y-1] == "qu"  && tester == "qu"){
                letter = word.slice(index+1,  index+3); 
                index = index +1;}
            if (newgrid[x-1][y-1] == "st"  && tester == "st"){
                letter = word.slice(index+1,  index+3);
                index = index +1;
            }
            if (newgrid[x-1][y-1] == letter) {
                newgrid[x][y] = null;
                helper(newgrid, word, index+1, x-1, y-1);
            }
        }

        if (condition === true) {return true;}
        else{return false;}
    }

    function helper2(grid, word) {
        let index = 0;
        for(let i = 0; i < grid.length; i++){
            if (grid[i].includes(word[0])) {
                for(let j = 0; j < grid[i].length; j++){ 
                    if (grid[i][j] == word[0]){
                        if (helper(grid,word,index,i,j) == true) {                  
                            return true;
                        }
                        index = 0;
                        continue;
                    }
                }
            }
            if (word.includes("qu") || word.includes("st")){
                if (grid[i].includes(word.slice(0,2))) {
                    for(let j = 0; j < grid[i].length; j++){             
                        if (grid[i][j] == word.slice(0,2)){
                            if (helper(grid,word,index+1,i,j) == true) {          
                                return true;
                            }
                            index = 0;
                            continue;
                        }
                    }
                }
            
            }
        }
        return false;
    }
   
    var result = [];
    for(let word in dictionary){
        if(helper2(grid, dictionary[word]) == true){
            if(dictionary[word].length > 2){
                result.push(dictionary[word]);
            }
        }
    }    
    return result;
};


export default findAllSolutions;