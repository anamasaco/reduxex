const apiCall = async (page) => {
    try {
        // guarda info
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);

        // converte em json retornando um objeto
        const data = await response.json();

        // retorna os resultados
        return data.results;
    }
    catch(e){
        console.error(e);
    }
}
export default apiCall;