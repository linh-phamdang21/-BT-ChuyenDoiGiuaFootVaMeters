function footToMeter(foot) {
    let meterResult = foot * 0.305;
    document.getElementById("footresult").innerHTML = "Result: " + meterResult + " meters";
}

function meterToFoot(meter) {
    let footResult = meter * 3.279;
    document.getElementById("meterresult").innerHTML = "Result: " + footResult + " foots";
}