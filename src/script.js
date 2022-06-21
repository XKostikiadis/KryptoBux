const basePath = process.cwd();
const fs = require("fs");
const FolderOfAllTeamLayersPerItem = `${basePath}/FolderOfAllTeamLayersPerItem`;
const buildDir = `${basePath}/AllTeamsSortedFencing`;
const buildDir1 = `${basePath}/build`;
const allItems = fs.readdirSync(FolderOfAllTeamLayersPerItem);

const buildTeamFolder = (teamFolderName) => {
  if (!fs.existsSync(buildDir + `/${teamFolderName}`)) {
    fs.mkdirSync(buildDir + `/${teamFolderName}`, { recursive: true });
  }
};

const buildLayersFolder = (teamFolderName, LayerName) => {
  if (!fs.existsSync(buildDir + `/${teamFolderName}` + `/${LayerName}`)) {
    fs.mkdirSync(buildDir + `/${teamFolderName}` + `/${LayerName}`, {
      recursive: true,
    });
  }
};

const buildCityFolder = (teamFolderName, city) => {
  if (!fs.existsSync(buildDir + `/${teamFolderName}` + `/City_${city}`)) {
    fs.mkdirSync(buildDir + `/${teamFolderName}` + `/City_${city}`, {
      recursive: true,
    });
  }
};

const saveImage = (teamFolder, layer, itemName, imageName) => {
  fs.copyFile(
    FolderOfAllTeamLayersPerItem + `/${itemName}` + `/${layer}`,
    buildDir + `/${teamFolder}` + `/${itemName}` + `/${imageName}.png`,
    (err) => {
      if (err) {
        console.log("Error Found:", err);
      }
    }
  );
};

const saveImageForFigures = (
  teamFolder,
  itemName,
  layer,
  layerFolder,
  imageName
) => {
  fs.copyFile(
    FolderOfAllTeamLayersPerItem + `/${itemName}` + `/${layer}`,
    buildDir + `/${teamFolder}` + `/${layerFolder}` + `/${imageName}.png`,
    (err) => {
      if (err) {
        console.log("Error Found:", err);
      }
    }
  );
};

