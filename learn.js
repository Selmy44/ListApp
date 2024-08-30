        
        function myFunction() {
            document.getElementById("demo").innerHTML="Are coming";
            
        }

        function calculations() {
        
            const a = 5;  // use const if the value or type(Arrays & objects) should not be changed 
            let b = 5;    // use let if you can't use const, Variables declared with let have Block Scope, Variables declared with let must be Declared before use, Variables declared with let cannot be Redeclared in the same scope
            var c = a + b;  // use var if you must support old browsers
            const answer= 'The answer is true'
            let palma3;
            document.getElementById("palma1").innerHTML= "The addition of 5+5 is :" +c;
            document.getElementById("palma2").innerHTML= answer;
            document.getElementById("palma4").innerHTML= palma3;
        }
        function displayDate() {
            const d = new Date();
            document.getElementById("miami2").innerHTML = d;
        }

        function apitest() {
                    const name = apitest;
                    document.getElementById("api").innerHTML = name;

        }

        //The Functions
        function good(a){
            return (3) * a;
        }
        let x = good(3);
        document.getElementById("well").innerHTML= x;

        // const good2=(a)=>{
        //             return a;
        // }
        // const good2=(a)=>{
        //         return a;
        // }
        function toCelsius(f) {
            return (5/9) * (f-32);
          }
     
          let value = toCelsius(77);
          document.getElementById("well1").innerHTML = value;
        //The End of Functions

        // Create an Array:
        const cars = ["Saab", "Volvo", "BMW"];
        const names = ["Nshuti, Selmy, Souleiman"];
        const owner = cars.concat(names);

        // Change an element:
        cars[0] = "Toyota";

        // Push adds an element:  the same as unshift !!
        cars.push("Audi");

        // Display the Array:
        document.getElementById("demo1").innerHTML = cars;
        document.getElementById("miami").innerHTML = owner;

        // Create an object:
        const car = {type:"Lamborghini", model:"Aventador", color:"white"};

        // Change a property:
        car.color = "red";

        // Add a property:
        car.owner = "Nshuti";

        // Display the property:
        document.getElementById("demo2").innerHTML = car["type"] + " " + car.model + " was sold to " + car.owner; 

        let text1 = "D";
        let text2 = "E";
        let result = text1 < text2;
        document.getElementById("demo3").innerHTML= "Is D greater than E?  " + result;

        let bob="hheelloo"
        document.getElementById("one").innerHTML=bob.length;

        let header = "Available cars";
        let tags = ["Lamborghini","Rolls Royce","Ferrari"];
        let demo = "<h1>${header}</h1><ol>";
        for (const x of tags) {
            demo += '<li>${x}</li>';
        }
        demo += '</ol>';
        document.getElementById("fuck").innerHTML= demo;

        const d = new Date();
        document.getElementById("miami2").innerHTML = d;

        function logics() {
            let x = 6;
            let y = 4;
            document.getElementById("miami3").innerHTML = !(x === y) + "<br>" + !(x > y);
            document.getElementById("montecarlo").innerHTML = !( y === y ) + "<br>" + !(x > y);
        }

        function conditions() {
            let voteable;
            let age = Number(document.getElementById("age").value);
            if (isNaN(age)) {
                voteable = "Input is not a number";
            }
            else {
                volteabe (age < 18)? "Too young" : "Old enought";
            }
            document.getElementById("miami4").innerHTML = voteable + "To vote";
        }


      
