<?php
// Web Development - Final Project
// Group One: Mamdoh Zeyad - Barra Arnoos - Ahmed sabagh 

//Declare DB Info
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wd_final_project";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Take values from the form
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//Insert data into the DB
$sql = "INSERT INTO contact_us VALUES ('$name', '$email', $phone, '$message')";

//Check if the data inserted or not
if ($conn->query($sql) === TRUE) {
  ?>
    <script type="text/javascript"> 
      alert('Thank For Your Feedback, We Will Contact You Soon.'); 
      window.location = "/WD_G1_FP/index.html";
    </script> 
  <?php
  } else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

//Close Connection 
$conn->close();
?>