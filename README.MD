# A simple Error handling pattern in a NodeJS server
## Purpose

This project serves a simple purpose: to show how you can effectively - with minimum lines of code - serve an API and catch errors in a centralized way.

The goal is to limit error handling through all the layers of the app and handle them with a single control function.

## Structure
It's a basic Express app with a simple mocked DAO that return a user if any ID (number) but 0 is given.

## Running
If 0 is given, then the app throw an error through the whole stack and is catched by the app itself, responding to the client in a single way.
The error is also logged by an independent logger.

## Branches/Version
More branches will be added as the project deepen the error handling (i.e., different types of errors);