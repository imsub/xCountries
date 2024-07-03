const URL_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

export default async function getCountriesData(){
        try{
            const response = await fetch(URL_ENDPOINT,{
                Method: 'GET'
            });
            const result = await response.json();
            return result;
        }
        catch(error){
            //console.error("Error fetching data: ",error.message);
            return error;
        }
}