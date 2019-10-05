#!/usr/bin/env bash

set -e pipefail

USER=$(echo $DOCKER_HUB_USERNAME)
PASSWORD=$(echo $DOCKER_HUB_PASSWORD)

if [ -z "$USER" ]
then
    echo "Username is empty"
    exit 1
fi

if [ -z "$PASSWORD" ]
then
    echo "Password is empty"
    exit 1
fi

echo "Logging into Dockerhub..."
echo $PASSWORD | docker login --username $USER --password-stdin

DIR="$(cd "$(dirname "$0")" && pwd)"
VERSION=$(head -n 1 $DIR/../days-without-incidents-api/version.txt)
MAJOR=$($DIR/semver get major $VERSION)
MINOR=$($DIR/semver get minor $VERSION)
echo "Build version: $VERSION"

echo "Building image..."
cd $DIR/../days-without-incidents-api
docker build -t ekulz/days-without-incidents-api:latest . --file dockerfile

echo "Tagging image..."
echo "Tagging with $VERSION"
docker tag ekulz/days-without-incidents-api:latest ekulz/days-without-incidents-api:$VERSION
echo "Tagging with $MAJOR.$MINOR"
docker tag ekulz/days-without-incidents-api:latest ekulz/days-without-incidents-api:$MAJOR.$MINOR
echo "Tagging with $MAJOR"
docker tag ekulz/days-without-incidents-api:latest ekulz/days-without-incidents-api:$MAJOR

echo "Pushing image..."
echo "Pushing tag latest"
docker push ekulz/days-without-incidents-api:latest
echo "Pushing tag $VERSION"
docker push ekulz/days-without-incidents-api:$VERSION
echo "Pushing tag $MAJOR.$MINOR"
docker push ekulz/days-without-incidents-api:$MAJOR.$MINOR
echo "Pushing tag $MAJOR"
docker push ekulz/days-without-incidents-api:$MAJOR

echo "Logging out of Dockerhub..."
docker logout
