/***********************************************************************************************************************************************************************/
                                                                     /*employee.html*/
/***********************************************************************************************************************************************************************/
<!-- DO NOT ALTER THIS FILE -->

<!DOCTYPE html>
<html>
<body>
    <button id="btn-id">Click to Get the Employee Data</button>
    <br><br>
    <div id="err-id"></div>
    
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="employee.js"></script>
</body>
</html>




/***********************************************************************************************************************************************************************/
                                                                   /*employee.js*/
/***********************************************************************************************************************************************************************/
//WRITE YOUR jQUERY CODE HRE
$("#btn-id").click(function()
{
    $.ajax('employee.json',
    {
        error:function(data,status,xhr)
        {
            $('#err-id').append("Error Message: Not found");
        }
    });
});
