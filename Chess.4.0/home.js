//how to check winning
//when i will lose it will not let me take any step so i need to give logic for this scenario to give winning.


var turn = 1;   //keep track of turn
var array = [];  //stores the possible position of particular element
var array2 = [];  //used to store array before checking_check function as array is changed during that function.
var name_3;
var flag = 0;  //keeps track of check if flag = 0 means no check and if it is 1 then check.
var king_1_moved = 0;
var king_2_moved = 0;
var elephant_1_1 = 0;
var elephant_1_2 = 0;
var elephant_2_1 = 0;
var elephant_2_2 = 0;
var count = 0;
var stop_game = 0;
var store_slave = [];
var temp_store_slave = [];


Initialize();   //initializes the chess board


/*                                                                    Basic Functions                                   */
/*                                                                    Basic Functions                                   */
/*                                                                    Basic Functions                                   */
/*                                                                    Basic Functions                                   */
/*                                                                    Basic Functions                                   */



//It disable all buttons when needed
function disable_all(){

    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            document.getElementById(`${i}${j}`).disabled = true;
            document.getElementById(`${i}${j}`).style.opacity = 0.5;
            document.getElementById(`${i}${j}`).style.borderColor = "rgb(129, 122, 122)";
        }
    }

}

//it enables all buttons when needed.
function enable_all(){

    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            document.getElementById(`${i}${j}`).disabled = false;
            document.getElementById(`${i}${j}`).style.opacity = 1;
            document.getElementById(`${i}${j}`).style.borderColor = "black";
        }
    }

}

//it gives move_it method to the every possible positions of choosen element.
function give_method(){

    for(item = 0; item<array.length; item++){
                
        document.getElementById(`${array[item]}`).disabled = false;
        document.getElementById(`${array[item]}`).style.opacity = 0.9;
        document.getElementById(`${array[item]}`).style.borderColor = "black";
        document.getElementById(`${array[item]}`).setAttribute("onclick","moveit(this)");
    
    }

}

//it gives default method chhosen to the every element.
function default_method(){

    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            document.getElementById(`${i}${j}`).setAttribute("onclick","choosen(this)");
        }
    }

}


//it changes the turn when required.
function change_turn(){

    if(turn == 1){
        turn = 2;
    }
    else{
        turn = 1;
    }

}

//initializes the chess board
function Initialize(){


document.getElementById("00").textContent="1eleph1";
document.getElementById("07").textContent="1eleph2";
document.getElementById("01").textContent="1horse1";
document.getElementById("06").textContent="1horse2";
document.getElementById("02").textContent="1camel1";
document.getElementById("05").textContent="1camel2";
document.getElementById("03").textContent="1queenn";
document.getElementById("04").textContent="1_king_";

document.getElementById("10").textContent="1slave1";
document.getElementById("11").textContent="1slave2";
document.getElementById("12").textContent="1slave3";
document.getElementById("13").textContent="1slave4";
document.getElementById("14").textContent="1slave5";
document.getElementById("15").textContent="1slave6";
document.getElementById("16").textContent="1slave7";
document.getElementById("17").textContent="1slave8";

document.getElementById("70").textContent="2eleph1";
document.getElementById("77").textContent="2eleph2";
document.getElementById("71").textContent="2horse1";
document.getElementById("76").textContent="2horse2";
document.getElementById("72").textContent="2camel1";
document.getElementById("75").textContent="2camel2";
document.getElementById("73").textContent="2queenn";
document.getElementById("74").textContent="2_king_";

document.getElementById("60").textContent="2slave1";
document.getElementById("61").textContent="2slave2";
document.getElementById("62").textContent="2slave3";
document.getElementById("63").textContent="2slave4";
document.getElementById("64").textContent="2slave5";
document.getElementById("65").textContent="2slave6";
document.getElementById("66").textContent="2slave7";
document.getElementById("67").textContent="2slave8";

for(i=2;i<=5;i++){
    for(j=0;j<8;j++){
        document.getElementById(`${i}${j}`).textContent="_______";
    }
}


give();   //gives images to buttons.

}


