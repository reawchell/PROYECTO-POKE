console.log('PRIMER TESTEO');
//const input = document.querySelector('.buscar');
const main = document.querySelector('main');
const input = document.querySelector('.buscar');


const pokeapi = async() => {
    const web = 'https://pokeapi.co/api/v2/pokemon/'
    const poke = []

    for (let i = 1; i <= 150; i++){
        const pokemonsResponse = await fetch(`${web}${i}`);
        const pokemonsJson = await pokemonsResponse.json();
        poke.push(pokemonsJson);}
       /*  const ver = fetch(`${web}${i}`)
        .then((res)=> res.json())
        .then((data) => poke.push(data)); */
        return poke; 
    };


const mapeo = (pokemons) => {
    console.log(pokemons);
 const mapear = pokemons.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
  type: pokemon.types.map((type) => type.type.name).join(', '), 
    id: pokemon.id,

}))
return mapear;
}

 
/* console.log(mapear); */
const div$$ = document.querySelector('.container')
 
const draw = (results)=>{
    //console.log(results);
    div$$.innerHTML = '';
for(const resultado of results){
    div$$.innerHTML += `
            <div class="POKEDEX">
            <div class='card'>
            
            <h2 class='name'>${resultado.name}</h2>
            <p class='id'>${resultado.id}</p>
            <img class='imagen' src='${resultado.image}'>
            <p class='tipo'>${resultado.type}</p>
        
        </div>`;
        
};
};

const filtrarPoke = (mapeados) => {
    input.addEventListener('keyup', (ev)=>{
            const inputValue = ev.target.value;
              console.log(inputValue);
            const datosFiltrados = mapeados.filter((results)=>{
                return results.name.includes(inputValue)
            });
            console.log(datosFiltrados);
            draw(datosFiltrados);
    
        });
    };


/* document.addEventListener('keyup', e => {
    console.log(e.target.value)
}) */


const init = async() =>{
    const results = await pokeapi()
    /* console.log(results); */
    const mapeados = mapeo(results);
    console.log(mapeados);


    draw(mapeados);
    filtrarPoke(mapeados);
}
  init()



  /*   const mapear = (pokemon) => {
    console.log(abilities);
    charatersinmapeo.map((abilities)=> ({
        id: abilities.id,
    })

    )
}   
 */
/* /* 
const datalimpia = pokeapi.map((abi) => ({
   /*  abi: abi.pokemon.species,
    id: abi.id, */
 /*    nombre: abi.name, */
/* }) */

/* ) */
/* 
const mapear = (benito) => {
    console.log(benito);
  /*   benito.map((mapear)) => ({
    nombre: mapear.name.

    }) */ 


/* const main = document.querySelector('main');

const pokeapi = async () => { 
const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/1');
const resJson = await respuesta.json();
return resJson.results;
};


const ini = async () =>{
    const resp = await pokeapi();
    const dataFil = resp.map((loc)=>({
        name: loc.name,
        url: loc.url, 
      
    
        
   
        

    }));
    console.log(dataFil); */

    //https://pokeapi.co/api/v2/pokemon/21/

    
    /* const get = async (char)=> { */
       /*  const ver = await axios.get(char.url)
        .then(res => res.results)
        .then(results => console.log(results) *//* ) */
 /*    } */
/*     console.log(dataFil);
    dataFil.results.forEach(element => {
        console.log(element)
        
    }); */

/* ini(); */







//RECUPERAR
/* 
<div class='front'> */
/* <div class='back'> */