const startSorting = () => {
  allItems.forEach((item) => {
    if (item === "Anzug") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const itemName = splitLayer[0];
          const figureName = splitLayer[1];
          const color = splitLayer[2];
          const teamName = splitLayer[3];
          const cityName = splitLayer[4].slice(0, -4);
          buildTeamFolder(teamName);
          buildCityFolder(teamName, cityName);
          if (figureName === "Fux") {
            buildLayersFolder(teamName, `${figureName}_${itemName}`);
            saveImageForFigures(
              teamName,
              item,
              layer,
              `${figureName}_${item}`,
              `${itemName}_${color}_${teamName}`
            );
          }
          if (figureName === "Bursch") {
            buildLayersFolder(teamName, `${figureName}_${itemName}`);
            saveImageForFigures(
              teamName,
              item,
              layer,
              `${figureName}_${item}`,
              `${itemName}_${color}_${teamName}`
            );
            buildLayersFolder(teamName, `AlteHerr_${itemName}`);
            saveImageForFigures(
              teamName,
              item,
              layer,
              `AlteHerr_${item}`,
              `${itemName}_${color}_${teamName}`
            );
          }
        }
      });
    } else if (item === "Band") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const itemName = splitLayer[0];
          const figureName = splitLayer[1];
          const teamName = splitLayer[2];
          buildTeamFolder(teamName);
          if (figureName === "Fux") {
            buildLayersFolder(teamName, `${figureName}_${itemName}`);
            saveImageForFigures(
              teamName,
              item,
              layer,
              `${figureName}_${itemName}`,
              `${figureName}_${itemName}_${teamName}`
            );
          }
          if (figureName === "Bursch") {
            buildLayersFolder(teamName, "Bursch_Band");
            saveImageForFigures(
              teamName,
              item,
              layer,
              `${figureName}_${itemName}`,
              `${figureName}_${itemName}_${teamName}`
            );
          }
          if (figureName === "Bursch") {
            buildLayersFolder(teamName, "AlteHerr_Band");
            saveImageForFigures(
              teamName,
              item,
              layer,
              "AlteHerr_Band",
              `AlteHerr_Band_${teamName}`
            );
          }
        }
      });
    } else if (item === "Cerevis") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const itemName = splitLayer[0];
          const teamName = splitLayer[2];
          buildTeamFolder(teamName);
          buildLayersFolder(teamName, itemName);
          saveImage(teamName, layer, item, `${itemName}_${teamName}`);
        }
      });
    } else if (item === "Charge") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const itemName = splitLayer[0];
          const teamName = splitLayer[1];
          buildTeamFolder(teamName);
          buildLayersFolder(teamName, item);
          saveImage(teamName, layer, item, `${itemName}_${teamName}`);
        }
      });
    } else if (item === "Figur") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split(".");
          const itemName = splitLayer[0];
          const teamName = fs.readdirSync(buildDir);
          teamName.forEach((team) => {
            buildTeamFolder(team);
            buildLayersFolder(team, itemName);
            saveImageForFigures(team, item, layer, itemName, itemName);
          });
        }
      });
    } else if (item === "Hintergrund") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const itemName = splitLayer[0];
          const teamName = splitLayer[1];
          buildTeamFolder(teamName);
          buildLayersFolder(teamName, itemName);
          saveImage(teamName, layer, item, `${itemName}_${teamName}`);
        }
      });
    } else if (item === "Kettenhemd") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const figureName = splitLayer[1].slice(0, -4);
          const teamName = fs.readdirSync(buildDir);
          teamName.forEach((team) => {
            if (figureName === "AlteHerr") {
              buildLayersFolder(team, `${figureName}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figureName}_${item}`,
                `${figureName}_${item}`
              );
            }
            if (figureName === "Bursch") {
              buildLayersFolder(team, `${figureName}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figureName}_${item}`,
                `${figureName}_${item}`
              );
            }
            if (figureName === "Fux") {
              buildLayersFolder(team, `${figureName}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figureName}_${item}`,
                `${figureName}_${item}`
              );
            }
          });
        }
      });
    } else if (item === "Mensurbrille") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const figureName = splitLayer[0];
          const teamName = fs.readdirSync(buildDir);
          teamName.forEach((team) => {
            if (figureName === "AlteHerr") {
              buildLayersFolder(team, `${figureName}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figureName}_${item}`,
                `${figureName}_${item}`
              );
            }
            if (figureName === "Bursch") {
              buildLayersFolder(team, `${figureName}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figureName}_${item}`,
                `${figureName}_${item}`
              );
            }
            if (figureName === "Fux") {
              buildLayersFolder(team, `${figureName}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figureName}_${item}`,
                `${figureName}_${item}`
              );
            }
          });
        }
      });
    } else if (item === "Muetze") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const itemName = splitLayer[0];
          const figure = splitLayer[1];
          const teamName = splitLayer[2];
          buildTeamFolder(teamName);
          if (figure === "Fux") {
            buildLayersFolder(teamName, `${figure}_${itemName}`);
            saveImageForFigures(
              teamName,
              itemName,
              layer,
              `${figure}_${itemName}`,
              `${figure}_${itemName}_${teamName}`
            );
          }
          if (figure === "Bursch") {
            buildLayersFolder(teamName, `${figure}_${itemName}`);
            buildLayersFolder(teamName, `AlteHerr_${itemName}`);
            saveImageForFigures(
              teamName,
              itemName,
              layer,
              `${figure}_${itemName}`,
              `${figure}_${itemName}_${teamName}`
            );
            saveImageForFigures(
              teamName,
              itemName,
              layer,
              `AlteHerr_${itemName}`,
              `AlteHerr_${itemName}_${teamName}`
            );
          }
        }
      });
    } else if (item === "Narbe") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const figure = splitLayer[0];
          const teamName = fs.readdirSync(buildDir);
          teamName.forEach((team) => {
            if (figure === "AlteHerr") {
              buildLayersFolder(team, `${figure}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figure}_${item}`,
                `${figure}_${item}`
              );
            }
            if (figure === "Bursch") {
              buildLayersFolder(team, `${figure}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figure}_${item}`,
                `${figure}_${item}`
              );
            }
            if (figure === "Fux") {
              buildLayersFolder(team, `${figure}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figure}_${item}`,
                `${figure}_${item}`
              );
            }
            if (figure === "blank.png") {
              buildLayersFolder(team, `AlteHerr_${item}`);
              buildLayersFolder(team, `Bursch_${item}`);
              buildLayersFolder(team, `Fux_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `AlteHerr_${item}`,
                figure.slice(0, -4)
              );
              saveImageForFigures(
                team,
                item,
                layer,
                `Bursch_${item}`,
                figure.slice(0, -4)
              );
              saveImageForFigures(
                team,
                item,
                layer,
                `Fux_${item}`,
                figure.slice(0, -4)
              );
            }
          });
        }
      });
    } else if (item === "Polo") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split(".");
          const itemName = splitLayer[0];
          const teamName = fs.readdirSync(buildDir);
          teamName.forEach((team) => {
            buildLayersFolder(team, item);
            saveImage(team, layer, item, `${itemName}`);
          });
        }
      });
    } else if (item === "Augen") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const figure = splitLayer[0];
          const teamName = fs.readdirSync(buildDir);
          teamName.forEach((team) => {
            if (figure === "AlteHerr") {
              const itemName = splitLayer[1].slice(0, -4);
              buildLayersFolder(team, `${figure}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figure}_${item}`,
                `${figure}_${itemName}`
              );
            }
            if (figure === "Bursch") {
              const itemName = splitLayer[1].slice(0, -4);
              buildLayersFolder(team, `${figure}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figure}_${item}`,
                `${figure}_${itemName}`
              );
            }
            if (figure === "Fux") {
              const itemName = splitLayer[1].slice(0, -4);
              buildLayersFolder(team, `${figure}_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `${figure}_${item}`,
                `${figure}_${itemName}`
              );
            }
            if (figure === "blank.png") {
              buildLayersFolder(team, `AlteHerr_${item}`);
              buildLayersFolder(team, `Bursch_${item}`);
              buildLayersFolder(team, `Fux_${item}`);
              saveImageForFigures(
                team,
                item,
                layer,
                `AlteHerr_${item}`,
                figure
              );
              saveImageForFigures(team, item, layer, `Bursch_${item}`, figure);
              saveImageForFigures(team, item, layer, `Fux_${item}`, figure);
            }
          });
        }
      });
    } else if (item === "Augen_Bier") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const figure = splitLayer[0];
          const itemName = splitLayer[1].slice(0, -4);
          const teamName = fs.readdirSync(buildDir);
          teamName.forEach((team) => {
            buildLayersFolder(team, `Bursch_${item}`);
            saveImageForFigures(
              team,
              item,
              layer,
              `Bursch_${item}`,
              `${itemName}_${figure}`
            );
          });
        }
      });
    } else if (item === "Muetze_Bier") {
      const allItemLayers = fs.readdirSync(
        `${FolderOfAllTeamLayersPerItem}/${item}`
      );
      allItemLayers.forEach((layer) => {
        if (layer === "desktop.ini") {
        } else {
          const splitLayer = layer.split("_");
          const itemName = splitLayer[0];
          const figureName = splitLayer[1];
          const bier = splitLayer[2];
          const teamName = splitLayer[3];
          buildLayersFolder(teamName, `Bursch_${item}`);
          saveImageForFigures(
            teamName,
            item,
            layer,
            `Bursch_${item}`,
            `${itemName}_${figureName}_${bier}_${teamName}`
          );
        }
      });
    }
  });
};

