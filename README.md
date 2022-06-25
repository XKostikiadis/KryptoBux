# Welcome to KrptoBux 🔥

All the code in these repos was created with the help of HashLips code and some features on that.

# KryptoBux Art Engine 🔥

Create generative art by using the canvas api and node js. Before you use the generation engine, make sure you have node.js(v10.18.0) installed.

## Disclaimers 

Code is an updated version of Haslipts Art Engine Set up to our circumstances! Please check https://github.com/HashLips/hashlips_art_engine 
You can find more about the code and how it works there! 


## Installation 🛠️

If you are cloning the project then run this first, otherwise you can download the source code on the release page and skip this step.

```sh
git clone https://github.com/HashLips/hashlips_art_engine.git
```

Go to the root of your folder and run this command if you have yarn installed.

```sh
yarn install
```

Alternatively you can run this command if you have node installed.

```sh
npm install
```

## Before Creation!

### Create Those Folders inside Directory: AllTeamsSortedFencing , AllTeamsSortedNotFencing, FolderOfAllTeamLayersPerItem

![image](https://user-images.githubusercontent.com/72341781/175108966-808ef01a-1bcd-4f07-980c-e9e7f761f03c.png)

Layers should be following some specifications. Those are:

- Layer dimensions are 3000x3000
- Representing color system is RGB
- Layer needs to be type of PNG
- Layer naming as follows below
  - **Anzug:** itemName_figureName_color/wurst_teamName_cityName **Example:** Anzug_Bursch_Wurst_Corps Frisia_Braunschweig
  - **Augen:** / Mensurbrille / Augen Bier: figureName_itemName **Example:** AlteHerr_Bieraugen
  - **Band:** itemName_figureName_teamName_cityName **Example:** Band_Fux_Corps Frisia_Braunschweig
  - **Cerevis:** itemName_figureName_teamName_cityName **Example:** Cerevis_Fux_Corps Frisia_Braunschweig
  - **Charge:** itemName_teamName_cityName **Example:** Chargenwichs_Corps Frisia_Braunschweig
  - **Figur:** figureName **Example:** Fux 
  - **Hintegrund:** itemName_teamName_cityName **Example:** Hintergund_Corps Frisia_Braunschweig
  - **Kettenhemd:** itemName_figureName **Example:** Kettenhemd_AlteHerr 
  - **Muetze / Muetze Bier:** itemName_figureName_teamName_cityName **Example:** Muetze_Bursch_Corps Frisia_Braunschweig
  - **Narbe:** figureName_itemName **Example:** AlteHerr_Narbe
  - **Polo:** itemName_colorName **Example:** Polo_Bier
  - **Polo Hemd:** itemName **Example:** Hemd


Make sure that folder FolderOfAllTeamLayersPerItem has every subfolder (if not create them) as shown below:

![image](https://user-images.githubusercontent.com/72341781/174906696-1a91c289-f021-4fa1-af92-4c4b80f889fe.png)

After that check / update inside every subfolder with the correct item layers.

![image](https://user-images.githubusercontent.com/72341781/174909969-f31c8f50-a495-4585-b93f-e35ae8c9b5ba.png)

## Coding

### First steps:

Head to index.js file and make sure that the code look like this: 

```js
const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);
const { startSorting, startRenaming } = require(`${basePath}/src/script.js`);

(() => {
  startSorting();
  // startRenaming();
  // for (let index = 0; index < ${NumberOfTeams}; index++) {
  //   buildSetup(index);
  //   startCreating(index);
  // }
})();
```

You need to make sure that startSorting not in comments like this:

```js
startSorthing()
```

Then open the terminal and type npm run generate to Create/Sort every layer to their correct team!

```js
npm run generate
```

The result will be something like this: 

![image](https://user-images.githubusercontent.com/72341781/175097932-c22f1ce7-22ad-4ffc-a2b9-f1bd3c12ed3c.png)

### IMPORTANT

Exlcude the teams that are not fencing inside the AllTeamsSortedNotFencing Folder:

![image](https://user-images.githubusercontent.com/72341781/175098695-4af363db-5240-4a06-8e91-9419d5892ee9.png)


Again in the index.js file comment the startSorting method and uncomment the lines 8-11 as seen bellow:

```js
const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);
const { startSorting, startRenaming } = require(`${basePath}/src/script.js`);

(() => {
  // startSorting();
  // startRenaming();
  for (let index = 0; index < {NumbersOfTeams}; index++) {
    buildSetup(index);
    startCreating(index);
  }
})();
```

## Folders Managment 

You need to run the code 2 times once for the folder of the teams that are fencing and once for the teams that do not.

So head to main.js file and at line 7-8 you can see the the folder we are using to create the teams for the first part you need to have something like this:
```js
const teamLayersDir = `${basePath}/AllTeamsSortedFencing`;
// const teamLayersDir = `${basePath}/AllTeamsSortedNotFencing`;
```

### Head to index.js and replace NumberOfTeams with the ammount of teams there are inside the folder

```js
for (let index = 0; index < 13; index++) {
    buildSetup(index);
    startCreating(index);
  }
```

### IMPORTANT

Open config.js file and make sure that lines 13-194 are not commented and lines 197-339 like this:

<details> 
<summary>layerConfigurations</summary>
   
  
```js
const layerConfigurations = [
  {
    //! FUX - ANZUG
    growEditionSizeTo: 12,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Fux" },
      { name: "Fux_Muetze" },
      { name: "Fux_Augen" },
      { name: "Fux_Narbe" },
      { name: "Fux_Anzug" },
    ],
  },

  {
    //! FUX - NORMAL
    growEditionSizeTo: 30,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Fux" },
      { name: "Fux_Augen" },
      { name: "Fux_Narbe" },
      { name: "Polo" },
      { name: "Fux_Band" },
    ],
  },

  {
    //! FUX - CHARGE
    growEditionSizeTo: 36,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Fux" },
      { name: "Fux_Muetze" },
      { name: "Fux_Augen" },
      { name: "Fux_Narbe" },
      { name: "Charge" },
    ],
  },

  {
    //! FUX - KettenHemd
    growEditionSizeTo: 38,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Fux" },
      { name: "Fux_Mensurbrille" },
      { name: "Fux_Narbe" },
      { name: "Fux_Kettenhemd" },
      { name: "Fux_Band" },
    ],
  },

  {
    //! BURSCH - ANZUG
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Bursch_Muetze" },
      { name: "Bursch_Augen" },
      { name: "Bursch_Narbe" },
      { name: "Bursch_Anzug" },
    ],
  },

  {
    //! BURSCH - NORMAL
    growEditionSizeTo: 58,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Bursch_Augen" },
      { name: "Bursch_Narbe" },
      { name: "Polo" },
      { name: "Bursch_Band" },
    ],
  },

  {
    //! BURSCH - ANZUG-BIER
    growEditionSizeTo: 62,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Bursch_Muetze_Bier" },
      { name: "Bursch_Augen_Bier" },
      { name: "Bursch_Narbe" },
      { name: "Bursch_Anzug" },
    ],
  },

  {
    //! BURSCH - NORMAL-BIER
    growEditionSizeTo: 68,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Bursch_Augen_Bier" },
      { name: "Bursch_Narbe" },
      { name: "Polo" },
      { name: "Bursch_Band" },
    ],
  },

  {
    //! BURSCH - KettenHemd
    growEditionSizeTo: 70,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Bursch_Mensurbrille" },
      { name: "Bursch_Narbe" },
      { name: "Bursch_Kettenhemd" },
      { name: "Bursch_Band" },
    ],
  },

  {
    //! BURSCH - CHARGE
    growEditionSizeTo: 76,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Cerevis" },
      { name: "Bursch_Augen" },
      { name: "Bursch_Narbe" },
      { name: "Charge" },
    ],
  },

  {
    //! BURSCH - CHARGE-BIER
    growEditionSizeTo: 78,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Cerevis" },
      { name: "Bursch_Augen_Bier" },
      { name: "Bursch_Narbe" },
      { name: "Charge" },
    ],
  },

  {
    //! ALTEHERR - ANZUG
    growEditionSizeTo: 94,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "AlteHerr" },
      { name: "AlteHerr_Muetze" },
      { name: "AlteHerr_Augen" },
      { name: "AlteHerr_Narbe" },
      { name: "AlteHerr_Anzug" },
    ],
  },

  {
    //! ALTEHERR - NORMAL
    growEditionSizeTo: 118,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "AlteHerr" },
      { name: "AlteHerr_Augen" },
      { name: "AlteHerr_Narbe" },
      { name: "Polo" },
      { name: "AlteHerr_Band" },
    ],
  },

  {
    //! BURSCH - CHARGE
    growEditionSizeTo: 126,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "AlteHerr" },
      { name: "Cerevis" },
      { name: "AlteHerr_Augen" },
      { name: "AlteHerr_Narbe" },
      { name: "Charge" },
    ],
  },

  // //! COMMENT THIS FOR THE TEAMS THAT ARE EXCLUDED

  // {
  //   //! FUX - ANZUG
  //   growEditionSizeTo: 6,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Fux" },
  //     { name: "Fux_Muetze" },
  //     { name: "Fux_Augen" },
  //     { name: "Fux_Anzug" },
  //   ],
  // },

  // {
  //   //! FUX - NORMAL
  //   growEditionSizeTo: 15,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Fux" },
  //     { name: "Fux_Augen" },
  //     { name: "Polo" },
  //     { name: "Fux_Band" },
  //   ],
  // },

  // {
  //   //! FUX - CHARGE
  //   growEditionSizeTo: 18,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Fux" },
  //     { name: "Fux_Muetze" },
  //     { name: "Fux_Augen" },
  //     { name: "Charge" },
  //   ],
  // },

  // {
  //   //! BURSCH - ANZUG
  //   growEditionSizeTo: 24,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Bursch_Muetze" },
  //     { name: "Bursch_Augen" },
  //     { name: "Bursch_Anzug" },
  //   ],
  // },

  // {
  //   //! BURSCH - NORMAL
  //   growEditionSizeTo: 33,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Bursch_Augen" },
  //     { name: "Polo" },
  //     { name: "Bursch_Band" },
  //   ],
  // },

  // {
  //   //! BURSCH - ANZUG-BIER
  //   growEditionSizeTo: 35,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Bursch_Muetze_Bier" },
  //     { name: "Bursch_Augen_Bier" },
  //     { name: "Bursch_Anzug" },
  //   ],
  // },

  // {
  //   //! BURSCH - NORMAL-BIER
  //   growEditionSizeTo: 38,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Bursch_Augen_Bier" },
  //     { name: "Polo" },
  //     { name: "Bursch_Band" },
  //   ],
  // },

  // {
  //   //! BURSCH - CHARGE
  //   growEditionSizeTo: 41,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Cerevis" },
  //     { name: "Bursch_Augen" },
  //     { name: "Charge" },
  //   ],
  // },

  // {
  //   //! BURSCH - CHARGE-BIER
  //   growEditionSizeTo: 42,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Cerevis" },
  //     { name: "Bursch_Augen_Bier" },
  //     { name: "Charge" },
  //   ],
  // },

  // {
  //   //! ALTEHERR - ANZUG
  //   growEditionSizeTo: 50,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "AlteHerr" },
  //     { name: "AlteHerr_Muetze" },
  //     { name: "AlteHerr_Augen" },
  //     { name: "AlteHerr_Anzug" },
  //   ],
  // },

  // {
  //   //! ALTEHERR - NORMAL
  //   growEditionSizeTo: 62,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "AlteHerr" },
  //     { name: "AlteHerr_Augen" },
  //     { name: "Polo" },
  //     { name: "AlteHerr_Band" },
  //   ],
  // },

  // {
  //   //! BURSCH - CHARGE
  //   growEditionSizeTo: 66,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "AlteHerr" },
  //     { name: "Cerevis" },
  //     { name: "AlteHerr_Augen" },
  //     { name: "Charge" },
  //   ],
  // },
];
```
</details>

Open terminal and type:

```js
npm run generate
```

After the completion of the first folder open main.js file and replace the code as it follows:

```js
// const teamLayersDir = `${basePath}/AllTeamsSortedFencing`;
const teamLayersDir = `${basePath}/AllTeamsSortedNotFencing`;
```

config.js:

<details> 
<summary>layerConfigurations</summary>
   
  
```js
const layerConfigurations = [
  // {
  //   //! FUX - ANZUG
  //   growEditionSizeTo: 12,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Fux" },
  //     { name: "Fux_Muetze" },
  //     { name: "Fux_Augen" },
  //     { name: "Fux_Narbe" },
  //     { name: "Fux_Anzug" },
  //   ],
  // },

  // {
  //   //! FUX - NORMAL
  //   growEditionSizeTo: 30,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Fux" },
  //     { name: "Fux_Augen" },
  //     { name: "Fux_Narbe" },
  //     { name: "Polo" },
  //     { name: "Fux_Band" },
  //   ],
  // },

  // {
  //   //! FUX - CHARGE
  //   growEditionSizeTo: 36,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Fux" },
  //     { name: "Fux_Muetze" },
  //     { name: "Fux_Augen" },
  //     { name: "Fux_Narbe" },
  //     { name: "Charge" },
  //   ],
  // },

  // {
  //   //! FUX - KettenHemd
  //   growEditionSizeTo: 38,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Fux" },
  //     { name: "Fux_Mensurbrille" },
  //     { name: "Fux_Narbe" },
  //     { name: "Fux_Kettenhemd" },
  //     { name: "Fux_Band" },
  //   ],
  // },

  // {
  //   //! BURSCH - ANZUG
  //   growEditionSizeTo: 40,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Bursch_Muetze" },
  //     { name: "Bursch_Augen" },
  //     { name: "Bursch_Narbe" },
  //     { name: "Bursch_Anzug" },
  //   ],
  // },

  // {
  //   //! BURSCH - NORMAL
  //   growEditionSizeTo: 58,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Bursch_Augen" },
  //     { name: "Bursch_Narbe" },
  //     { name: "Polo" },
  //     { name: "Bursch_Band" },
  //   ],
  // },

  // {
  //   //! BURSCH - ANZUG-BIER
  //   growEditionSizeTo: 62,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Bursch_Muetze_Bier" },
  //     { name: "Bursch_Augen_Bier" },
  //     { name: "Bursch_Narbe" },
  //     { name: "Bursch_Anzug" },
  //   ],
  // },

  // {
  //   //! BURSCH - NORMAL-BIER
  //   growEditionSizeTo: 68,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Bursch_Augen_Bier" },
  //     { name: "Bursch_Narbe" },
  //     { name: "Polo" },
  //     { name: "Bursch_Band" },
  //   ],
  // },

  // {
  //   //! BURSCH - KettenHemd
  //   growEditionSizeTo: 70,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Bursch_Mensurbrille" },
  //     { name: "Bursch_Narbe" },
  //     { name: "Bursch_Kettenhemd" },
  //     { name: "Bursch_Band" },
  //   ],
  // },

  // {
  //   //! BURSCH - CHARGE
  //   growEditionSizeTo: 76,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Cerevis" },
  //     { name: "Bursch_Augen" },
  //     { name: "Bursch_Narbe" },
  //     { name: "Charge" },
  //   ],
  // },

  // {
  //   //! BURSCH - CHARGE-BIER
  //   growEditionSizeTo: 78,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "Bursch" },
  //     { name: "Cerevis" },
  //     { name: "Bursch_Augen_Bier" },
  //     { name: "Bursch_Narbe" },
  //     { name: "Charge" },
  //   ],
  // },

  // {
  //   //! ALTEHERR - ANZUG
  //   growEditionSizeTo: 94,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "AlteHerr" },
  //     { name: "AlteHerr_Muetze" },
  //     { name: "AlteHerr_Augen" },
  //     { name: "AlteHerr_Narbe" },
  //     { name: "AlteHerr_Anzug" },
  //   ],
  // },

  // {
  //   //! ALTEHERR - NORMAL
  //   growEditionSizeTo: 118,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "AlteHerr" },
  //     { name: "AlteHerr_Augen" },
  //     { name: "AlteHerr_Narbe" },
  //     { name: "Polo" },
  //     { name: "AlteHerr_Band" },
  //   ],
  // },

  // {
  //   //! BURSCH - CHARGE
  //   growEditionSizeTo: 126,
  //   layersOrder: [
  //     { name: "Hintergrund" },
  //     { name: "AlteHerr" },
  //     { name: "Cerevis" },
  //     { name: "AlteHerr_Augen" },
  //     { name: "AlteHerr_Narbe" },
  //     { name: "Charge" },
  //   ],
  // },

  //! COMMENT THIS FOR THE TEAMS THAT ARE EXCLUDED

  {
    //! FUX - ANZUG
    growEditionSizeTo: 6,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Fux" },
      { name: "Fux_Muetze" },
      { name: "Fux_Augen" },
      { name: "Fux_Anzug" },
    ],
  },

  {
    //! FUX - NORMAL
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Fux" },
      { name: "Fux_Augen" },
      { name: "Polo" },
      { name: "Fux_Band" },
    ],
  },

  {
    //! FUX - CHARGE
    growEditionSizeTo: 18,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Fux" },
      { name: "Fux_Muetze" },
      { name: "Fux_Augen" },
      { name: "Charge" },
    ],
  },

  {
    //! BURSCH - ANZUG
    growEditionSizeTo: 24,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Bursch_Muetze" },
      { name: "Bursch_Augen" },
      { name: "Bursch_Anzug" },
    ],
  },

  {
    //! BURSCH - NORMAL
    growEditionSizeTo: 33,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Bursch_Augen" },
      { name: "Polo" },
      { name: "Bursch_Band" },
    ],
  },

  {
    //! BURSCH - ANZUG-BIER
    growEditionSizeTo: 35,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Bursch_Muetze_Bier" },
      { name: "Bursch_Augen_Bier" },
      { name: "Bursch_Anzug" },
    ],
  },

  {
    //! BURSCH - NORMAL-BIER
    growEditionSizeTo: 38,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Bursch_Augen_Bier" },
      { name: "Polo" },
      { name: "Bursch_Band" },
    ],
  },

  {
    //! BURSCH - CHARGE
    growEditionSizeTo: 41,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Cerevis" },
      { name: "Bursch_Augen" },
      { name: "Charge" },
    ],
  },

  {
    //! BURSCH - CHARGE-BIER
    growEditionSizeTo: 42,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "Bursch" },
      { name: "Cerevis" },
      { name: "Bursch_Augen_Bier" },
      { name: "Charge" },
    ],
  },

  {
    //! ALTEHERR - ANZUG
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "AlteHerr" },
      { name: "AlteHerr_Muetze" },
      { name: "AlteHerr_Augen" },
      { name: "AlteHerr_Anzug" },
    ],
  },

  {
    //! ALTEHERR - NORMAL
    growEditionSizeTo: 62,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "AlteHerr" },
      { name: "AlteHerr_Augen" },
      { name: "Polo" },
      { name: "AlteHerr_Band" },
    ],
  },

  {
    //! BURSCH - CHARGE
    growEditionSizeTo: 66,
    layersOrder: [
      { name: "Hintergrund" },
      { name: "AlteHerr" },
      { name: "Cerevis" },
      { name: "AlteHerr_Augen" },
      { name: "Charge" },
    ],
  },
];
```
</details>

### Do not forget to change NumbersOfTeams inside the index.js file:

```js
for (let index = 0; index < 3; index++) {
    buildSetup(index);
    startCreating(index);
  }
```

Open terminal and type:

```js
npm run generate
```

### Collection has been Made!

## Raname Images with the correct number

As you can see inside the build folder we have all the teams with their image/Json but there is a problem every team starts from 1 but we want to start from the number of the previous last teams image so:

Open index.js and comment everything except startRenaming(): 

```js
const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);
const { startSorting, startRenaming } = require(`${basePath}/src/script.js`);

(() => {
  // startSorting();
  startRenaming();
  // for (let index = 0; index < 3; index++) {
  //   buildSetup(index);
  //   startCreating(index);
  // }
})();
```

in terminal type:

```sh
npm run generate
```

###Check inside the Build folder you can see that every image/Json has the correct number!

## Update Json files and metadata

We have almost finished with our collection but we need to update the Json and the matadata files so:

inside the Src folder there is one more file named "PythonScript.py" open it!

### make sure that you have Python installed and if not install it + you need to have the Python Plugin!

if you read the code you can see below some functions:

```python
editJson()
editMetadata()
createFolders()
moveMetadata()
deleteMetadataFiles()
copyImages()
copyJson()
deleteImageFiles()
deleteJsonFiles()
deleteTeamFolders()
```

their functionality correspond to their naming so its not that hard to now what it does!

when you run code all Json and metadata files will be updated the teams will be deleted and we will have our final result! The kryptoBux Collection!

run the code at the top right:

![image](https://user-images.githubusercontent.com/72341781/175107302-94968035-9b73-43d7-82e8-433277b14147.png)


## Well Done Collection Has Been Created!

# Mint Process 

### First You need an API KEY from NFTPort

Please visit: https://www.nftport.xyz and create Free/Growth/Enterprise Authentication Key.

## Coding Part

Head to Config.js file at line 354 and below are the NFRPort info section where you will need to do the more changes!

At line 356 replace the "Your API KEY" with the one you have create from NFTPort!

```js
const AUTH = "Your API KEY";
```

Your API KEY rate limit it needs to be 1 ( Do not change it ) 

Dont forget to create your own Contract name and symbol so: 

```js
const CONTRACT_NAME = "Your Contract Name"; // Contract Name it will be visible in the Collection
const CONTRACT_SYMBOL = "Your Contract Symbol";
```

Contract Type is erc721:

```js
const CONTRACT_TYPE = "erc721";
```

CHAIN: Polygon or Rinkeby ( rinkeby is the test network / polygon the publish network ) 

```js
const CHAIN = "rinkeby"; //? polygon
```

MiNT_TO_ADDRESS and ROYALTY_ADDRESS you want to be the same ( it may be different if you want the royalty to be received elsewhere ) 

```js
const MINT_TO_ADDRESS = "YOUR ETH ADDRESS"; // YOUR ETH ADDRESS
const ROYALTY_ADDRESS = "YOUR ROYALTY ETH ADDRESS"; // Address that will receive the royalty
```

Royalty: Percentage of the token price that goes to the royalty address. 1000 bps = 10% 

```js
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
```

### Contract ADDRESS WILL BE CHANGED LATER 

```js
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it
```


### if you want to make a NFT Collection reaveal you need to change the code:

```js
// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = "Unknown"; // Replace with what you want the generic titles to say.
const GENERIC_DESCRIPTION = "Unknown"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = [
  "YOUR IMAGE URL ",
]; // Replace with your generic image(s). If multiple, separate with a comma.
```

Example:

```js
// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = "Gastava"; // Replace with what you want the generic titles to say.
const GENERIC_DESCRIPTION = "Gastava's Collection Reaveal"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = [
   "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh",
]; // Replace with your generic image(s). If multiple, separate with a comma.
```


<details> 
<summary>Code will Look Like this:</summary>
   
  
```js
const AUTH = "bbbb7b73-6551-4379-8974-3f2827304cd0";
const LIMIT = 1; // Your API key rate limit
const CONTRACT_NAME = "Gastava"; // Contract Name it will be visible in the Collection
const CONTRACT_SYMBOL = "GA";
const CONTRACT_TYPE = "erc721";
const MINT_TO_ADDRESS = "0xB3E9f7CE3129FBF7A5dAe697cd59E56f8198FDaA"; // YOUR ETH ADDRESS
const CHAIN = "rinkeby"; //? polygon
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xB3E9f7CE3129FBF7A5dAe697cd59E56f8198FDaA"; // Address that will receive the royalty
// ** OPTIONAL **
let CONTRACT_ADDRESS = "0x56436b20177613D5596D25aca24C02026034F5eD"; // If you want to manually include it
// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = "Unknown"; // Replace with what you want the generic titles to say.
const GENERIC_DESCRIPTION = "Unknown"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = [
  "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh",
]; // Replace with your generic image(s). If multiple, separate with a comma.
const REVEAL_PROMPT = true; // Set to false if you want to disable the prompt to confirm each reveal.
const INTERVAL = 900000; // Milliseconds. This is the interval for it to check for sales and reveal the NFT. 900000 = 15 minutes.

```
</details>

## Upload to IPFS

It is time to start uploading the images/JSON to IPFS. Do not forget to change the value from false to true if the collection will have a reveal!

First open the terminal and type npm run upload_files it may take some hours depending on the size and the number of images. ( JSON file will update with the URL of the image)

```sh
npm run upload_files 
```
![image](https://user-images.githubusercontent.com/72341781/175771577-c39e73e8-3b15-449b-bb8c-68238c704801.png)
![image](https://user-images.githubusercontent.com/72341781/175771580-2a3d3254-2479-4052-8e87-98d85584160b.png)

After the upload of the files. Go ahead and type npm run upload_metadata. Metadata will start uploading and the ipfsMetas Folder will created (if Generic was true one type  npm run create_generic to create the genericJson folder)

```sh
npm run upload_metadata
```

![image](https://user-images.githubusercontent.com/72341781/175771609-acd7c44e-651a-4ba3-9e0e-55a2d45a1bf8.png)
![image](https://user-images.githubusercontent.com/72341781/175771613-1ce841e8-8bcf-4e9d-a974-6f7dae8a2b83.png)

## Deploy Contract 

Next step is to upload the contract. If every data given in the config is valid the contract will start uploading.

In terminal type npm run deploy_contract

```sh
npm run deploy_contract
```

![image](https://user-images.githubusercontent.com/72341781/175771727-c2e14102-c905-40dc-bf60-537edc681edd.png)


When contract deployed successfully type npm run get_contract (if an error occur try later)

```sh
npm run get_contract
```

![image](https://user-images.githubusercontent.com/72341781/175771733-3ff0ccd0-38cc-40ae-9274-a9a0ecf8c085.png)


### You need to change the CONTRACT ADDRESS in the config.js file!

Head to build/contract/contract.json file and take the address:

![image](https://user-images.githubusercontent.com/72341781/175771790-90a15ad7-2816-4a9a-8ed4-9f5d5091876a.png)

Now go in the config.js file and change the line 367 with the contract address you copied.

![image](https://user-images.githubusercontent.com/72341781/175771829-2d3ed96f-d5ea-4dc0-9168-16d8c88d8dd5.png)


## Minting 

Final step is to mint the collection so in terminal type npm run mint. 

```sh
npm run mint
```

Minting will start after completion it is possible to check if something went wrong with the command npm run check_txns --dir=minted


# KrptoBux 🔥

For any questions or help contact:

Email: xristoskostikiadis@gmail.com
Discord: Gastava#6827
WhatsApp: +30 6978038428 

