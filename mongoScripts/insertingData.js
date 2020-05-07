db = connect('localhost:27017/db')

var data = [
    {
        "_id": "5eb3e772307d67a4709dc579",
        "index": 0,
        "name": "Kelli Alvarez",
        "motherName": "Stuart Evans",
        "fatherName": "Nora Rush",
        "gender": "female",
        "companyName": "VERTIDE"
    },
    {
        "_id": "5eb3e772cb352713625440df",
        "index": 1,
        "name": "Lillian Cotton",
        "motherName": "Lola Hudson",
        "fatherName": "Victoria Riley",
        "gender": "female",
        "companyName": "EXOSWITCH"
    },
    {
        "_id": "5eb3e7728a82348d188fd229",
        "index": 2,
        "name": "Lancaster Banks",
        "motherName": "James Vaughan",
        "fatherName": "Bridgette Burris",
        "gender": "female",
        "companyName": "RAMJOB"
    },
    {
        "_id": "5eb3e772429a1c7bbb8fc73b",
        "index": 3,
        "name": "Wilkinson Vance",
        "motherName": "Kerry Bean",
        "fatherName": "Gentry Hughes",
        "gender": "male",
        "companyName": "UBERLUX"
    },
    {
        "_id": "5eb3e7722d26bb6e9529b80c",
        "index": 4,
        "name": "Hobbs Guerrero",
        "motherName": "Kara Kennedy",
        "fatherName": "Walsh Boone",
        "gender": "male",
        "companyName": "FRENEX"
    },
    {
        "_id": "5eb3e772d1f3f3123bfeb5f6",
        "index": 5,
        "name": "Mendoza Cook",
        "motherName": "Wilma Waters",
        "fatherName": "Tina Briggs",
        "gender": "female",
        "companyName": "KINDALOO"
    },
    {
        "_id": "5eb3e7728e8bb8eaa5206250",
        "index": 6,
        "name": "Kinney Gaines",
        "motherName": "Head Willis",
        "fatherName": "Moss Ochoa",
        "gender": "male",
        "companyName": "ROBOID"
    },
    {
        "_id": "5eb3e77216460a855579f794",
        "index": 7,
        "name": "Osborne Alford",
        "motherName": "Deborah Bartlett",
        "fatherName": "Lelia Manning",
        "gender": "female",
        "companyName": "GEEKWAGON"
    },
    {
        "_id": "5eb3e7726755997d2a8c26a1",
        "index": 8,
        "name": "Maggie Higgins",
        "motherName": "Diane Cardenas",
        "fatherName": "Terra Frazier",
        "gender": "female",
        "companyName": "AVENETRO"
    },
    {
        "_id": "5eb3e7725876e3bf43f1f9dc",
        "index": 9,
        "name": "Brewer Best",
        "motherName": "Mccarthy Dickerson",
        "fatherName": "Bessie Becker",
        "gender": "female",
        "companyName": "FRANSCENE"
    },
    {
        "_id": "5eb3e772653862c81f919ead",
        "index": 10,
        "name": "Cain Crosby",
        "motherName": "Hudson Langley",
        "fatherName": "Tillman Fuller",
        "gender": "male",
        "companyName": "HAIRPORT"
    },
    {
        "_id": "5eb3e7723039bcc2f8d2141c",
        "index": 11,
        "name": "Noel Powers",
        "motherName": "Bolton Hutchinson",
        "fatherName": "Kristi Stafford",
        "gender": "female",
        "companyName": "LIMOZEN"
    },
    {
        "_id": "5eb3e77230b6c659964b93c8",
        "index": 12,
        "name": "Barbra Hoffman",
        "motherName": "Carter Strong",
        "fatherName": "Ruth Carver",
        "gender": "female",
        "companyName": "MARKETOID"
    },
    {
        "_id": "5eb3e772e2ae11b20e8a0fc0",
        "index": 13,
        "name": "Selena Fletcher",
        "motherName": "Rojas Gay",
        "fatherName": "Hale Perez",
        "gender": "male",
        "companyName": "PHORMULA"
    },
    {
        "_id": "5eb3e772eb5e13f928847834",
        "index": 14,
        "name": "Valeria Smith",
        "motherName": "Rodgers Conner",
        "fatherName": "Caroline Hood",
        "gender": "female",
        "companyName": "SULTRAX"
    },
    {
        "_id": "5eb3e7726f9fe0640ffc4b34",
        "index": 15,
        "name": "Mayer Schroeder",
        "motherName": "Cross Wiggins",
        "fatherName": "Mcintosh Cleveland",
        "gender": "male",
        "companyName": "ZANITY"
    },
    {
        "_id": "5eb3e77227a94ca2fba104f0",
        "index": 16,
        "name": "Harrington Hurley",
        "motherName": "Leon Parrish",
        "fatherName": "Rosario Cooke",
        "gender": "female",
        "companyName": "UNISURE"
    },
    {
        "_id": "5eb3e7721b51ca7e9655d292",
        "index": 17,
        "name": "Clara Rutledge",
        "motherName": "Pitts Massey",
        "fatherName": "Charlene Grant",
        "gender": "female",
        "companyName": "TUBESYS"
    },
    {
        "_id": "5eb3e772f184aac07f73faab",
        "index": 18,
        "name": "Mcdaniel Poole",
        "motherName": "Cassandra Roman",
        "fatherName": "Leach Gillespie",
        "gender": "male",
        "companyName": "SEALOUD"
    },
    {
        "_id": "5eb3e7726e045a2a64ebfa55",
        "index": 19,
        "name": "Lana Craig",
        "motherName": "Daugherty Moran",
        "fatherName": "Lula Sanders",
        "gender": "female",
        "companyName": "BESTO"
    },
    {
        "_id": "5eb3e772d7dbe2cc129083a0",
        "index": 20,
        "name": "Sherrie Gonzales",
        "motherName": "Booth Burns",
        "fatherName": "Chandler Brooks",
        "gender": "male",
        "companyName": "CEPRENE"
    },
    {
        "_id": "5eb3e772d69b46375e26f0de",
        "index": 21,
        "name": "Dorsey Leach",
        "motherName": "Aguirre House",
        "fatherName": "Joann Cameron",
        "gender": "female",
        "companyName": "GEEKFARM"
    },
    {
        "_id": "5eb3e772d5d11fb6c35e29a7",
        "index": 22,
        "name": "Long Nolan",
        "motherName": "Mcfadden Brennan",
        "fatherName": "Bright Bradshaw",
        "gender": "male",
        "companyName": "TURNABOUT"
    },
    {
        "_id": "5eb3e7728a143e0613e17cb3",
        "index": 23,
        "name": "Chapman Woods",
        "motherName": "Angelia Giles",
        "fatherName": "Sykes Stewart",
        "gender": "male",
        "companyName": "ENERSAVE"
    },
    {
        "_id": "5eb3e772d41f2e87950d60e3",
        "index": 24,
        "name": "Ethel Livingston",
        "motherName": "Bryant Noble",
        "fatherName": "Jean Snow",
        "gender": "female",
        "companyName": "COREPAN"
    },
    {
        "_id": "5eb3e772832692dcc88bb7fb",
        "index": 25,
        "name": "Martina Nieves",
        "motherName": "Colette Hall",
        "fatherName": "Madeleine Espinoza",
        "gender": "female",
        "companyName": "TETRATREX"
    },
    {
        "_id": "5eb3e7726a992d7dd0bfb23a",
        "index": 26,
        "name": "Morgan Atkins",
        "motherName": "Cheri Shepard",
        "fatherName": "Stein Lopez",
        "gender": "male",
        "companyName": "XEREX"
    },
    {
        "_id": "5eb3e77298687188efcf27c7",
        "index": 27,
        "name": "Rutledge Rowland",
        "motherName": "York Oliver",
        "fatherName": "Elnora Roy",
        "gender": "female",
        "companyName": "SNOWPOKE"
    },
    {
        "_id": "5eb3e77204e845791aef5c7f",
        "index": 28,
        "name": "Douglas Townsend",
        "motherName": "Wagner Perry",
        "fatherName": "Janis Rose",
        "gender": "female",
        "companyName": "FITCORE"
    },
    {
        "_id": "5eb3e77238932670bcc5ef4e",
        "index": 29,
        "name": "Angelina Gomez",
        "motherName": "Banks Sanford",
        "fatherName": "Lorrie Fox",
        "gender": "female",
        "companyName": "NSPIRE"
    },
    {
        "_id": "5eb3e772813992df95409792",
        "index": 30,
        "name": "Cotton Schneider",
        "motherName": "Jane Pace",
        "fatherName": "Chang Gill",
        "gender": "male",
        "companyName": "CORECOM"
    },
    {
        "_id": "5eb3e77206a05091dd288e18",
        "index": 31,
        "name": "Milagros Mercer",
        "motherName": "Moran Hahn",
        "fatherName": "Glenda Fulton",
        "gender": "female",
        "companyName": "ZOLAVO"
    },
    {
        "_id": "5eb3e77219922c53f2749b0d",
        "index": 32,
        "name": "Monica Salinas",
        "motherName": "Ola Goodwin",
        "fatherName": "Vicki Bond",
        "gender": "female",
        "companyName": "ZAPHIRE"
    },
    {
        "_id": "5eb3e7725664ecec8bebd937",
        "index": 33,
        "name": "Ellis Alvarado",
        "motherName": "Mcmillan Franks",
        "fatherName": "Lorraine Duran",
        "gender": "female",
        "companyName": "ISOSURE"
    },
    {
        "_id": "5eb3e7721b751726895d9948",
        "index": 34,
        "name": "Bettye Padilla",
        "motherName": "Lila Huffman",
        "fatherName": "Concepcion Barber",
        "gender": "female",
        "companyName": "EXOZENT"
    },
    {
        "_id": "5eb3e772034f5bfa157997e7",
        "index": 35,
        "name": "Cathleen Tyler",
        "motherName": "Neal David",
        "fatherName": "Atkinson Luna",
        "gender": "male",
        "companyName": "PROSELY"
    },
    {
        "_id": "5eb3e772c43fd3da5daad87c",
        "index": 36,
        "name": "Jordan Howe",
        "motherName": "Summers Tucker",
        "fatherName": "Lou Durham",
        "gender": "female",
        "companyName": "ESSENSIA"
    },
    {
        "_id": "5eb3e7728098f4a129675db1",
        "index": 37,
        "name": "Acevedo Wooten",
        "motherName": "Lilia Franklin",
        "fatherName": "Lynne Vazquez",
        "gender": "female",
        "companyName": "DEEPENDS"
    },
    {
        "_id": "5eb3e7723988a754b79ded1c",
        "index": 38,
        "name": "Candice Norton",
        "motherName": "Mercedes Mathis",
        "fatherName": "Alisa Koch",
        "gender": "female",
        "companyName": "GOLISTIC"
    },
    {
        "_id": "5eb3e772aa395dda767d9bfc",
        "index": 39,
        "name": "Nichols Pitts",
        "motherName": "Ellison Key",
        "fatherName": "Vasquez Mendoza",
        "gender": "male",
        "companyName": "XUMONK"
    },
    {
        "_id": "5eb3e7722a1c20929adb24b0",
        "index": 40,
        "name": "Eliza Mcintosh",
        "motherName": "Farrell Zamora",
        "fatherName": "Carlene Figueroa",
        "gender": "female",
        "companyName": "UNDERTAP"
    },
    {
        "_id": "5eb3e77223630571f39cc02f",
        "index": 41,
        "name": "Mildred Pittman",
        "motherName": "Lina Palmer",
        "fatherName": "Doreen Faulkner",
        "gender": "female",
        "companyName": "RONBERT"
    },
    {
        "_id": "5eb3e772ff0b897ff5a1e2ee",
        "index": 42,
        "name": "Deleon Hayes",
        "motherName": "Walter Moses",
        "fatherName": "Sargent Curtis",
        "gender": "male",
        "companyName": "ZENSUS"
    },
    {
        "_id": "5eb3e77264349685e50852ce",
        "index": 43,
        "name": "Foley Reilly",
        "motherName": "Angeline William",
        "fatherName": "Schmidt Kline",
        "gender": "male",
        "companyName": "MEDMEX"
    },
    {
        "_id": "5eb3e772f381f4845cecc8fb",
        "index": 44,
        "name": "Dillon Sampson",
        "motherName": "Jennie Lynch",
        "fatherName": "Lois Rodriquez",
        "gender": "female",
        "companyName": "EXTRAWEAR"
    },
    {
        "_id": "5eb3e7725099d5c4f88662d0",
        "index": 45,
        "name": "Austin Greene",
        "motherName": "Reyna Cantrell",
        "fatherName": "Tiffany Parker",
        "gender": "female",
        "companyName": "APPLIDEC"
    },
    {
        "_id": "5eb3e772149e7b01eb8f662f",
        "index": 46,
        "name": "Sosa Gates",
        "motherName": "Watkins Curry",
        "fatherName": "Benton Gonzalez",
        "gender": "male",
        "companyName": "ZOSIS"
    },
    {
        "_id": "5eb3e7720395b9c14771a04a",
        "index": 47,
        "name": "Gail Kent",
        "motherName": "Morgan Dunlap",
        "fatherName": "Mclaughlin Hernandez",
        "gender": "male",
        "companyName": "KROG"
    },
    {
        "_id": "5eb3e772bbdf78c62fa2f3b1",
        "index": 48,
        "name": "Tonia Michael",
        "motherName": "Judith Berry",
        "fatherName": "Snow Sargent",
        "gender": "male",
        "companyName": "EMOLTRA"
    },
    {
        "_id": "5eb3e77295a5d7c96e530084",
        "index": 49,
        "name": "Melinda Gamble",
        "motherName": "Liz Acosta",
        "fatherName": "Carmela Holden",
        "gender": "female",
        "companyName": "NEBULEAN"
    }
]


var insertStatus = db.users.insertMany(data);
