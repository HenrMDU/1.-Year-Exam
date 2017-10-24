<?php
if (isset($_POST['navn']) && isset($_POST['besked']) && isset($_POST['dato']) && isset($_POST['email']) && isset($_POST['tid'])) //Tjekker om værdierne er nul eller om de har en værdi
{
    if (empty($_POST['navn']))
    {
        echo "Du skal indtaste dit navn <br />"; //Output hvis navn ikke har en værdi
    }
    if (empty($_POST['dato']))
    {
    echo "Du skal v&aeliglge en dato <br />"; //Output hvis dato ikke har en værdi
    }
    if (empty($_POST['email']))
    {
        echo "Du skal indtaste din email <br />"; //Output hvis email ikke har en værdi
    }
    if (empty($_POST['tid']))
    {
        echo "Du skal v&aeliglge et tidspunkt for afhentning <br />"; //Output hvis tid ikke har en værdi
    }
    
    else
    {
        $menu_item = $_POST['menu_item']; //Viser hvilken type mad der er krydset af på index.php
        $amount = $_POST['amount'];  //Viser antallet af mad der er krydset af på index.php
        
        $bestilling = "Bestilling består af følgende:\n"; //Variablen bestilling er et udtryk for hele bestillingen; antal+type af mad
        for($i = 0; $i<8;$i++) {
            $bestilling .= $menu_item[$i] . ": "; 
            $bestilling .= $amount[$i] . "\n";
        }

        $modtager = "patrickvinterdk@gmail.com";  //Modtagerens email
        $emne = "Projekt";  //Emne på emailen
        $besked = "Hej, du har modtaget mail fra en bruger: \n 
                            Navn: " . $_POST['navn']. "\n
                            Besked: " . $_POST['besked']."\n
                            Email: " . $_POST['email']. "\n
                            Dato: " . $_POST['dato']. "\n
                            Tid: " . $_POST['tid']. "\n"
                            .$bestilling; //Emailen som bliver sendt
        $header = "from:noreply@pvdesign.com"; //Afsender email

        mail($modtager, $emne, $besked, $header,  $email); //Hvad der skal inkluderes i emailen
        echo "Emailen er nu sendt!"; //Output besked når mailen er sendt
    }
    
}
?>
