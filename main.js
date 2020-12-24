
// convert delay HH:MM in minutes
function delayConvert(delay)
{
    delay = delay.split(":");
    return parseInt(delay[0])*60 + parseInt(delay[1]);
}

// do the oposite of delayConvert
 function minuteToTime(a)
{
    var h = ((Math.trunc(a/60))%24).toString();
    var m = (a%60).toString();
    h = (h.length === 2)? h : "0" + h;
    m= (m.length === 2)? m : "0" + m;
    return  h + ":" + m;
}

//----------read lines from file 
 function readLines(file)
{
    var fs = require('fs');
    var data = fs.readFileSync(file,'utf8');
    return lines = data.split(/\r\n|\n/);
}

//---------- construct graph posiblities and solve problem
 function arrivalTime(file)
{
    var lines = readLines(file)
    var line1 = lines[0].split(";");
    var deparTime = line1[0];
    var start = line1[1];
    var finish = line1[2];
    var n = parseInt(lines[1]);
    var times = [];
    times[start]=delayConvert(deparTime);
    
    for(var i =0;i<n;i++)
    {  
        var line = lines[2+i].split(";");
        var deparTrain = line[0];
        var a = delayConvert(deparTrain) - times[line[1]];
        if( a >= 0 )
        {
            var totalTime = a + delayConvert(line[3]);
            var arrivedTime = times[line[1]] + totalTime;
            
            if(times[line[2]]){
                times[line[2]]= Math.min(times[line[2]],arrivedTime);
            }
            else
            {
            times[line[2]] = arrivedTime;
            }
        }

    }
    return minuteToTime(times[finish]);
}

console.log(arrivalTime('file.txt'));

module.exports.delayConvertTest =delayConvert;
module.exports.minuteToTimeTest =minuteToTime;
module.exports.arrivalTimeTest =arrivalTime;
