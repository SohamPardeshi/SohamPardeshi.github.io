<?php
    // Add the CORS Headers
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");

    // Output the file
    $homepage = file_get_contents('./data.json');
    echo $homepage;
?>