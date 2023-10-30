let count = 0
document.getElementById("incrementBtn").onclick = function()
{
    count = count + 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function()
{
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("decrementBtn").onclick = function()
{
    count = count - 1;
    document.getElementById("countLabel").innerHTML = count;
}
