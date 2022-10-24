
/*
* The program only prints out the time once when executed. 
* Modify this code such that the program prints out the time every second.
*/

setInterval(sec, 1000);

function sec()
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
