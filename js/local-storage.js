    var existingData = JSON.parse(localStorage.getItem('userDB'));

    const addDataToDb = async () => {
        const response = await fetch('js/data.json')
        const data = await response.json()
        return data;
    };

    addDataToDb().then(data => {
        for(let i = 0; i < data.length; i++){
            if (existingData && (existingData.length <= 20)) {
                existingData.push(data[i])
            } else if (!existingData){
                existingData = new Array();
                existingData.push(data[i])
            }
        }

        localStorage.setItem('userDB', JSON.stringify(existingData))
    })

