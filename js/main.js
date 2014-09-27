/**
 * Created by davidroth on 29/08/2014.
 */
$(document).ready(function() {
    //Setting the Quintessence
    for (var i=1;i<4;i++){
        appendSlots("Q Q",i,i,"img/Quintessence-"+i+"0.png");
    }
    //Setting the Marks
    appendSlots("M",1,9,"img/Mark-Slot.png");
    $(".M2,.M3").addClass("ML2");
    $(".M4,.M5").addClass("ML3");
    $(".M7,.M8,.M9").addClass("ML4");

    //Setting the Seals
    appendSlots("S",1,9,"img/Seal-Slot.png");
});

function appendSlots(className,initTime,times,src){
    var slot = $("<img src='"+src+"'>");
    for (var i=initTime;i<times+1;i++){
        $(".chart").append(slot.clone().addClass(className+i))
    }
}