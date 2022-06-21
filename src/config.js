const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const baseUri = "ipfs://NewUriToReplace";

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    //! FUX - ANZUG
    growEditionSizeTo: 12, //? 6 !! 12
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
    growEditionSizeTo: 30, //? 15 !! 30
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
    growEditionSizeTo: 36, //? 18 !! 36
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
    growEditionSizeTo: 38, //? 38
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
    growEditionSizeTo: 40, //? 24 !! 40
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
    growEditionSizeTo: 58, //? 33  !! 58
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
    growEditionSizeTo: 62, //? 35 !! 62
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
    growEditionSizeTo: 68, //? 38 !! 68
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
    growEditionSizeTo: 70, //? 70
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
    growEditionSizeTo: 76, //? 41 !! 76
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
    growEditionSizeTo: 78, //? 42 !! 78
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
    growEditionSizeTo: 94, //? 50 !! 94
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
    growEditionSizeTo: 118, //? 62 !! 118
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
    growEditionSizeTo: 126, //? 66 !! 126
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

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const extraMetadata = {};

// NFTPort Info
// ** REQUIRED **
const AUTH = "bbbb7b73-6551-4379-8974-3f2827304cd0";
const LIMIT = 1; // Your API key rate limit
const CONTRACT_NAME = "KryptoBux"; // Contract Name it will be visible in the Collection
const CONTRACT_SYMBOL = "KB";
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

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  MINT_TO_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  INTERVAL,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  CONTRACT_TYPE,
  REVEAL_PROMPT,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
};
