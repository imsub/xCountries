const URL_ENDPOINT = "https://restcountries.com/v3.1/all";

export default async function getCountriesData(){
        try{
            const response = await fetch(URL_ENDPOINT,{
                Method: 'GET'
            });
            const result = await response.json();
            return result;
        }
        catch(error){
            console.error("Error fetching data: ",error.message)
        }
}