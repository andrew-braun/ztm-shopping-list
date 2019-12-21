<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Document</title>
</head>
<body>
    <nav>
        <ul>
            <li>
                <a href="#">List 1</a>
            </li>
            <li>
                <a href="#">List 2</a>
            </li>
        </ul>
    </nav>
    <main>
        <div class="main-container">
        <div class="list-box">
            <h2>Shopping List</h2>
            <ul class="shopping-list" id="shopping-list">
                <li class="shopping-item" random="23">Bananas <button class="delete-button">Delete</button></li>
                <li class="shopping-item">Bread <button class="delete-button">Delete</button></li>
                <li class="shopping-item">Radioactive material <button class="delete-button">Delete</button></li>
                <li class="shopping-item">Puppies <button class="delete-button">Delete</button></li>
                <li class="shopping-item">Extra-large doggy sweaters <button class="delete-button">Delete</button></li>
                <li class="shopping-item">75 pounds raw hamburger <button class="delete-button">Delete</button></li>
                <li class="shopping-item">Almond milk <button class="delete-button">Delete</button></li>
            </ul>
            <div id="input-section">
                <input id="user-input" class="box-input" 
                    type="text" placeholder="enter items" data-lpignore="true">
                <button id="enter" class="main-button">Add item</button>
            </div>
        </div>

    </div>
    </main>
    <footer>

    </footer>
    <script src="script.js"></script>
</body>
</html>
