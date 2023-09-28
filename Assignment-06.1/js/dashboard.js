$(document).ready(function(){
    let loginSession = localStorage.getItem('login');
    let objLogin = JSON.parse(loginSession);
    $('.js_class').html(objLogin.username);

    $('#btnLogout').click(function(){
        localStorage.removeItem('login');
        location.href='login.html';
    });

    $('#btnProduct').click(function(){
        $.ajax({
            url: 'https://dummyjson.com/products',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            success: function(data){
                var table = '<table>';
                table += '<tr><th>Thumnail</th><th>Title</th></tr>';
                for(item of data.products){
                    table += '<tr><td><img width="100px" src="' + item.thumbnail + '"></td><td>'  + item.title + ' </td></tr>';
                }
                table += '</table>';
                $('#renderContent').html(table);
            }
       });

    });

    $('#btnUser').click(function(){
        $.ajax({
            url: 'https://dummyjson.com/users',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            success: function(data){
                var table = '<table>';
                table += '<tr><th>Frist Name</th><th>Last Name</th><th>Email</th></tr>';
                for(item of data.users){
                    table += '<tr><td>' + item.firstName + '</td><td>' + item.lastName + '</td><td>' + item.email + '</td></tr>';
                }
                table += '</table>';
                $('#renderContent').html(table);
            }
        })

    });

    $('#btnDashboard').click(function(){
        $.ajax({
            url: 'https://dummyjson.com/carts',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            success: function(data){
                var table = '<table>';
                table += '<tr><th>Id</th><th>Total</th><th>Price</th></tr>';
                for(item of data.carts){
                    table += '<tr><td>' + item.id + '</td><td>' + item.total + '</td><td>' + item.total + '</td></tr>';
                }
                table += '</table>';
                $('#renderContent').html(table);
            }
        })

    });

    $('#btnIcon').click(function(){
        $.ajax({
            url: 'https://dummyjson.com/posts',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            success: function(data){
                var table = '<table>';
                table += '<tr><th>Id</th><th>Title</th><th>Body</th></tr>';
                for(item of data.posts){
                    table += '<tr><td>' + item.id + '</td><td>' + item.title + '</td><td>' + item.body + '</td></tr>';
                }
                table += '</table>';
                $('#renderContent').html(table);
            }
        })

    });
    $('#btnMaps').click(function(){
        $.ajax({
            url: 'https://dummyjson.com/comments',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            success: function(data){
                var table = '<table>';
                table += '<tr><th>Id</th><th>body</th><th>postId</th></tr>';
                for(item of data.comments){
                    table += '<tr><td>' + item.id + '</td><td>' + item.body + '</td><td>' + item.postId + '</td></tr>';
                }
                table += '</table>';
                $('#renderContent').html(table);
            }
        })

    });
});