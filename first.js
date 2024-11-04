// // // // // 
// // // // let num= prompt("Enter a number:")
// // // // if(num%5===0){
// // // //     console.log(num,"is a number of 5");
// // // // }
// // // // else{
// // // //     console.log(num,"is not a multiple of 5");
// // // // }

// // // let str="rahul";
// // // let size=0;
// // // for(let i of str){

// // //     console.log("i=" ,i);
// // //    size++;
// // // }
// // // console.log("size of " ,size)

// // let game="25";
// // let num=prompt("guess the number ");

// // while (game != num ){
// //      num=  prompt("enter number is not corect");
// // }
// // console.log("congratulation , you enter the correct nunber ");


// // let str=" rahul gupta bhaiya";
// //  console.log(str.slice(2,9));

// let usrname=prompt("Enter you name");

// let len="@"+ usrname+usrname.length();

//  console.log(len);


// let usrname = prompt("Enter your name");

// let len = "@" + usrname + usrname.length;

// console.log(len);

// let marks=[85,97,44,73,42,22];
// let sum =0;
// for(let i=0;i<marks.length;i++)
// sum=sum + marks[i];
// averag= sum/marks.length;
// console.log(averag);

// let companies=["b","m","u","g","i","n"];
//  companies.splice(2,1,"m");
// console.log(companies);


// let arr=[1,2,3,4,5];             ////for eACH method;
//   let forEach=(arr)=>{
//     console.log(arr*arr);

// };
// console.log(forEach);


// let arr=[1,2,3,4,5];
//   let newarr =arr.filter((val  )=>{
//     return val%2==0;

// });
//  console.log(newarr);



// let arr=[1,2,3,4,5,4,5,6,19,7,3,3]; ///reduce method  ---give single  value 
//   let result= arr.reduce((res,cur )=>{
//     return res+cur;

// });
//  console.log(result);

//filter out marks of student whose marks are more than 90+;

// let marks=[34,5,67,90,34,99,34,98,91];
// let newmarks=marks.filter((val)=>{
//     return val>90;
// });
// console.log(newmarks);


/////// take input and create an arry;

// let n=prompt("enter a number:");
// let arr=[];
// for(let i=1;i<=n;i++){
//    arr[i-1]=i;
// }
// console.log(arr);
// let sum=arr.reduce((res,curr)=>{
//     return res+curr;
// });
//     console.log(sum);

    /// factorial of n nuber 
    
// let arr=[1,2,3,4,5];
// let newarr =arr.filter((val  )=>{
//   return val%2==0;

// });
// console.log(newarr)
  // let newbtn=document.createElement("button");
  // newbtn.innerText="click me!";
  //  newbtn.style.color="white";
  //  newbtn.style.backgroundColor="red";

  //  document.querySelector("boby").prepend(newbtn);


  //project js

  let boxes = document.querySelectorAll(".box");
  let resetBtn = document.querySelector("#reset-btn");
  let newGameBtn = document.querySelector("#new-btn");
  let msgContainer = document.querySelector(".msg-container");
  let msg = document.querySelector("#msg");
  
  let turnO = true; //playerX, playerO
  let count = 0; //To Track Draw
  
  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  
  const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };
  
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      count++;
  
      let isWinner = checkWinner();
  
      if (count === 9 && !isWinner) {
        gameDraw();
      }
    });
  });
  
  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  
  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  
  const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };
  
  newGameBtn.addEventListener("click", resetGame);
  resetBtn.addEventListener("click", resetGame);