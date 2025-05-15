let s = [];
let pieces = [];
let flag = 0;
let x = null;
let y = null;

let nextMove = 1;

let icon = [];


let rotated = false;

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




function moveValidation(x , y , i , j)
{
  


      if(pieces[x][y] == 11)
      {
        if(x == i + 1 && y == j && pieces[i][j] == null || x == i + 1 && (y == j + 1 || y ==  j -1) && pieces[i][j] != null)
        {
          return  true;
        }
        else
        {
          false;
        }
      }
      else if(pieces[x][y] == 1)
      {
        
          if((x == i -1  && y == j && pieces[i][j] == null) || x == i - 1 && (y == j + 1 || y ==  j -1) && pieces[i][j]!= null)
          {
            return true;
          }
          else
          {
            false;
          }
      }
      else if(pieces[x][y] == 14 || pieces[x][y] == 4)
      {
        if(Math.abs(x - i) == Math.abs(y - j) && pieces[i][j] == null)
        {
          return true;
        }
        else
        {
          return false;
        }
        
      }
      else if(pieces[x][y] == 15 || pieces[x][y] == 5)
      {
        if(x == i || y == j && pieces[i][j] == null)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else if(pieces[x][y] == 13 || pieces[x][y] == 3)
      {
        if( ((i == x - 1 || i == x + 1) &&  (j ==  y + 2 || j == y -2))  || ((i == x - 2 || i == x + 2) &&  (j ==  y + 1 || j == y -1))&& pieces[i][j] == null)
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
        return true;
      }
    


    }


function Rotate() {
  const board = document.querySelector('.con');
  const squares = document.querySelectorAll('.con section');

  if (!rotated) {
    board.style.transform = 'rotate(180deg)';
    squares.forEach(sq => sq.style.transform = 'rotate(180deg)');
  } else {
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
    flag = 0;
  }
  else
  {

   if(moveValidation( x , y , i , j)) 
   {
      
        s[i][j].style.backgroundImage = `url(${icon[pieces[x][y]]})`;
        pieces[i][j] = pieces[x][y];
        s[x][y].style.backgroundImage = "";
        pieces[x][y] = null;

        flag = 0;
   }
   else
   {
         flag = 0;
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
}





function Start()
{
  
  for(let i = 0 ; i < 8 ; i ++)
  {

    for(let j = 0 ; j < 8 ; j++)
    {
      s[i][j].addEventListener('click', () => {


        if(flag === 0)
        {
           x = i;
            y = j;

            flag =1;
            s[x][y].style.border = "2px solid rgb(202, 196, 13)";
        }
        else if(flag === 1)
        {
          if(i != x || j != y)
          { 
             
            move(s[i][j] , i , j);
          }

          s[x][y].style.border = "";

          flag = 0;
         

        }
        else
        {

        }
  
    });
    }
  }

}