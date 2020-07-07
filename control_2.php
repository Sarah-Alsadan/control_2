<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8">
        <title>Control Panel</title>
        <link rel="stylesheet" href="style.css">
        <script src="script.js"></script>

    </head>
 
                <aside>
                    <table id="myTable">
            <tr>
                <td>dirction</td>
                <td>length</td>
            </tr> 
        </table>
        </aside>
    <body>
        <form>
        <fieldset>
            <legend align="center"> Control Panel </legend>
            
            <br><br> 
            <select id="d">
            <option>Left</option>
            <option>Right</option>
            <option>Forward</option>
            <option>Backwards</option>
            </select>
            <input required type="number" id="point" >
            <br><br><br>
            <input value="save" type="submit" onClick="func(); return false;"/>
            <input value="delete" type="submit" onClick="func2(); return false;"/>
            <input type="reset">

        </fieldset>
        </form>
    
        <canvas id="myCanvas" width="1000" height="1000" > </canvas>


        
        <hr>

    </body>
    
    
</html>
        