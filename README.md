# TypeScript NodeJS Skeleton

## Description

Skeleton project for creating TypeScript - NodeJS projects with some extensive boilerplate.

## Features

- Libraries and scripts to support the most common project lifecycle tasks including:
	- cleaning
	- linting
	- prettifying
	- building
	- running
	- testing
	- and monitoring changes in source files
- Configuration files for `ESLint`, `Jest`, `Prettier` and `TypeScript`
- Husky configuration for linting and prettifying staged files
- `.*ignore` most common ignored files & folders for `ESLint`, `Git`, and `Prettier`
- An entry point for the application (`./src/index.ts`)
- A template `.env` file for defining the desired environment variables for the application

## Regarding script execution

Some scripts expect to find some `*.env` files with specific names in the project root, which can be created from the template:

- The `start*` commands expect a `.env` file
- The `test*` commands expect a `test.env` file