//checks that the element at the possible position is belongs to active or opposite player.
function got_enemy(i,j,k){

    var name = document.getElementById(`${i}${j}`).textContent;
    if( k == 1){
        if(name[0] == '2'){
            if(name == '2_king_'){
                return 2;  //means there is a check.
            }
            else{
                return 1;   //means he is oppositors
            }
        }
        else{
            return 0;  //means it it active player's element not enemy.
        }
    }
    else{
        if(name[0] == '1'){
            if(name == '1_king_'){
                return 2;    //means there is a check.
            }
            else{
                return 1;    //means he is oppositors
            }
        }
        else{
            return 0;   //means it it active player's element not enemy.
        }
    }

}


/*                                                  Main Portion                                                        */
/*                                                  Main Portion                                                        */
/*                                                  Main Portion                                                        */
/*                                                  Main Portion                                                        */
/*                                                  Main Portion                                                        */



//when we pchoose the element to move, this function is called.
function choosen(selected){
    

    array = [];   //to store the possible movement positions.
    name_3 = selected;  //stores the reference of element that is choosed to do further tasks.
    name = selected.textContent;   //
    
    //it checks whether the choosen element is belongs to the active player or not.
    if((turn == 1 && name[0] == '2') || (turn == 2  && name[0] == '1')){
        
        window.alert("You cant move this element.This is not belongs to you.");
    
    }
    
    
    else
    {

        if( name.includes("horse") )
        {
            
            i = parseInt(selected.id[0]);  //to get the id in terms of row number
            j = parseInt(selected.id[1]);   //to get the id in terms of column bcz after we are i and j to select the exact id from 64.
            
            horse(i,j,turn);
            if(array.length == 0){
                window.alert("this cant move anywhere.");
            }
            else{

                disable_all();           
            
                give_method();
            }
        }

        
        
        else if( name.includes("camel") )
        {
            
            i = parseInt(selected.id[0]);
            j = parseInt(selected.id[1]);
            
            camel_1(i,j,turn);
            camel_2(i,j,turn);
            camel_3(i,j,turn);
            camel_4(i,j,turn);
            if(array.length == 0){
                window.alert("this cant move anywhere.");
            }
            else{

                disable_all();
                give_method();
                
            }
        }
        
        
        
        
        else if(name.includes("eleph"))
        {
            
            i = parseInt(selected.id[0]);
            j = parseInt(selected.id[1]);
            
            elephant_1(i,j,turn);
            elephant_2(i,j,turn);
            elephant_3(i,j,turn);
            elephant_4(i,j,turn);
            castle(i,j,turn);
            if(array.length == 0){
                window.alert("this cant move anywhere.");
            }
            else{

                disable_all();
                give_method();
                
            }
        }





        else if(name.includes("slave"))
        {
            
            i = parseInt(selected.id[0]);
            j = parseInt(selected.id[1]);
            
            slave_main(i,j,turn);
            if(array.length == 0){
                window.alert("this cant move anywhere.");
            }
            else{

                disable_all();
                give_method();
                
            }
        
        }
        
        
        
        else if(name.includes("queenn")){
            
            i = parseInt(selected.id[0]);
            j = parseInt(selected.id[1]);
            
            elephant_1(i,j,turn);
            elephant_2(i,j,turn);
            elephant_3(i,j,turn);
            elephant_4(i,j,turn);
            camel_1(i,j,turn);
            camel_2(i,j,turn);
            camel_3(i,j,turn);
            camel_4(i,j,turn);
            if(array.length == 0){
                window.alert("this cant move anywhere.");
            }
            else{

                disable_all();
                give_method();
                
            }
        
        }
        
        
        
        ///if someone choose blank to move then this will give alert.
        else if(name.includes("_______")){
            
            window.alert("You can not choose this.Please choose again.");
            
        }


        else if(name.includes("king"))
        {
            //checks that where the check is given or not.
            if(flag == 1)
            {
                
                i = parseInt(selected.id[0]);
                j = parseInt(selected.id[1]);
                
                king(i,j,turn); //this will update array.
                if(array.length == 0){
                    window.alert("this cant move anywhere.");
                }
                else{

                    disable_all();
                    give_method();
                    
                }
                
            }
            
            else
            {
                window.alert("King is not in check so it cant move.");
            }

        }




        
    }

}







