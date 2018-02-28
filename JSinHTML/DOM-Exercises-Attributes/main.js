function test() {

    var a = document.querySelectorAll('input');

    for (var i = 0; i < a.length;i++ ){

        if (a[i].hasAttribute('required') && a[i].value == "") {

               a[i].setAttribute('style', "border:10px solid yellow;");
        }
            



    }
}

            //     if(input == require && input == ""){
            //         element = border red;
            //     }

            // 
        
            //style="border:10px solid yellow;"
            function test2() {

                var a = document.querySelectorAll('input');
            
                for (var i = 0; i < a.length;i++ ){
            
                    if (a[i].hasAttribute('required') && a[i].value == "") {
            
                           a[i].className ="border-yellow";
                    }
                        
            
            
            
                }
            }