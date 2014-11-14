(function (app) {
    app.controller('clientFilteringController', function () {
        this.characters = source();
    });
    
    app.config(function ($routeProvider) {
        $routeProvider.when('/filtering', {
            templateUrl: '/features/filtering/filtering.htm',
            controller: 'clientFilteringController',
            controllerAs: 'filterCtrl'
        });
    });

    function source() {
        return [
            {
                "id": 1011334,
                "name": "3-D Man",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/landscape_medium.jpg"
            },
            {
                "id": 1017100,
                "name": "A-Bomb (HAS)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/landscape_medium.jpg"
            },
            {
                "id": 1009144,
                "name": "A.I.M.",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec/landscape_medium.jpg"
            },
            {
                "id": 1009146,
                "name": "Abomination (Emil Blonsky)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04/landscape_medium.jpg"
            },
            {
                "id": 1016823,
                "name": "Abomination (Ultimate)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009148,
                "name": "Absorbing Man",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7/landscape_medium.jpg"
            },
            {
                "id": 1009149,
                "name": "Abyss",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64/landscape_medium.jpg"
            },
            {
                "id": 1011266,
                "name": "Adam Destine",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1010354,
                "name": "Adam Warlock",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860/landscape_medium.jpg"
            },
            {
                "id": 1010846,
                "name": "Aegis (Trey Rollins)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d/landscape_medium.gif"
            },
            {
                "id": 1011297,
                "name": "Agent Brand",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e/landscape_medium.jpg"
            },
            {
                "id": 1011031,
                "name": "Agent X (Nijo)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009150,
                "name": "Agent Zero",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790/landscape_medium.jpg"
            },
            {
                "id": 1011198,
                "name": "Agents of Atlas",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5/landscape_medium.jpg"
            },
            {
                "id": 1011175,
                "name": "Aginar",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1011136,
                "name": "Air-Walker (Gabriel Lan)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1011176,
                "name": "Ajak",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215/landscape_medium.jpg"
            },
            {
                "id": 1010870,
                "name": "Ajaxis",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/70/4c0035adc7d3a/landscape_medium.jpg"
            },
            {
                "id": 1011194,
                "name": "Akemi",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1011170,
                "name": "Alain",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009240,
                "name": "Albert Cleary",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1011120,
                "name": "Albion",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1010836,
                "name": "Alex Power",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce5a385a2e82/landscape_medium.jpg"
            },
            {
                "id": 1010755,
                "name": "Alex Wilder",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/2/c0/4c00377144d5a/landscape_medium.jpg"
            },
            {
                "id": 1011214,
                "name": "Alexa Mendez",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009497,
                "name": "Alexander Pierce",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1014990,
                "name": "Alice",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/4cd061e6d6573/landscape_medium.jpg"
            },
            {
                "id": 1009435,
                "name": "Alicia Masters",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4c003d40ac7ae/landscape_medium.jpg"
            },
            {
                "id": 1010370,
                "name": "Alpha Flight",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088/landscape_medium.jpg"
            },
            {
                "id": 1011324,
                "name": "Alpha Flight (Ultimate)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1011164,
                "name": "Alvin Maker",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1011227,
                "name": "Amadeus Cho",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/520288b9cb581/landscape_medium.jpg"
            },
            {
                "id": 1011382,
                "name": "Amazoness",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1011361,
                "name": "American Eagle (Jason Strongbow)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/f/80/4ce5a6d8b8f2a/landscape_medium.jpg"
            },
            {
                "id": 1009151,
                "name": "Amiko",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1010673,
                "name": "Amphibian (Earth-712)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1010905,
                "name": "Amun",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009152,
                "name": "Ancient One",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac/landscape_medium.jpg"
            },
            {
                "id": 1016824,
                "name": "Ancient One (Ultimate)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1011396,
                "name": "Angel (Thomas Halloway)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/531769834b15f/landscape_medium.jpg"
            },
            {
                "id": 1011338,
                "name": "Angel (Ultimate)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/4/50/531769ae4399f/landscape_medium.jpg"
            },
            {
                "id": 1010674,
                "name": "Anita Blake",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4c0038fa14452/landscape_medium.jpg"
            },
            {
                "id": 1009346,
                "name": "Anne Marie Hoag",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009154,
                "name": "Annihilus",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/528d31f20a2f6/landscape_medium.jpg"
            },
            {
                "id": 1011301,
                "name": "Anole",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4c002e635ddd9/landscape_medium.jpg"
            },
            {
                "id": 1010802,
                "name": "Ant-Man (Eric O'Grady)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d/landscape_medium.jpg"
            },
            {
                "id": 1010801,
                "name": "Ant-Man (Scott Lang)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0/landscape_medium.jpg"
            },
            {
                "id": 1011208,
                "name": "Anthem",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009156,
                "name": "Apocalypse",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/f/e0/526166076a1d0/landscape_medium.jpg"
            },
            {
                "id": 1011253,
                "name": "Apocalypse (Ultimate)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1010866,
                "name": "Aqueduct",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/5/50/4c0035b3630cd/landscape_medium.jpg"
            },
            {
                "id": 1010773,
                "name": "Arachne",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/70/5269526591794/landscape_medium.jpg"
            },
            {
                "id": 1017438,
                "name": "Araٌa",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009158,
                "name": "Arcade",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4c0042091ab69/landscape_medium.jpg"
            },
            {
                "id": 1010686,
                "name": "Arcana",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009159,
                "name": "Archangel",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/8/03/526165ed93180/landscape_medium.jpg"
            },
            {
                "id": 1009160,
                "name": "Arclight",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/4c0042067fd8b/landscape_medium.jpg"
            },
            {
                "id": 1010784,
                "name": "Ares",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/c/10/535ff3daea603/landscape_medium.jpg"
            },
            {
                "id": 1011275,
                "name": "Argent",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1011012,
                "name": "Armadillo",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/2/40/4c0032754da02/landscape_medium.jpg"
            },
            {
                "id": 1011298,
                "name": "Armor (Hisako Ichiki)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4c002e6cbf990/landscape_medium.jpg"
            },
            {
                "id": 1010827,
                "name": "Armory",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009740,
                "name": "Arnim Zola",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/8/b0/4c00393a4cb7c/landscape_medium.jpg"
            },
            {
                "id": 1009161,
                "name": "Artiee",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1010718,
                "name": "Asgardian",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009162,
                "name": "Askew-Tronics",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1010835,
                "name": "Asylum",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1010336,
                "name": "Atlas (Team)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009163,
                "name": "Aurora",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/f/10/4c004203f1072/landscape_medium.jpg"
            },
            {
                "id": 1009164,
                "name": "Avalanche",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/f/10/4c0042010d383/landscape_medium.jpg"
            },
            {
                "id": 1009165,
                "name": "Avengers",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7/landscape_medium.jpg"
            },
            {
                "id": 1015239,
                "name": "Avengers (Ultimate)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1011766,
                "name": "Azazel (Mutant)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009168,
                "name": "Banshee",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/03/52740e4619f54/landscape_medium.jpg"
            },
            {
                "id": 1009596,
                "name": "Banshee (Theresa Rourke)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/4ce5a1a50e56b/landscape_medium.jpg"
            },
            {
                "id": 1009169,
                "name": "Baron Strucker",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/8/80/4c0041fb5a90d/landscape_medium.jpg"
            },
            {
                "id": 1009170,
                "name": "Baron Zemo (Heinrich Zemo)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/4c0041f84c9fe/landscape_medium.jpg"
            },
            {
                "id": 1010906,
                "name": "Baron Zemo (Helmut Zemo)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4c0035890fb0a/landscape_medium.jpg"
            },
            {
                "id": 1011137,
                "name": "Baroness S'Bak",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1011354,
                "name": "Barracuda",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009550,
                "name": "Bart Rozum",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009171,
                "name": "Bastion",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/d/80/52695253215f4/landscape_medium.jpg"
            },
            {
                "id": 1009172,
                "name": "Batroc the Leaper",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4ce59eb840da5/landscape_medium.gif"
            },
            {
                "id": 1009173,
                "name": "Battering Ram",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708/landscape_medium.gif"
            },
            {
                "id": 1009174,
                "name": "Beak",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c0040b8329ad/landscape_medium.jpg"
            },
            {
                "id": 1009175,
                "name": "Beast",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3/landscape_medium.jpg"
            },
            {
                "id": 1010909,
                "name": "Beast (Earth-311)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4c0035813dc4c/landscape_medium.jpg"
            },
            {
                "id": 1010908,
                "name": "Beast (Ultimate)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/53176a9be110c/landscape_medium.jpg"
            },
            {
                "id": 1009176,
                "name": "Becatron",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009177,
                "name": "Bedlam",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009178,
                "name": "Beef",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708/landscape_medium.gif"
            },
            {
                "id": 1009179,
                "name": "Beetle (Abner Jenkins)",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_medium.jpg"
            },
            {
                "id": 1009489,
                "name": "Ben Parker",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9/landscape_medium.jpg"
            },
            {
                "id": 1011346,
                "name": "Ben Reilly",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/2/20/4ce5a6abaea69/landscape_medium.jpg"
            },
            {
                "id": 1010782,
                "name": "Ben Urich",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c00373d10e5e/landscape_medium.jpg"
            },
            {
                "id": 1010829,
                "name": "Bengal",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5269523ee6c03/landscape_medium.jpg"
            },
            {
                "id": 1009180,
                "name": "Beta-Ray Bill",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/3/90/52602f3e88d25/landscape_medium.jpg"
            },
            {
                "id": 1010325,
                "name": "Betty Brant",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4c7c644f453fb/landscape_medium.jpg"
            },
            {
                "id": 1009548,
                "name": "Betty Ross",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/2/b0/4ce5a12071562/landscape_medium.jpg"
            },
            {
                "id": 1011138,
                "name": "Beyonder",
                "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/7/10/528d31df87c49/landscape_medium.jpg"
            }
        ];
    };
}(window.angular.module('demo')));
