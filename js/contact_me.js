$(document).ready(function(){
   
        
     $('#houseform').validate(
    {
        rules: {
                cname: {
                    required: true
                },
                cemail: {
                    required: true
                },
                ctitle: {
                    required: true
                },
                csignature:{
                    required:true
                }
            },
            submitHandler: function (form)
            {
                displaydata(form)
            }
        });
}); 


function displaydata(myform){
    var name=myform.cname.value
    var email = myform.cemail.value
    var title=myform.ctitle.value
    var signature = myform.csignature
    var fileToUpload = myform.fileToUpload
    var myurl = "././mail/contest.php/"
//    var myurl = "http://default-environment-unk9bsfz5p.elasticbeanstalk.com/"
//    var myurl = "http://cs-server.usc.edu:31616/hw8/index.php/"
//    alert(url)
    //initAll(myurl);
    
    $.ajax({
        url: myurl,
        type: "POST",
        data: { 
                    name: name,
                    email: email,
                    title:title,
                    signature:signature,
                    fileToUpload:fileToUpload
              },
        success:function(data){
            //alert("success")
            //alert(data)
            //parseJson(data)
        },
        error:function(){
            alert("error")
        }
    });
}
