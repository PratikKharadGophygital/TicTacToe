
function magic(id) {
    var counter = parseInt($("#counter").val());
    var flag = false;
    $("#outerCounter").val(parseInt($("#outerCounter").val()) + 1);
    if (isNaN(counter) || counter === '') {
        $("#counter").val(1);
        //$("#img" + id).attr("src", "D:/GitRunner/Tic_Tac_Toe/Tic_Tac_Toe/wwwroot/Image/Cross.png");
        $("#img" + id).attr("src", "/Image/Cross.png");

        $("#result" + id).val(1);
    }
    else if (counter % 2 !== 0) {
        $("#counter").val(counter + 1);
        //$("#img" + id).attr("src", "D:/GitRunner/Tic_Tac_Toe/Tic_Tac_Toe/wwwroot/Image/Cross.png");
        $("#img" + id).attr("src", "/Image/Cross.png");
        $("#result" + id).val(1);
    }
    else {
        $("#counter").val(counter + 1);
       // $("#img" + id).attr("src", "D:/GitRunner/Tic_Tac_Toe/Tic_Tac_Toe/wwwroot/Image/Circle.png");
        $("#img" + id).attr("src", "/Image/Circle.png");

        $("#result" + id).val(0);
    }
    if ($("#outerCounter").val() >= 5) {
        if ($("#result1").val() !== undefined || $("#result2").val() !== undefined ||
            $("#result3").val() !== undefined || $("#result4").val() !== undefined ||
            $("#result5").val() !== undefined || $("#result6").val() !== undefined ||
            $("#result7").val() !== undefined || $("#result8").val() !== undefined ||
            $("#result9").val() !== undefined) {

            // if(($("#result1").val() == '1' && $("#result2").val() == '1' && $("#result3").val() == '1' ) 
            //     || ($("#result1").val() == '0' && $("#result2").val() == '0' && $("#result3").val() == '0' ) )
            // {
            //     alert("Win");
            // }
            // if(($("#result4").val() == '1' && $("#result5").val() == '1' && $("#result6").val() == '1' ) 
            //     || ($("#result4").val() == '0' && $("#result5").val() == '0' && $("#result6").val() == '0' ) )
            // {
            //     alert("Win");
            // }

            // if(($("#result7").val() == '1' && $("#result8").val() == '1' && $("#result9").val() == '1' ) 
            //     || ($("#result7").val() == '0' && $("#result8").val() == '0' && $("#result9").val() == '0' ) )
            // {
            //     alert("Win");
            // }
            // if(($("#result1").val() == '1' && $("#result4").val() == '1' && $("#result7").val() == '1' ) 
            //     || ($("#result1").val() == '0' && $("#result4").val() == '0' && $("#result7").val() == '0' ) )
            // {
            //     alert("Win");
            // }
            // if(($("#result2").val() == '1' && $("#result5").val() == '1' && $("#result8").val() == '1' ) 
            //     || ($("#result2").val() == '0' && $("#result5").val() == '0'  && $("#result8").val() == '0' ) )
            // {
            //     alert("Win");
            // }
            // if(($("#result3").val() == 1 && $("#result6").val() == '1' && $("#result9").val() == '1' ) 
            //     || ($("#result3").val() == '0' && $("#result6").val() == '0' && $("#result9").val() == '0' ) )
            // {
            //     alert("Win");
            // }
            // if(($("#result1").val() == '1' && $("#result5").val() == '1' && $("#result9").val() == '1' ) 
            //     || ($("#result1").val() == '0' && $("#result5").val() == '0' &&$("#result9").val() == '0' ) )
            // {
            //     alert("Win");
            // }
            // if(($("#result3").val() == '1' && $("#result5").val() == '1' && $("#result7").val() == '1' ) 
            //     || ($("#result3").val() == '0' && $("#result5").val() == '0' &&$("#result7").val() == '0' ) )
            // {
            //     alert("Win");
            // }
            var a1 = ['result1', 'result2', 'result3'];
            var a2 = ['result4', 'result5', 'result6'];
            var a3 = ['result7', 'result8', 'result9'];
            var a4 = ['result1', 'result4', 'result7'];
            var a5 = ['result2', 'result5', 'result8'];
            var a6 = ['result3', 'result6', 'result9'];
            var a7 = ['result1', 'result5', 'result9'];
            var a8 = ['result3', 'result5', 'result7'];


            for (var i = 1; i <= 8; i++) {
                var count1 = 0;
                var count0 = 0;
                var a = eval('a' + i);
                for (var j = 0; j < 3; j++) {
                    var value = a[j];
                    var result = $('#' + value).val();
                    if (result == '1') {
                        count1++;
                    } else if (result == '0') {
                        count0++;
                    } else {

                    }
                }
                if (count0 == 3 || count1 == 3) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                $("#winMessage").fadeIn(500).css({
                    transform: 'scale(1.5)',
                    transition: 'transform 0.5s ease-in-out'
                });
                $("#parent").css({
                    "opacity": "0.5",
                    "pointer-events": "none"
                });

            }
            if ($("#result1").val() !== '' && $("#result2").val() !== '' &&
                $("#result3").val() !== '' && $("#result4").val() !== '' &&
                $("#result5").val() !== '' && $("#result6").val() !== '' &&
                $("#result7").val() !== '' && $("#result8").val() !== '' &&
                $("#result9").val() !== '' && !flag) {

                $("#tieMessage").fadeIn(500).css({
                    transform: 'scale(1.5)',
                    transition: 'transform 0.5s ease-in-out'
                });
                $("#parent").css({
                    "opacity": "0.5",
                    "pointer-events": "none"
                });
            }

        }

    }

}
