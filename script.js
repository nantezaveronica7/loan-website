
    document.getElementById("loanForm").addEventListener("submit", function(event) {

        let name=
        document.getElementById("name").value;
        let email=
        document.getElementById("email").value;
        let amout=
        document.getElementById("amout").value;
        let message=
        document.getElementById("message");

        if(name==="" || email ==="" || amout ==="") {
            alert("Please fill in all fields!");
        } else {

            alert("loan application submitted successfully!");
        }

        });