        /* the choice array for the computer */
        const choiceArray = ['rock','paper','scissors'];
            /*allows computer to randomly select a choice */
            function computerPlay (){
                let randomNumber = Math.floor(Math.random()*choiceArray.length);
                let randomChoice = choiceArray[randomNumber];
                console.log(randomChoice + " the computer's choice");              
                return randomChoice;                
            }

            /* prompts user to type their choice and is working */
            let playerSelection = prompt('Please select rock, paper or scissors');
            /* turns the computer selection into a string*/
            let computerSelection = String(computerPlay());
            
                        
            
            /* single round working */
            function singleRound(playerChoice, computerChoice) {
                /*makes user prompt all lower case */
                playerSelection = playerSelection.toLowerCase();
                /* if user selects rock the game plays different depending */
                
                if (playerSelection === 'rock') {
                    if (computerSelection === 'rock') {
                       return('Computer also chose rock, you drew');
                    } else if (computerSelection == 'paper') {
                        return('Computer chose paper, you lost, unlucky');
                    } else if (computerSelection === 'scissors'){
                        return('Computer chose scissors, you won, congrats!');
                    }
                }
                /* if user selects paper the game plays different depending */ 
                else if (playerSelection === 'paper') {
                    if (computerSelection === 'rock') {
                        return('Computer chose rock, you won');
                    } else if (computerSelection === 'paper') {
                        return('Computer also chose, you drew');
                    } else { 
                        return('Computer chose scissors, you lost')
                    }
                }
                /* if user selects scissors the game plays different console.log(playerSelection);*/
                else if (playerSelection === 'scissors') {
                    if (computerSelection === 'rock') {
                        return('Computer chose rock, you lost');
                    } else if (computerSelection === 'paper') {
                        return('Copmuter chose paper, you won');
                    } else { 
                        return('Computer also chose scissors, you drew');
                    }
                }
                else {
                   return('Please select either rock, paper or scissors');
               }               
            }
            
            /*prints the results of the dunction to the div with the id results so it can be shown on screen*/
            document.getElementById("results").innerHTML = singleRound(playerSelection, computerSelection);
              
            
                
            
            
            
            
