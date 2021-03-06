<!-- This is a partial code. Implement the essential codes required --> 
<!-- Do not modify the name or id of the components given in the code skeleton -->

<!DOCTYPE html>
<html>
    <head>
        <style>
            body
            {
                background-color:#FFAACC;
            }
            h1
            {
                color:#770080;
                font-style:italic;
                font-family:courier New;
                text-align:center;
            }
            #result
            {
                color:#770080;
                font-weight:bold;
            }
        </style>
    </head>
    <body>
        
        <h1>College Training Feedback Form</h1>
        <form onsubmit="return rating()">
            Participant Name<input type="text" name="participantName" id="pname" placeholder="Enter your name" pattern="[a-zA-Z]+"><br>
            College Name<input type="text" name="collegeName"><br>
            Participant Address<textarea name="participantAddress" rows="5" cols="20"></textarea><br>
            Gender<input type="radio" name="gender" value="male">Male
            <input type="radio" name="gender" value="female">Female<br>
            Email ID<input type="email" name="email"><br>
            Mobile Number<input type="text" name="mobileNumber" pattern="[7-9]{1}[0-9]{9}"><br>
            Trainer's Name<input type="text" name="trainerName" id="tname"><br>
            Course Name<input type="text" name="courseName"><br>
            Course Completion date<input type="date" name="dateofcompletion"><br>
            Trainer's Feedback<input type="text" id="fd" name="trainerFeedback" list="feedback" autocomplete="on">
            <datalist id="feedback" autocomplete="on">
                <option>Excellent</option>
                <option>Very Good</option>
                <option>Good</option>
                <option>Average</option>
                <option>Below Average</option>
            </datalist><br>
            <input type="submit" name="submit" value="Submit Feedback">
            <input type="reset" name="Reset" value="Clear">
        </form>
        
        <div id="result"></div>
        <script>
            function rating()
            {
                //fill code here
                var feed= document.getElementById("fd").value;
                var participantName=document.getElementById("pname").value;
                var trainerName=document.getElementById("tname").value;
                var feedbackRate;
                if(feed=="Excellent")
                {
                    feedbackRate=5;
                }
                else if(feed=="Very Good")
                {
                    feedbackRate=4;
                }
                else if(feed=="Good")
                {
                    feedbackRate=3;
                }
                else if(feed=="Average")
                {
                    feedbackRate=2;
                }
                else if(feed=="Below Average")
                {
                    feedbackRate=1;
                }
                document.getElementById("result").innerHTML="Feedback rating of "+trainerName+" is "+feedbackRate+" / 5. Given by participant - "+participantName;
                return false;
            }
        </script>
    </body>
</html>
