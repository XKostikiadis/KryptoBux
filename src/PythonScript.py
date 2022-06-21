import os
import shutil
from random import random, randint
from tempfile import mkstemp
from shutil import move, copymode
from os import fdopen, remove

rootdir = 'C:/Users/Kostikiadis/Hashlips/hashlips_art_engine/build'


#! Change each Json to the correct image number

def rename(teamname, jsonname, jsonnumber):
    with open(rootdir + "/" + teamname + "/json/" + jsonname, 'r') as file:
        data = file.readlines()
        for num, line in enumerate(data, 1):
            numberLine = num
            lineToReplace = line
            if '"name":' in line:
                length = len(lineToReplace.split(" "))
                data[numberLine - 1] = data[numberLine - 1].replace(lineToReplace.split(" ")[length - 1], '#' + jsonnumber + '",\n')
            if 'edition' in line:
                length = len(lineToReplace.split(" "))
                data[numberLine - 1] = data[numberLine - 1].replace(lineToReplace.split(" ")[length - 1], jsonnumber + ',\n')

    with open(rootdir + "/" + teamname + "/json/" + jsonname, 'w') as file:
        file.writelines(data)


def editJson():
    for teams in os.scandir(rootdir):
        teamNames = teams.path.split("\\")[1]
        if teamNames == "images" or teamNames == "json":
            continue
        for json in os.scandir(rootdir + "/" + teamNames + "/json"):
            jsonName = json.name
            if jsonName != "_metadata.json":
                jsonNumber = json.name.split(".")[0]
                rename(teamNames, jsonName, jsonNumber)


#! Change all _metadata.json to the correct image number

def editMetadata():
    index = 0
    for teams in os.scandir(rootdir):
        teamNames = teams.path.split("\\")[1]
        if teamNames == "images" or teamNames == "json":
            continue
        for json in os.scandir(rootdir + "/" + teamNames + "/json"):
            if json.name == "_metadata.json":
                with open(rootdir + "/" + teamNames + "/json/" + json.name, 'r') as file:
                    data = file.readlines()
                    for num, line in enumerate(data, 1):
                        numberLine = num
                        lineToReplace = line
                        if '"name":' in line:
                            length = len(lineToReplace.split(" "))
                            index += 1
                            data[numberLine - 1] = data[numberLine - 1].replace(lineToReplace.split(" ")[length - 1],
                                                                                '#' + str(index) + '",\n')
                        if 'edition' in line:
                            length = len(lineToReplace.split(" "))
                            data[numberLine - 1] = data[numberLine - 1].replace(lineToReplace.split(" ")[length - 1],
                                                                                str(index) + ',\n')
                with open(rootdir + "/" + teamNames + "/json/" + json.name, 'w') as file:
                    file.writelines(data)


#! Move all _metadata.json in one _metadata.json in json/_metadata.json
def moveMetadata():
    for teams in os.scandir(rootdir):
        teamNames = teams.path.split("\\")[1]
        if teamNames == "images" or teamNames == "json":
            continue
        for json in os.scandir(rootdir + "/" + teamNames + "/json"):
            if json.name == "_metadata.json":
                with open(rootdir + "/" + teamNames + "/json/" + json.name, 'r') as file:
                    data = file.readlines()
                    num_lines = sum(1 for line in open(rootdir + "/" + teamNames + "/json/" + json.name))
                    if teamNames == "Alte Kooonigsberger Turnerschaft Frisia ddd Albertina":
                        data[num_lines - 1] = data[num_lines - 1].replace("]", ",")
                    elif teamNames == "Verein 'Gluuuck zu' an der Deutschen Muuullerschule":
                        data[0] = data[0].replace("[", "")
                    else:
                        data[0] = data[0].replace("[", "")
                        data[num_lines - 1] = data[num_lines - 1].replace("]", ",")

                with open(rootdir + "/" + "json/" + "_metadata.json", 'a') as file:
                    file.writelines(data)


#! Copy json from each team folder to the json
def copyJson():
    dst_path = rootdir + "/json/"
    for teams in os.scandir(rootdir):
        teamNames = teams.path.split("\\")[1]
        if teamNames == "images" or teamNames == "json":
            continue
        for json in os.scandir(rootdir + "/" + teamNames + "/json"):
            shutil.copy(json.path, dst_path + json.name)


#! Copy Images from each team folder to the images
def copyImages():
    dst_path = rootdir + "/images/"
    for teams in os.scandir(rootdir):
        teamNames = teams.path.split("\\")[1]
        if teamNames == "images" or teamNames == "json":
            continue
        for images in os.scandir(rootdir + "/" + teamNames + "/images"):
            shutil.copy(images.path, dst_path + images.name)


#! Delete _metadata from each file
def deleteMetadataFiles():
    for teams in os.scandir(rootdir):
        teamNames = teams.path.split("\\")[1]
        if teamNames == "images" or teamNames == "json":
            continue
        for json in os.scandir(rootdir + "/" + teamNames + "/json"):
            if json.name == "_metadata.json":
                os.remove(json.path)


#! Delete json from each file
def deleteJsonFiles():
    for teams in os.scandir(rootdir):
        teamNames = teams.path.split("\\")[1]
        if teamNames == "images" or teamNames == "json":
            continue
        for json in os.scandir(rootdir + "/" + teamNames + "/json"):
            if json.name == "_metadata.json":
                continue
            else:
                os.remove(json.path)


#! Delete Images from each file
def deleteImageFiles():
    for teams in os.scandir(rootdir):
        teamNames = teams.path.split("\\")[1]
        if teamNames == "images" or teamNames == "json":
            continue
        for images in os.scandir(rootdir + "/" + teamNames + "/images"):
            os.remove(images.path)


#! Delete all team folders
def deleteTeamFolders():
    for teams in os.scandir(rootdir):
        teamNames = teams.path.split("\\")[1]
        if teamNames == "images" or teamNames == "json":
            continue
        shutil.rmtree(teams.path)


def createFolders():
    imagePath = 'C:/Users/Kostikiadis/Hashlips/hashlips_art_engine/build/images'
    jsonPath = 'C:/Users/Kostikiadis/Hashlips/hashlips_art_engine/build/json'

    #!Check whether the specified path exists or not
    imageIsExist = os.path.exists(imagePath)
    jsonIsExist = os.path.exists(jsonPath)

    if not imageIsExist:
        #! Create a new directory because it does not exist
        os.makedirs(imagePath)

    if not jsonIsExist:
        #! Create a new directory because it does not exist
        os.makedirs(jsonPath)


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
