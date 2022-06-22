# Welcome to KrptoBux 🔥

All the code in these repos was created with the help of HashLips code and some features on that.

# KryptoBux Art Engine 🔥

Create generative art by using the canvas api and node js. Before you use the generation engine, make sure you have node.js(v10.18.0) installed.

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
