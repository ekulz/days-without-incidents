#!/usr/bin/env bash

set -e

if [ $# -lt 2 ]
    then
        echo "Please provide a project using -p or --project."
        exit 1
fi

while [[ $# -gt 0 ]]
do
    key="$1"
    case $key in
        -p|--project)
            PROJECT="$2"
            shift # past argument
            shift # past value
            ;;
        *)  # unknown option
            echo "Unknown flag passed to script."
            exit 1
        ;;
    esac
done

echo "Building and publishing image for $PROJECT\n"

USER=$(echo $DOCKER_HUB_USERNAME)
PASSWORD=$(echo $DOCKER_HUB_PASSWORD)

if [ -z "$USER" ]
then
    echo "Username is empty, please set environment variable DOCKER_HUB_USERNAME"
    exit 1
fi

if [ -z "$PASSWORD" ]
then
    echo "Password is empty, please set environment variable DOCKER_HUB_PASSWORD"
    exit 1
fi

echo "\nLogging into Dockerhub..."
echo $PASSWORD | docker login --username $USER --password-stdin

DIR="$(cd "$(dirname "$0")" && pwd)"
VERSION=$(head -n 1 $DIR/../$PROJECT/version.txt)
MAJOR=$($DIR/semver get major $VERSION)
MINOR=$($DIR/semver get minor $VERSION)
echo "\nBuilding version: $VERSION"

echo "\nBuilding image..."
cd $DIR/../$PROJECT
docker build -t ekulz/$PROJECT:latest . --file dockerfile

echo "\nTagging image..."
echo "Tagging with $VERSION"
docker tag ekulz/$PROJECT:latest ekulz/$PROJECT:$VERSION
echo "Tagging with $MAJOR.$MINOR"
docker tag ekulz/$PROJECT:latest ekulz/$PROJECT:$MAJOR.$MINOR
echo "Tagging with $MAJOR"
docker tag ekulz/$PROJECT:latest ekulz/$PROJECT:$MAJOR

echo "\nPushing image..."
echo "Pushing tag latest"
docker push ekulz/$PROJECT:latest
echo "Pushing tag $VERSION"
docker push ekulz/$PROJECT:$VERSION
echo "Pushing tag $MAJOR.$MINOR"
docker push ekulz/$PROJECT:$MAJOR.$MINOR
echo "Pushing tag $MAJOR"
docker push ekulz/$PROJECT:$MAJOR

echo "\nLogging out of Dockerhub..."
docker logout

echo "\nSuccess!"