const startRenaming = () => {
  let counter = 0;
  const allTeams = fs.readdirSync(buildDir1);
  allTeams.forEach((team) => {
    const imagesInsideTeam = fs.readdirSync(`${basePath}/build/${team}/images`);
    imagesInsideTeam.sort(function (a, b) {
      return a.slice(0, -4) - b.slice(0, -4);
    });
    imagesInsideTeam.forEach((image) => {
      const imageNumber = image.split(".")[0];
      counter++;
      fs.rename(
        `build/${team}/images/${imageNumber}.png`,
        `build/${team}/images/${counter}.png`,
        function (err) {
          if (err) throw err;
        }
      );
    });
  });

  counter = 0;
  allTeams.forEach((team) => {
    const jsonInsideTeam = fs.readdirSync(`${basePath}/build/${team}/json`);
    jsonInsideTeam.sort(function (a, b) {
      return a.slice(0, -5) - b.slice(0, -5);
    });
    jsonInsideTeam.forEach((json) => {
      const imageNumber = json.split(".")[0];
      if (imageNumber !== "_metadata") {
        counter++;
        fs.rename(
          `build/${team}/json/${imageNumber}.json`,
          `build/${team}/json/${counter}.json`,
          function (err) {
            if (err) throw err;
          }
        );
      }
    });
  });
};

module.exports = { startSorting, startRenaming };