//this function moves the element and check whether the active player is giving check to opposite or not.
function moveit(button_where_move)
{
    temp_store_slave = [];
    
    for(item=0;item<store_slave.length;item++){
        
        temp_store_slave.push(store_slave[item]);
        
    }
    
    if(name_3.textContent == '1eleph1'){
        elephant_1_1 = 1;
    }
    else if(name_3.textContent == '1eleph2')
    {
        elephant_1_2 = 1;
    }
    else if(name_3.textContent == '2eleph1'){
        elephant_2_1 = 1;
    }
    else if(name_3.textContent == '2eleph2'){
        elephant_2_2 = 1;
    }
    
    if((turn == 1 && button_where_move.textContent == '1_king_' ) || (turn == 2 && button_where_move.textContent == '2_king_'))
    {
        
        
        var temperarory = button_where_move.textContent;
        button_where_move.textContent = name_3.textContent;
        name_3.textContent = temperarory;

    }
    else{
    //checks that the position where this element wll move is opposite's king or not. 
    if(button_where_move.textContent.includes('king')){

        document.getElementById("won").style.zIndex = 1;
        window.alert(`player ${turn} won!`);
        stop_game = 1;
        disable_all();

    }


    //moves the element.
    var temperarory = button_where_move.textContent;
    var temperarory2 = name_3.textContent;
    button_where_move.textContent = name_3.textContent;
    name_3.textContent="_______";

    if(flag == 1){
        flag = 0;
        change_turn();
        
        checking_check(turn);
        
        store_slave = temp_store_slave;
        change_turn();
        if(flag == 1){
            count++;
            if(count == 3){
                change_turn();
                window.alert(`you cant move it. player ${turn} won!`);
                document.getElementById("lose").style.zIndex = 1;
                stop_game = 1;
                disable_all();

            }
            else{
            window.alert(`Check is still there so try another move. Now you have only ${3-count} try to move element.then you will lose`);
            change_turn();
            name_3.textContent = temperarory2;
            button_where_move.textContent = temperarory;
        }
            
        }
        else{
            count = 0;
        }

        
    }

    

}
    if(stop_game == 0){
    //enables all the buttons
    enable_all();

    //gives choosen method to all the buttons
    default_method();
 
    //checks that whether active player is giving check to opposite or not after move.
    checking_check(turn);
    store_slave = temp_store_slave;
    
    //it changes the turn
    change_turn();

    //it sets the images to updated chess board
    give();
  }
  
}


/*                                                      Horse                                                   */
/*                                                      Horse                                                   */
/*                                                      Horse                                                   */
/*                                                      Horse                                                   */
/*                                                      Horse                                                   */










function horse(i,j,k){

    if(i>0 && j>1)
    {
        var compare = document.getElementById(`${i-1}${j-2}`).textContent;
        
        if(compare=="_______" || (got_enemy(i-1,j-2,k) == 1 || got_enemy(i-1,j-2,k) == 2))
        {
            array.push(`${i-1}${j-2}`);
        }

    }

    if(i>0 && j<6)
    {
        var compare = document.getElementById(`${i-1}${j+2}`).textContent;
        
        if(compare=="_______" || (got_enemy(i-1,j+2,k) == 1 || got_enemy(i-1,j+2,k) == 2))
        {
            array.push(`${i-1}${j+2}`);
        }
    }

    if(i<7 && j>1)
    {
        var compare = document.getElementById(`${i+1}${j-2}`).textContent;
        
        if(compare=="_______" || (got_enemy(i+1,j-2,k) == 1 || got_enemy(i+1,j-2,k) == 2))
        {
            array.push(`${i+1}${j-2}`);
        }

    }

    if(i<7 && j<6)
    {    
        var compare = document.getElementById(`${i+1}${j+2}`).textContent;
        
        if(compare=="_______" || (got_enemy(i+1,j+2,k) == 1 || got_enemy(i+1,j+2,k) == 2))
        {
            array.push(`${i+1}${j+2}`);
        }
    }

    if(i>1 && j>0)
    {
        var compare = document.getElementById(`${i-2}${j-1}`).textContent;
        
        if(compare=="_______" || (got_enemy(i-2,j-1,k) == 1 || got_enemy(i-2,j-1,k) == 2))
        {
            array.push(`${i-2}${j-1}`);
        }
    }
    
    if(i<6 && j>0)
    {
        var compare = document.getElementById(`${i+2}${j-1}`).textContent;
        
        if(compare=="_______" || (got_enemy(i+2,j-1,k) == 1 || got_enemy(i+2,j-1,k) == 2))
        {
            array.push(`${i+2}${j-1}`);
        }
    }
    if(i>1 && j<7)
    {
        var compare = document.getElementById(`${i-2}${j+1}`).textContent;
        
        if(compare=="_______" || (got_enemy(i-2,j+1,k) == 1 || got_enemy(i-2,j+1,k) == 2))
        {
            array.push(`${i-2}${j+1}`);
        }
    }

    if(i<6 && j<7)
    {
        var compare = document.getElementById(`${i+2}${j+1}`).textContent;
        
        if(compare=="_______" || (got_enemy(i+2,j+1,k) == 1 || got_enemy(i+2,j+1,k) == 2))
        {
            array.push(`${i+2}${j+1}`);
        }
    }
    


}


