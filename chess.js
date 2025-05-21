//To store the section (box for individual piece) in array.
let s = [];

    let arr = [];
            let arr2 = [];
                        

//Stores key of individual pieces -> ex -> pawn(1 or 11(for black)).
let pieces = [];

//To check if it is selected piece or next move
let currentSquare = 'selected';

//Global x , y for (cordination in 2d array of *selected piece)
let x = null;
let y = null;

//Same as x , y (but for cumputer move)
let x2;
let y2;


let nextMove = 1;

let  rotated = false;
let icon = [];

//Determine the next  turn
let Turn = 'white';


//the numbers here shows the key of that perticuler piece.
//icon stores the images according to there key.
icon[1] = 'Images/Chess_plt60.png';
icon[11] = 'Images/pawn-black.png';
icon[3] =  'Images/knight-white.png';               
icon[13] =  'Images/knight-black.png';   
icon[5] =    'Images/rook-white.png';
icon[15] =  'Images/rook-black.png';
icon[10] =  'Images/king-white.png';
icon[20] = 'Images/king-black.png';
icon[4] = 'Images/bishop-white.png';               
icon[14] =  'Images/bishop-black.png';  
icon[9] = 'Images/queen-white.png';
icon[19] = 'Images/queen-black.png';



function changeTurn()
{
  Turn = Turn == 'white' ? 'black' : 'white'; 
}

let value;
function boardValid(x , y )
{
  if(pieces[x][y] === null || pieces[x][y] < 11)  
    return false;

  for(let i = 0 ; i < 8 ; i++)
  {
    for(let j = 0 ; j < 8 ; j++)
    {
      
      //console.log(`cancapcher : ${canCapcher(x , y , i , j)}`);
       //console.log(`movevalidation : ${moveValidation(x , y , i , j)}`);
      if(moveValidation(x , y , i , j) && canCapcher(x , y , i , j) )
      {
        if(pieces[i][j] == null)
        {
          value = 0;
        }
        else
        {
           value = pieces[i][j];
        }
       
        return true;
      }
    }
  }

  return false;

}




