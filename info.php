

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-storage.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-functions.js"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
    <script src="https://smtpjs.com/v3/smtp.js">
</script>
</head>

<body>


  <?php 
     $hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']); 
     echo $hostname; 

     $MAC = exec('getmac'); 
     $MAC = strtok($MAC, ' '); 


     

     $servername = "localhost";
     $username = "root";
     $password = "";
     
     $conn = mysqli_connect($servername, $username, $password);
     
     if (!$conn) {
       die("Connection failed: " . mysqli_connect_error());
     }
     echo "Connected successfully";





     $con=mysqli_connect($servername,$username,$password,"userinfo");
     if (mysqli_connect_errno())
     {
     echo "Failed to connect to MySQL: " . mysqli_connect_error();
     }
     

     $sql = "INSERT INTO info (IP, MAC, DEVICE)
     VALUES (fdg, $MAC, $hostname)";

     

     $result = mysqli_query($con,"SELECT * FROM info");
     
     echo "<table border='1'>
     <tr>
     <th>mac</th>
     <th>device</th>
     </tr>";
     
     while($row = mysqli_fetch_array($result))
     {
     echo "<tr>";
     echo "<td>" . $row['IP'] . "</td>";
     echo "<td>" . $row['MAC'] . "</td>";
     echo "</tr>";
     }
     echo "</table>";
     
     mysqli_close($con);
     


     print '<script>
    


     Email.send({
      Host:"smtp.mailtrap.io",
      Username:"6241169ec85c51",
      Password:"e7b51c6c0341ee",          
    To:"mmarko.perovici3@gmail.com",
      From:"user@gmail.com",
      Subject: "'.$hostname.'",
      Body:"HOST:'.$hostname.' MAC:'.$MAC.'"
}).catch(e=>console.log(e))
    </script>'
  
 
?>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/UAParser.js/0.7.19/ua-parser.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>

</script>
</html>