/*                                                          camel elephent queen                                                   */
/*                                                          camel elephent queen                                                   */
/*                                                          camel elephent queen                                                   */
/*                                                          camel elephent queen                                                   */
/*                                                          camel elephent queen                                                   */  



function operation(i,j,k)
{
    var compare = document.getElementById(`${i}${j}`).textContent;
    
    if(compare == '_______')
    {
        array.push(`${i}${j}`);
        return 1;
    }

    else if((got_enemy(i,j,k) == 1 )||( got_enemy(i,j,k) == 2))
    {
        array.push(`${i}${j}`);
        return 0;
    }

}




function camel_1(i,j,k)
{

    if(i<7 && j<7)
    {
        s = operation(i+1,j+1,k);
        if (s==1)
        {
            camel_1(i+1,j+1,k)
        }
    }
    }



function camel_2(i,j,k)
{
    if(i<7 && j>0)
    {
        s = operation(i+1,j-1,k);
        if (s==1)
        {
            camel_2(i+1,j-1,k)
        }
    }
}

function camel_3(i,j,k)
{
if(i>0 && j<7)
{
    s = operation(i-1,j+1,k);
    if (s==1)
    {
        camel_3(i-1,j+1,k)
    }
}
}


function camel_4(i,j,k)
{
    if(i>0 && j>0)
    {
        s = operation(i-1,j-1,k);
        if (s==1)
        {
            camel_4(i-1,j-1,k)
        }
    }
}




 

function elephant_1(i,j,k)
{
    if(j<7)
    {
        s = operation(i,j+1,k);
        if (s==1)
        {
            elephant_1(i,j+1,k)
        }
    }
    }



function elephant_2(i,j,k)
{
    if(j>0)
    {
        s = operation(i,j-1,k);
        if (s==1)
        {
            elephant_2(i,j-1,k)
        }
    }
    }


 
function elephant_3(i,j,k)
{
    if(i<7)
    {
        s = operation(i+1,j,k);
        if (s==1)
        {
            elephant_3(i+1,j,k)
        }
    }
    }

function elephant_4(i,j,k)
{
if(i>0)
{
    s = operation(i-1,j,k);
    if (s==1)
    {
        elephant_4(i-1,j,k)
    }
}
}



/*                                              slave                                               */
/*                                              slave                                               */
/*                                              slave                                               */
/*                                              slave                                               */
/*                                              slave                                               */





