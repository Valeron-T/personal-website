function increment_count() {
    fetch("https://valswebsite.azurewebsites.net/api/getVisitorCount")
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Response data:", data);
        document.getElementById('cnt').innerText = data;
    })
    .catch(error => {
        console.error("Error:", error);
    });

    fetch("https://valswebsite.azurewebsites.net/api/updateVisitorCount")
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;
    })
    .catch(error => {
        console.error("Error updating data:", error);
    });
}