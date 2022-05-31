const express = require("express");
const app = express()

// const swapi = require('swapi-node');

app.use(express.json())

const animales = [
    {
        id: 1, Nombre: "León", Nombre_cientifico: "Panthera leo", Clase: "Mammalia",
        Orden: "Carnívora", Familia: "Felidae",
        Alimentacion: "Carnívora; principalmente animales de mediano y gran tamaño como ñúes, impalas y otros antílopes, cebras, jirafas, búfalos y también carroña.",
        Habitat: "Sabana, bosques abiertos y zonas arbustivas.", Camada: "De 1 a 6 crías",
        Gestacion: "109 días", Longevidad: "29 años en cautiverio",
        Situacion_actual: "Vulnerable", Distribucion_Geografica: "Africa central y oriental.",
    },
    {
        id: 2, Nombre: "Conejo", Nombre_cientifico: "Oryctolagus cuniculus",
        Clase: "Mammalia", Orden: "Lagomorpha",
        Familia: "Leporidae",
        Alimentacion: "Herbívora y además practica la cecrotofia (las heces blandas, ricas en bacterias y proteínas, son re ingeridas para un segundo tránsito digestivo).",
        Habitat: "Habitan en bosques y campos extensos cubiertos por matorrales.",
        Camada: "4 a 12 crías",
        Gestacion: "32 días",
        Longevidad: "9 a 10 años",
        Distribucion_Geografica: "Norte de África y toda Europa hasta Rusia."
    },
    {
        id: 3, Nombre: "Leopardo", Nombre_cientifico: "Panthera pardus",
        Clase: "Mammalia",
        Orden: "Carnívora",
        Familia: "Felidae",
        Alimentacion: "Carnívora; principalmente ungulados de pequeños y mediano tamaño, como gacelas, impalas y ciervos, animales domésticos, primates, roedores, aves y a veces artrópodos.",
        Camada: "1 a 6 crías",
        Gestacion: "90 a 105 días",
        Longevidad: "23 años",
        Situacion_actual: "En peligro de extinción",
        Distribucion_Geografica: "Del Oeste de Turquía y península Malaya, Sri Lanka , Java y la mayor parte de África."
    },
    {
        id: 4, Nombre: "Oso Polar",
        Nombre_cientifico: "Ursus maritimus",
        Clase: "Mammalia",
        Orden: "Carnívora",
        Familia: "Ursidae",
        Alimentación: "Carnívora; focas y peces principalmente",
        Habitat: "Regiones árticas",
        Camada: "1 a 3 crías",
        Gestacion: "195 a 265 días",
        Longevidad: "25 a 30 años",
        Situacion_actual: "Amenazada",
        Distribucion_Geografica: "Eurasia y norteamérica"
    },
    {
        id: 5, Nombre: "Chachalaca",
        Nombre_cientifico: "Ortalis policephala",
        Clase: "Aves",
        Orden: "Galliformes",
        Familia: "Cracidae",
        Alimentacion: "Principalmente herbívora; bayas, brotes, frutos, hojas y en algunas ocasiones insectos.",
        Puesta: "2 huevos, rara vez 3 o 4",
        Incubacion: "22 días",
        Habitat: "Zonas tropicales y mesetas templadas próximas, especialmente cañones.",
        Situacion_actual: "Estable",
        Distribucion_Geografica: "Puebla, Oaxaca, y suroeste de Chiapas."
    },
    {
        id:6,Nombre:"Águila Real",Nombre_cientifico:"Aquila chrysaetos",
        Clase:"Aves",
        Orden:"Falconiformes",
        Familia:"Accipitridae",
        Alimentacion:"Carnívora; principalmente conejos, liebre y marmotas",
        Puesta:"2 huevos",
        Incubacion:"44 días",
        Habitat:"Praderas, desiertos y zonas montañosas",
        Longevidad:"Pueden vivir hasta 30 años",
        Situacion_actual:"Amenazada",
        Distribucion_Geografica:"Europa, Asia , África y América del Norte."
    },{
        id:7,Nombre:"Cacomixtle tropical",Nombre_cientifico:"Bassariscus astutus.",
        Clase:"Mammalia",
        Orden:"Carnívora",
        Familia:"Procyonidae",
        Alimentacion:"Omnívora; insectos, roedores y vegetales",
        Habitat:"Áreas preferentemente rocosas cerca del agua.",
        Camada:"De 1 a 5 crías",
        Gestación:"De 51 a 54 días",
        Longevidad:"7 años en vida silvestre",
        Situacion_actual:"Estable.",
        Distribucion_Geografica:"Suroeste de Óregon y este de Kansas, hasta Baja California y sur de México."
    },{
        id:8,Nombre:"Serpiente de cascabel",Clase:"Reptilia",
        Orden:"Squamata",
        Familia:"Viperidae",
        Habitat:"Bosques arenosos y zonas costeras.",
        Distribucion_Geografica:"Endémicas para el continente Americano, desde el Sureste de Canadá hasta el Norte de Argentina."
    },{
        id:9, Nombre:"Loro cabeza amarilla", Nombre_cientifico:"Amazona oratrix tresmariae",
        Clase:"Aves",
        Orden:"Psittaciformes",
        Familia:"Psittacidae",
        Alimentacon:"Herbívora; frutas diversas, semillas, nueces, flores y probablemente yemas de hojas.",
        Puesta:"3 huevos",
        Incubacion:"29 días",
        Habitat:"Bosque tropical deciduo y matorral espinoso",
        Situacion_actual:"En peligro de extinción",
        Distribucion_Geografica:"Se distribuía originalmente desde México, Belice, el extremo E de Guatemala y el extremo NW de Honduras."
    },{
        id:10, Nombre:"Tigre de bengala",Nombre_cientifico:"Panthera tigris tigris",
        Clase:"Mammalia",
        Orden:"Carnívora",
        Familia:"Felidae",
        Alimentacion:"Carnívora; principalmente grandes mamiferos como jabalís, ciervos, búfalos y jaguares.",
        Habitat:"Bosques tropicales, bosques perennifolios, pantanos, praderas y zonas rocosas",
        Camada:"2 a 3 crías",
        Gestacion:"104 a 106 crías",
        Longevidad:"20 a 26 años",
        Situacion_actual:"En peligro de extinción",
        Distribucion_Geografica:"Este de Turquía al sureste de Siberia, Península Malaya, Sumatra, Java y Bali"
    },{
        id:11,Nombre:"Escorpión (Reptil)",Nombre_cientifico:"Heloderma horridum horridum",
        Clase:"Reptilia",
        Orden:"Scuamata",
        Familia:"Helodermatidae",
        Alimentacion:"Pequeños roedores, huevos de ave y reptiles.",
        Incubacion:"30 a 32 días",
        Habitat:"Habita en sitios secos y pedregosos, viviendo en cuevas que excava en las rocas.",
        Distribucion_Geografica:"Desde el sur de Sinaloa hasta Chiapas."
    },{
        id:12, Nombre:"Puma",Nombre_cientifico:"Felis concolor",
        Clase:"Mammalia",
        Orden:"Carnívora",
        Familia:"Felidae",
        Alimentacion:"Carnívora; ciervos principalmente, otros ungulados, puercoespines, liebres y castores",
        Puesta:"3 a 4 crías",
        Incubacion:"90 a 96 días",
        Habitat:"Bosque de coníferas, bosque tropical de la planicie, pastizales, pantanos y zonas arbustivas",
        Camada:"1 a 6, siendo mas general 2 3 cachorros",
        Gestacion:"91 días",
        Longevidad:"8 a 13 años",
        Situacion_actual:"Vulnerable",
        Distribucion_Geografica:"Desde Canadá hasta el sur de Chile y la Patagonia"
    },{
        id:13, Nombre:"Capibara",Nombre_cientifico:"Hydrochaeris hydrochaeris",
        Clase:"Mammalia",
        Orden:"Rodentia",
        Familia:"Caviidae",
        Alimentacion:"Herbívora: hierbas, plantas acuáticas, granos, melones y calabazas.",
        Habitat:"Áreas de vegetación densa alrededor de estanques, lagos, ríos, arroyos y pantanos.",
        Camada:"5 crías",
        Gestacion:"104 a 11 días",
        Longevidad:"8 y 10 años en vida silvestre, 12 años en cautiverio.",
        Situacion_actual:"Estable",
        Distribucion_Geografica:"Desde Panamá hasta Argentina"
    },{
        id:14, Nombre:"Jaguar",Nombre_cientifico:"Panthera onca",
        Clase:"Mammalia",
        Orden:"Carnívora",
        Familia:"Felidae",
        Alimentación:"Carnívora; desde peces, sapos y aves, hasta pecaríes, venados y monos.",
        Habitat:"Selva tropical, pantanos y campo abierto, incluso desiertos y pastizales.",
        Camada:"2 crías",
        Gestación:"93 a 105 días",
        Longevidad:"20 años en cautiverio.",
        Situacion_actual:"En peligro de extinción.",
        Distribucion_Geografica:"Suroeste de Estados Unidos hasta la Patagonia."
    },{
        id:15, Nombre:"Perio Mexicano",
        Nombre_cientifico:"Psittacara holochlorus",
        Clase:"Aves",
        Orden:"Psittaciformes",
        Familia:"Psittacidae",
        Alimentacion:"Semillas, nueces, bayas y frutas",
        Puesta:"4 huevos.",
        Habitat:"Bosques de tierras altas y bosques caducifólios",
        Longevidad:"21 años en cautiverio",
        Situacion_actual:"Amenazada.",
        Distribucion_Geografica:"Sur de México hasta Norte de Nicaragua"
    }

];

app.get('/', (req, res) => {
    res.send('API');
});

app.get('/api/animales', (req, res) => {
    res.send(animales);
});

app.get('/api/animales/:id', (req, res) => {
    const animal = animales.find(c => c.id === parseInt(req.params.id));
    if (!animal) return res.status(404).send("Animal no encontrado!");
    else res.send(animal);
})





app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})