function canCapcher(x , y , i , j)
{
    if(pieces[i][j] == null)
    {
      return true;
    }
    else if(pieces[x][y] > 10)
    {
      if(pieces[i][j] < 11)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else
    {
      if(pieces[i][j] > 10)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
}




function sign(value)
{
  if(value > 0)
  {
    return 1;
  }
  else if(value < 0)
  {
    return -1;
  }
  else
  {
    return 0;
  }
}







//check if the path is clear or not for bishop , rook , queen.
function isPathClear(x , y , i , j )
{
  
  
      let x2 = x;
      let y2 = y;
      let DX;
      let DY;

                  //condition for bishop-path check.
                  if(pieces[x][y] == 4 || pieces[x][y] == 14  || pieces[x][y] == 19 || pieces[x][y] == 9)
                  {
                         DX = (x - i) > 0 ? 1 : -1;
                         DY = (y - j) > 0 ? 1 : -1;

                         
                          x2  -= DX;
                          y2 -= DY;

                        while(x2 != i  && y2 != j)
                        {
     
                          if(pieces[x2][y2] != null)
                          { 
          
                            return false;
                          }

                          x2  -= DX;
                          y2 -= DY;
                        }

                         return true;

                  }
                  //condition for Rook-path check.
                  else if(pieces[x][y] == 5 || pieces[x][y] == 15 || pieces[x][y] == 19 || pieces[x][y] == 9)
                  {
                      DX = sign( x - i);
                     DY = sign( y - j);



                              x2  -= DX;
                          y2 -= DY;



                      while(x2 != i || y2 != j)
                        {
        
                          if(pieces[x2][y2] != null)
                          {
                            return false;
                          }

                             x2  = x2 - DX;
                          y2 -= DY;

                        }
                        
                         return true;

                     
                  }
                  else
                  {
                      
                  }

                 
                  
                  
                    while(x2 != i && y2 != j)
                    {
                      x2  = x2 - DX;
                      y2 -= DY;

                    
                     
                      if(pieces[x2][y2] != null)
                      {
                        return false;
                      }
                    }

                    

                    return true;



}

function moveValidationPawn(i , j , pawn)
{

 

  if(pawn == 1)
  {
      
      if(x == 1)
          {
              if((x == i - 2 && y == j && (pieces[i][j] == null && pieces[i - 1][j] == null)) || ((x == i - 1 && y == j && pieces[i][j] == null )|| (x == i - 1  && (y == j - 1 || y ==  j +1) && pieces[i][j] != null) ) )
              {
                return true;
              }
              else
              {
                return false;
              }
              
          }
          else if((x == i - 1 && y == j && pieces[i][j] == null )|| (x == i - 1  && (y == j - 1 || y ==  j +1) && pieces[i][j] != null))
          {
                 //  Rotate();
                   
                  return  true;
          }
        
          else
          {
            return false;
          }
  }
  else
  {
         
          if(x == 6)
          {
              if((x == i + 2 && y == j && (pieces[i][j] == null && pieces[i + 1][j] == null)) || ((x == i + 1 && y == j && pieces[i][j] == null )|| (x == i + 1  && (y == j - 1 || y ==  j +1) && pieces[i][j] != null) ))
              {
                return true;
              }
              else
              {
                return false;
              }
              
          }

          else if((x == i + 1 && y == j && pieces[i][j] == null )|| (x == i + 1  && (y == j - 1 || y ==  j +1) && pieces[i][j] != null) )
          {
                 //  Rotate();
                   
                  return  true;
          }
        
          else
          {
            return false;
          }
  }
}

function moveValidationKnight(x , y , i , j)
{
        if( ((i == x - 1 || i == x + 1) &&  (j ==  y + 2 || j == y -2))  || ((i == x - 2 || i == x + 2) &&  (j ==  y + 1 || j == y -1)))
        {
         // Rotate();
           
          return true;
        }
        else
        {
          return false;
        }
}

function moveValidationRook(x , y , i , j)
{
      
        if((x == i || y == j ) && isPathClear(x , y , i , j))
        {
             //Rotate();
            
          return true;
        }
        else
        {
          return false;
        }
}

function moveValidationQueen(x , y , i , j)
{

    
          if(moveValidationBishop(x ,  y , i , j) || moveValidationRook(x , y , i , j))
          {
            return true;
          }
          else
          {

            false;
          }
}

function moveValidationKing(x , y , i , j)
{
    if( (i == x +1 || i == x - 1 || i == x) && (j == y +1 || j == y - 1 || y == j))
    {
      return true;
    }
    else
    {
      return false;
    }
}




function moveValidationBishop(x , y , i , j)
{


                if(Math.abs(x - i) == Math.abs(y - j) )
                {
                
                    if(isPathClear(x , y , i , j) && canCapcher(x , y , i , j))
                    {

                        return true;         
                    }
                    else
                    {                 
                      return false;
                    }

             
                }
                else
                {
                  return false;
                }

}





function moveValidation(x , y , i , j)
{
  
      if(!canCapcher(x , y , i , j))
      {
        return false;
      }
      else if(Turn == 'white' && pieces[x][y] <= 10)
      {  
              if(pieces[x][y] == 1)
              {
                return moveValidationPawn(i , j , pieces[x][y]);
              }
              else if(pieces[x][y] == 4)
              {
                  return moveValidationBishop(x , y , i , j);
              }
              else if(pieces[x][y] == 5)
              {
                  return moveValidationRook(x , y , i , j);
              }
              else if(pieces[x][y] == 3)
              {
                return moveValidationKnight(x , y , i , j)
              }
              else if(pieces[x][y] == 9)
              {
                return moveValidationQueen(x , y , i , j);
              }
              else if(pieces[x][y] == 10)
              {
                return moveValidationKing(x , y , i , j);
              }
              else
              {
               
              }
      }

      else if(pieces[x][y] >10)
      {
              if(pieces[x][y] == 11)
              {
                if(moveValidationPawn(i , j ,pieces[x][y]))
                {
                  return true;
                }
                else
                {
                  return false;
                }

              }
              else if(pieces[x][y] == 14)
              {  
                return moveValidationBishop(x , y , i , j);
              }
              else if(pieces[x][y] == 15)
              {
                return moveValidationRook(x , y , i , j);
              }
              else if(pieces[x][y] == 13)
              {
                return moveValidationKnight(x  , y , i , j);
              }
              else if(pieces[x][y] == 19)
              {
                return moveValidationQueen(x , y , i , j);
              }
              else if(pieces[x][y] == 20)
              {
                return moveValidationKing(x , y , i , j);
              }
              else
              {
               
              }
      }
    }



  function Rotate() 
  {
        const board = document.querySelector('.con');
        const squares = document.querySelectorAll('.con section');

        if (!rotated) 
        {
            board.style.transform = 'rotate(180deg)';
            squares.forEach(sq => sq.style.transform = 'rotate(180deg)');
          } 
        else 
        {
            board.style.transform = 'rotate(0deg)';
            squares.forEach(sq => sq.style.transform = 'rotate(0deg)');
        }

        rotated = !rotated;
  }




function getMajorPiece(value , i)
{
    let arr = [5 , 3 , 4 , 9 , 10 , 4 , 3 , 5];

    if(value < 9)
    {
        return arr[i];
    }
    else
    {
        return arr[i] + 10;
    }
}


function move(box , i , j)
{
      if(pieces[x][y] == null)
      {
        currentSquare  = 'selected';
      }
      else
      {
            if(moveValidation( x , y , i , j) && canCapcher(x , y , i , j)) 
            {  
            
              changeTurn();
                 s[i][j].style.backgroundImage = `url(${icon[pieces[x][y]]})`;
                 pieces[i][j] = pieces[x][y];
                s[x][y].style.backgroundImage = "";
                pieces[x][y] = null;
              currentSquare  ='selected';
            }
            else
            {
              currentSquare = 'selected';
            }

      }

      
     
     
     

    }
   

function setPiece(i , j)
{
      if(s[i][j].value >= 8 && s[i][j].value < 16 || s[i][j].value >= 48 && s[i][j].value < 56 )
      {

            if(s[i][j].value  < 16)
            {
              pieces[i][j] = 1;
              return "Images/Chess_plt60.png";  
            }
            else
            {
                pieces[i][j] = 11;
                return "Images/pawn-black.png";
            }
            
      }     
      else if(s[i][j].value >= 0 && s[i][j].value < 8 || s[i][j].value >= 56 && s[i][j].value < 64 )
      {
              pieces[i][j] = getMajorPiece(s[i][j].value , j);
              return `${icon[pieces[i][j]]}`;
      }
      else
      {
              return " ";
      }
}



function setColor(i , j)
{
  if((i + j) % 2 == 0)
  {
    return "#969fa8";
  }
  else
  {
    return "#4c5b6a"
  }
}


function creatBoard()
{ 
    let num = 0;
    let html = ``;

    for(let i = 0 ; i < 64 ; i ++)
    {
      html += `<section class = "I${i}"></section>`;
    }

    for(let i = 0 ; i < 8 ; i++)
    {
      pieces[i] = [];
    }

    document.querySelector('.con').innerHTML = html;



    for(let i = 0 ; i < 8 ; i ++)
    {
        s[i] = [];
      for(let j = 0 ; j < 8 ; j++)
      {
        s[i][j] = document.querySelector(`.I${num}`);
        s[i][j].value = num;
        num++;
      }
    }

    
  for(let i = 0 ; i < 8 ; i ++)
    {
      for(let j = 0 ; j < 8 ; j++)
      {
        s[i][j].style.backgroundColor = `${setColor(i , j)}`;
        s[i][j].style.backgroundImage =  `url(${setPiece(i , j)})`;

      }
    }




    Rotate();
}

function computervalid()
{
    for(let i = 0 ; i < 8 ; i++)
    {
      for(let j = 0 ; j < 8 ; j++)
      {
          if(moveValidation(x , y , i , j))
          {
            return true;
          }

          
      }
    }

    return false;
}

let arr3 = [];

function computerMove() {
 
    setTimeout(() => {
      

      
        let a = 0;
        let  b = 0;
                               
        

        if(  currentSquare == 'selected')
        {

          arr = [];
          arr2 = [];
          arr3 = [];
              x2 = Math.floor(Math.random() * 8);
                            y2 = Math.floor(Math.random() * 8);
       
                          /*while((pieces[x2][y2] == null || pieces[x2][y2] < 11) )
                          {
                              x2 = Math.floor(Math.random() * 8);
                              y2 = Math.floor(Math.random() * 8);         
                          } */

                         
                          for(let i = 0 ; i < 8 ; i++)
                          {
                            for(let j = 0 ; j < 8 ; j++)
                            {
                               
                              if(pieces[i][j] > 10 && boardValid(i , j))
                              {
 
                                 arr3.push(value);
                                arr.push(i);
                                arr2.push(j);

                                value = 0;

                              }
                             
                                
                            }
                          }

                          let max = 0;
                          let index = 0;
                          for(let i = 0 ; i < arr3.length ; i++)
                          {
                              if(arr3[i] > max)
                              {
                                max = arr3[i];
                                index = i;
                              }

                          }

                           

                           rand = index;
                           
                           x2 = arr[rand];
                            y2 = arr2[rand];   


                          if((pieces[x2][y2] == null || pieces[x2][y2] < 11 )  || index == 0)
                          {
                            while(((pieces[x2][y2] == null || pieces[x2][y2] < 11) ) || computervalid(x2 , y2) )
                            {
                                x2 = Math.floor(Math.random() * 8);
                                y2 = Math.floor(Math.random() * 8);         
                            } 
                          }



                          if(arr.length == 0)
                          {
                            alert("No match found");
                            return;
                            
                          }


                           //let rand = Math.floor(Math.random() * arr.length );
                            
                           //alert(arr.length);
                          //alert(rand);
                          
                          //alert(arr[rand]);
                          //alert(arr2[rand]);
                         
 
                          s[x2][y2].style.border = "2px solid rgb(255, 0, 0)";

                           Turn = 'black';   
                          s[x2][y2].click();
        }
          else
          {
                      value = 0;
                      let I = [];
                      let J = [];

                      let ca = 0;

                     for(let i = 0 ; i < 8 ; i++)
                      {
                        for(let j = 0 ; j < 8 ; j++)
                        {
                          
                          //console.log(`cancapcher : ${canCapcher(x , y , i , j)}`);
                          //console.log(`movevalidation : ${moveValidation(x , y , i , j)}`);
                          if(moveValidation(x , y , i , j) && canCapcher(x , y , i , j) )
                          {
                             I[ca] = i;
                              J[ca] = j;
                              ca++;

                          }
                        }
                      }

                      

                    

                      let index = 0;
                      let max = 0;
                      for(let i = 0 ; i < I.length ; i++)
                      {
                        if(pieces[I[i]][J[i]] > max)
                          {
                            max = pieces[I[i]][J[i]];
                            index = i;
                          }
                        
                      }
                      

                  
                              /*x2 = Math.floor(Math.random() * 8);
                              y2 = Math.floor(Math.random() * 8);

                             
                           
                            while(!moveValidation(x , y , x2 , y2) )
                            {
                                x2 = Math.floor(Math.random() * 8);
                                y2 = Math.floor(Math.random() * 8);

                        
                                
                            }*/

                          
                              Turn = 'black';  
                                    
                            s[I[index]][J[index]].click();
          }
        
    }, 500); 
}





function Start()
{
  
  for(let i = 0 ; i < 8 ; i ++)
  {

    for(let j = 0 ; j < 8 ; j++)
    {

    
      s[i][j].addEventListener('click', () => {

        if(Turn == 'white')
        {
              if(currentSquare  == 'selected')
              {
                x = i;
                  y = j;

                  currentSquare ='next';
                  s[x][y].style.border = "2px solid rgb(255, 0, 0)";
              }
              else if(currentSquare == 'next')
              {
                if(i != x || j != y)
                { 

                  move(s[i][j] , i , j);
                    
                }

                s[x][y].style.border = "";

               currentSquare = 'selected';

                 
                  computerMove();
              

              }
              else
              {
                
              }
        }
        else
        {
              if(currentSquare == 'selected')
              {
                
                x = i;
                  y = j;

                  currentSquare = 'next';
                  s[x][y].style.border = "2px solid rgb(255, 0, 0)";
                  computerMove();
              }
              else if( currentSquare == 'next')
              {
                


                
                if(i != x || j != y)
                { 

                  move(s[i][j] , i , j);
                    
                }

                s[x][y].style.border = "";

               currentSquare = 'selected'
              

              }
              else
              {

              }
        }
        
  
    });
    }
  }

}