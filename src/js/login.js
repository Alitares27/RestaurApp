fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "admin",
                password: "Admin1234"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))