function slave_main(i,j,k)
{
    
    
    var slave_id = document.getElementById(`${i}${j}`).textContent;
    
    var already_in = 0;
    for(item=0;item<store_slave.length;item++){
        if(store_slave[item] == slave_id){
            already_in = 1;
            break;
        }
    }
    
    if(already_in != 1){
        store_slave.push(slave_id);
    }
    if(k==1 && i<7)
    {
        if(j<7)
        {
            if(got_enemy(i+1,j+1,k) == 1)
            {
                array.push(`${i+1}${j+1}`);
            }
        }
        
        if(j>0)
        {
            if(got_enemy(i+1,j-1,k) == 1)
            {
                array.push(`${i+1}${j-1}`);
            } 
        }
        
        var compare = document.getElementById(`${i+1}${j}`).textContent;
        
        if(compare=='_______')
        {
            array.push(`${i+1}${j}`);
            if(already_in!=1){

                compare = document.getElementById(`${i+2}${j}`).textContent;
            
                if(compare=='_______')
                {
                    array.push(`${i+2}${j}`);
                    
                }
            }
        
        }
    }


    else if(k==2 && i>0)
    {
        if(j<7)
        {
            if(got_enemy(i-1,j+1,k) == 1)
            {
                array.push(`${i-1}${j+1}`);
            }
        }
        
        if(j>0)
        {
            if(got_enemy(i-1,j-1,k) == 1)
            {
                array.push(`${i-1}${j-1}`);
            } 
        }
        
        var compare = document.getElementById(`${i-1}${j}`).textContent;
        
        if(compare=='_______')
        {
            array.push(`${i-1}${j}`);
            if(already_in!=1){

                compare = document.getElementById(`${i-2}${j}`).textContent;
            
                if(compare=='_______')
                {
                    array.push(`${i-2}${j}`);
                    
                }
            }
        }
    }
}


/*                                                              king                                                    */
/*                                                              king                                                    */
/*                                                              king                                                    */
/*                                                              king                                                    */
/*                                                              king                                                    */





function king(i,j,k)
{

    if((i<7 && j<7) && ((document.getElementById(`${i+1}${j+1}`).textContent=='_______') || ((got_enemy(i+1,j+1,k) == 1)||(got_enemy(i+1,j+1,k) == 2)))){
        array.push(`${i+1}${j+1}`);
    }

    if((i>0 && j>0) && ((document.getElementById(`${i-1}${j-1}`).textContent=='_______') || ((got_enemy(i-1,j-1,k) == 1)||(got_enemy(i-1,j-1,k) == 2)))){
        array.push(`${i-1}${j-1}`);
    }

    if((i<7 ) && ((document.getElementById(`${i+1}${j}`).textContent=='_______') || ((got_enemy(i+1,j,k) == 1)||(got_enemy(i+1,j,k) == 2)))){
        array.push(`${i+1}${j}`);
    }

    if((i>0) && ((document.getElementById(`${i-1}${j}`).textContent=='_______') || ((got_enemy(i-1,j,k) == 1)||(got_enemy(i-1,j,k) == 2)))){
        array.push(`${i-1}${j}`);
    }

    if((j>0) && ((document.getElementById(`${i}${j-1}`).textContent=='_______') || ((got_enemy(i,j-1,k) == 1)||(got_enemy(i,j-1,k) == 2)))){
        array.push(`${i}${j-1}`);
    }

    if((j<7) && ((document.getElementById(`${i}${j+1}`).textContent=='_______') || ((got_enemy(i,j+1,k) == 1)||(got_enemy(i,j+1,k) == 2)))){
        array.push(`${i}${j+1}`);
    }

    if((i>0 && j<7) && ((document.getElementById(`${i-1}${j+1}`).textContent=='_______') || ((got_enemy(i-1,j+1,k) == 1)||(got_enemy(i-1,j+1,k) == 2)))){
        array.push(`${i-1}${j+1}`);
    }

    if((i<7 && j>0) && ((document.getElementById(`${i+1}${j-1}`).textContent=='_______') || ((got_enemy(i+1,j-1,k) == 1)||(got_enemy(i+1,j-1,k) == 2)))){
        array.push(`${i+1}${j-1}`);
    }
}
        





/**                                                                Checking check                                                   */
/**                                                                Checking check                                                   */
/**                                                                Checking check                                                   */
/**                                                                Checking check                                                   */
/**                                                                Checking check                                                   */




