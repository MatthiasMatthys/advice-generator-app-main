document.addEventListener('DOMContentLoaded', function () {
    var slipnumber = document.getElementById("slipId");
    var sliptext = document.getElementById("sliptext");

    function generateAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                slipnumber.innerHTML = data.slip.id;
                sliptext.innerHTML = `"${data.slip.advice}"`;
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
    }

    // Call the function to fetch advice on page load
    generateAdvice();
    document.getElementById('dicebutton').addEventListener('click', generateAdvice);
});