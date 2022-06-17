<!-- This is a partial code. Implement the essential codes required --> 
<!-- Do not modify the name or id of the components given in the code skeleton -->
<!DOCTYPE html>
<html>
    <style>
        body{
            background-color:#e6e6fa;
        }
        #discounttable{
            border-style:solid;
            float:right;
        }
        h1{
            color:#800080;
            font-family:cursive;
            text-align:center;
        }
        h2{
            text-align:center;
        }
    </style>
    <script>
        function validate()
        {
                //fil your code here
            var bcats=document.getElementsByName("bookCategory");
            var bcat;
            var price;
            var disc;
            for(var i=0;i<bcats.length;i++)
            {
                if (bcats[i].checked)
                {
                    bcat=bcats[i].value;
                }
            }
            var bcount=document.getElementById("bookval").value;
                bcount=parseInt(bcount)
                if (bcat=="Science")
                {
                    price=400;
                    if (bcount<=250)
                    {
                        disc=5;
                    }
                    else{
                        disc=7;
                    }
                }
                
                else{
                    price=300;
                    if (bcount<=250)
                    {
                        disc=3;
                    }
                    else{
                        disc=4;
                    }
                }
                var tot=bcount*price-((bcount*price*disc)/100);
                document.getElementById("result").innerHTML="Total Price is:"+tot;
        }  
    </script>
    <body>
        <h1>E-BOOK GRAND SALE</h1>
        <form name="form">
            <table>
                <tr>
                    <td>Customer Name</td>
                    <td><input type="text" name="customerName" placeholder="Enter the Customer Name" pattern="[a-zA-Z\s]+" required></td>
                </tr>
                <tr>
                    <td>Email ID</td>
                    <td><input type="email" name="mail" ></td>
                </tr>
                <tr>
                    <td>Mobile Number</td>
                    <td><input type="tel" name="customerMobileNumber" placeholder="Enter the Mobile Number"  required></td>
                </tr>
                <tr>
                    <td>
                        Book Category
                    </td>
                    <td>
                        <input type="radio" name="bookCategory" value="Science" required>Science
                        <input type="radio" name="bookCategory" value="Comics" required>Comics
                    </td>
                </tr>
                <tr>
                    <td>Type</td>
                    <td>
                        <input name="bookType" list="bookTypes" autocomplete>
                        <datalist id="bookTypes">
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Fortnightly">Fortnightly</option>
                        </datalist>
                    </td>
                </tr>
                <tr>
                    <td>No of Books Required</td>
                    <td><input type="range" name="bookCount" id="bookval" min="1" max="500" value=1 oninput="markOutputId.value=bookval.value">
                    <output name="markOutputName" Id="markOutputId"></output></td>
                </tr>
                <tr>
                    <td><input type="button" name="submit" value="Calculate Total Price" onclick="validate()"></td>
                    <td><input type="reset" name="reset"></td>
                </tr>
            </table>
            </form>
                
            <div id="result"></div>
            <table id="discounttable" border="1px">
            <caption>Discount Rate Chart</caption>
            </table>
            <table id="discounttable" border="1px">
                <tr>
                    <th>Book Type</th>
                    <th>
                        per Book Cost
                    </th>
                    <th>
                        Discount Rate(in percentage)
                    </th>
                </tr>
                <tr>
                    <td>Science</td>
                    <td>400</td>
                    <td>5% if total book count &lt;= 250</td>
                </tr>
                <tr>
                    <td>Science</td>
                    <td>400</td>
                    <td>7% if total book count &gt; 250</td>
                </tr>
                <tr>
                    <td>Comics</td>
                    <td>300</td>
                    <td>3% if total book count &lt;= 250</td>
                </tr>
                <tr>
                    <td>Comics</td>
                    <td>300</td>
                    <td>4% if total book count &gt; 250</td>
                </tr>
            </table>
        
    </body>
</html>