//this is checking that whether current player giving check or not to opposite player
function checking_check(turn)
{
    array = [];
    enable_all();
    if(turn == 1)
    {
        for(i=0;i<8;i++)
        {
            for(j=0;j<8;j++)
            {
                var temp = document.getElementById(`${i}${j}`).textContent;
                
                if(temp == '1horse1' || temp == '1horse2')
                {
                    horse(i,j,turn);
                }
                
                else if(temp == '1camel1' || temp == '1camel2' )
                {
                    camel_1(i,j,turn);
                    camel_2(i,j,turn);
                    camel_3(i,j,turn);
                    camel_4(i,j,turn);
                }
                
                else if(temp == '1eleph1' || temp == '1eleph2')
                {
                    elephant_1(i,j,turn);
                    elephant_2(i,j,turn);
                    elephant_3(i,j,turn);
                    elephant_4(i,j,turn);
                }
                
                else if(temp == '1queenn')
                {
                    elephant_1(i,j,turn);
                    elephant_2(i,j,turn);
                    elephant_3(i,j,turn);
                    elephant_4(i,j,turn);
                    camel_1(i,j,turn);
                    camel_2(i,j,turn);
                    camel_3(i,j,turn);
                    camel_4(i,j,turn);   
                }
                
                else if(temp.includes("1slave"))
                {
                    slave_main(i,j,turn);
                }
                
                else if(temp == '1_king_')
                {
                    king(i,j,turn);
                }
            }
        }
        
        
        for(i=0;i<array.length;i++)
        {
            var temp = document.getElementById(`${array[i]}`).textContent;
            
            if(temp == '2_king_')
            {
                flag = 1;
                break;
            }
        }

    }
    
    
    else
    {
        for(i=0;i<8;i++)
        {
            for(j=0;j<8;j++)
            {
                var temp = document.getElementById(`${i}${j}`).textContent;
                
                if(temp == '2horse1' || temp == '2horse2'){
                    horse(i,j,turn);
                }
                
                else if(temp == '2camel1' || temp == '2camel2' ){
                    camel_1(i,j,turn);
                    camel_2(i,j,turn);
                    camel_3(i,j,turn);
                    camel_4(i,j,turn);
                }
                
                else if(temp == '2eleph1' || temp == '2eleph2'){
                    elephant_1(i,j,turn);
                    elephant_2(i,j,turn);
                    elephant_3(i,j,turn);
                    elephant_4(i,j,turn);
                }
                
                else if(temp == '2queenn'){
                    elephant_1(i,j,turn);
                    elephant_2(i,j,turn);
                    elephant_3(i,j,turn);
                    elephant_4(i,j,turn);
                    camel_1(i,j,turn);
                    camel_2(i,j,turn);
                    camel_3(i,j,turn);
                    camel_4(i,j,turn);   
                }
                
                else if(temp.includes("2slave")){
                    slave_main(i,j,turn);
                }
                
                else if(temp == '2_king_'){
                    king(i,j,turn);
                }
            }
        }
        
        
        for(i=0;i<array.length;i++)
        {
            var temp = document.getElementById(`${array[i]}`).textContent;
            if(temp == '1_king_')
            {
                flag = 1;
                break;
            }
        }
    }
}


//this given the coresponding images to every button.
function give()
{
    for(i=0;i<8;i++)
    {
        for(j=0;j<8;j++)
        {
            
            var temp = document.getElementById(`${i}${j}`).textContent;
            
            if(temp == '1horse1' || temp == '1horse2'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.horse.png")';
            }
            
            else if(temp == '2horse1' || temp == '2horse2'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.horse.png")';
            }
            
            else if(temp == '1camel1' || temp == '1camel2' ){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.camel.png")';
            }
            
            else if(temp == '2camel1' || temp == '2camel2' ){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.camel.png")';
            }
            
            else if(temp == '1eleph1' || temp == '1eleph2'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.rook.png")';
            }
            
            else if(temp == '2eleph1' || temp == '2eleph2'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.rook.png")';
            }
            
            else if(temp == '1queenn'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.queen.png")';
            }
            
            else if(temp == '2queenn'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.queen.png")';
            }
            
            else if(temp.includes("1slave")){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.pawn.png")';
            }
            
            else if(temp.includes("2slave")){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.pawn.png")';
            }
            
            else if(temp == '1_king_'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.king.png")';
            }
            
            else if(temp == '2_king_'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.king.png")';
            }

            else if(temp == '_______'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/blank.png")';
            }
        }
    }
}









