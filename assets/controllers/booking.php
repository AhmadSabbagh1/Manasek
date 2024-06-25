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

//Take values from the form
$type = $_POST['type'];
$name = $_POST['name'];
$gender = $_POST['gender'];
$Dateofbirth_month = $_POST['Dateofbirth-month'];
$Dateofbirth_day = $_POST['Dateofbirth-day'];
$Dateofbirth_year = $_POST['Dateofbirth-year'];
$Nationality = $_POST['Nationality'];
$passport = $_POST['passport'];
$address_country = $_POST['Address-country'];
$address_city = $_POST['Address-city'];
$address_street = $_POST['Address-street'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$airline_type = $_POST['airline-type'];
$arrival_date_month = $_POST['arrival-date-month'];
$arrival_date_day = $_POST['arrival-date-day'];
$arrival_date_year = $_POST['arrival-date-year'];
$departure_date_month = $_POST['departure-date-month'];
$departure_date_day = $_POST['departure-date-day'];
$departure_date_year = $_POST['departure-date-year'];
$persons = $_POST['persons'];
$hotel_type = $_POST['hotel-type'];
$transportation_type = $_POST['transportation-type'];
$myfile = $_POST['myfile'];

//Insert data into the DB
$sql = "INSERT INTO booking VALUES ('$type', '$name', '$gender', $Dateofbirth_month, $Dateofbirth_day, $Dateofbirth_year, '$Nationality', '$passport', '$address_country'
, '$address_city','$address_street', $phone,'$email','$airline_type', $arrival_date_month, $arrival_date_day, $arrival_date_year, $departure_date_month, $departure_date_day, $departure_date_year,
$persons,'$hotel_type', '$transportation_type', '$myfile')";

//Check if the data inserted or not
if ($conn->query($sql) === TRUE) {
  ?>
    <script type="text/javascript"> 
      alert('Thank For Your Trust, We Will Contact You Soon.'); 
      window.location = "/WD_G1_FP/index.html";
    </script> 
  <?php
  } else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

//Close Connection 
$conn->close();
?>