//this checks that whether selected elephent and king is moved or not and check is enabled or not
function castle(i,j,turn)
{
    if (turn == 1)
    {
        if(king_1_moved != 1 && flag != 1){
            if(name_3.textContent[6] == 1)
            {
                if(elephant_1_1!=1)
                {
                    common_operation('1eleph1', '1_king_');
                    
                }
            }
            else
            {
                if(elephant_1_2 != 1)
                {
                    common_operation('1eleph2', '1_king_');
                }
            }
        }
    }
    else{

        if(king_2_moved != 1 && flag != 1){
            if(name_3.textContent[6] == 1)
            {
                if(elephant_2_1!=1)
                {
                    common_operation('2eleph1', '2_king_');
                }
            }
            else
            {
                if(elephant_2_2 != 1)
                {
                    common_operation('2eleph2', '2_king_');
                }
            }
        }
    }

}


//this find the king from 4 directions and checks that whether there is element in between them or not
function common_operation(value1,value2){
    var x = name_3.id[0];
    var y = name_3.id[1];
    x = parseInt(x);
    y = parseInt(y);
    var z = castle_elephent_4(x,y,turn);
    if (z == 5){
        return assign(value1,value2,x,y,turn);
    }
    else{
        z = castle_elephent_3(x,y,turn);
        if (z == 5){
            return assign(value1,value2,x,y,turn);
        } 
        else{
            z = castle_elephent_2(x,y,turn);
            if (z == 5){
                return assign(value1,value2,x,y,turn);
            } 
            else{
                z = castle_elephent_1(x,y,turn);
                if (z == 5){
                    return assign(value1,value2,x,y,turn);
                } 
                else{
                    
                }    
            }  
        }  
    }
}

//this checks that the element is blank or king or else
function castle_move(i,j,turn){

    if(document.getElementById(`${i}${j}`).textContent == '_______'){
        return 1;
    }
    else
    {
        if(turn == 1 && document.getElementById(`${i}${j}`).textContent == '1_king_'){
            return 0;
        }
        else if(turn == 2 && document.getElementById(`${i}${j}`).textContent == '2_king_'){
            return 0;
        }
    }
}

function castle_elephent_1(i,j,turn){
    if(j<7){
        s = castle_move(i,j+1,turn);
        if(s == 0){
            return 5;
        }
        if(s == 1){
            s = castle_elephent_1(i,j+1,turn);
            return s;
        }
    }
}

function castle_elephent_2(i,j,turn){
    if(j>0){
        s = castle_move(i,j-1,turn);
        if(s == 0){
            return 5;
        }
        if(s == 1){
            s = castle_elephent_1(i,j-1,turn);
            return s;
        }
    }
}
function castle_elephent_3(i,j,turn){
    if(i<7){
        s = castle_move(i+1,j,turn);
        if(s == 0){
            return 5;
        }
        if(s == 1){
            s = castle_elephent_1(i+1,j,turn);
            return s;
        }
    }
}


function castle_elephent_4(i,j,turn){
    if(i>0){
        s = castle_move(i-1,j,turn);
        if(s == 0){
            return 5;
        }
        if(s == 1){
            s = castle_elephent_1(i-1,j,turn);
            return s;
        }
    }
}


//This checks that whether king is getting check or not after castlemove
//finally if everything is okay then this function gives permission to make the king available for castle move
function assign(value1,value2,x,y,k){

    if(value2 == '1_king_'){
    
        var m = 0;
        var n = 3;
    
    }
    else{
        var m = 7;
        var n = 4;
    }
    
    
    
        array2 = array;
        var risk = 0;
        change_turn();
        var temp_store_slave = store_slave;
        checking_check(turn);
        store_slave = temp_store_slave;
        change_turn();
        for(i=0;i<array.length;i++){
            if(array[i] == `${x}${y}`){
                risk = 1;
            }
        }
    
        array = array2;
    
        if(risk != 1){
            array.push(`${m}${n}`);
        }
    
    
    
}
