# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock if using Yarn) to the working directory
COPY package*.json ./
# If using Yarn, uncomment the next line and comment out the `npm install` line
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# If you're using Yarn, use the following command instead
# RUN yarn install

# Copy the rest of the application's code to the working directory
COPY . .

# Bind the API service to port 4000
EXPOSE 4000

# Define the command to run the app
CMD [ "npm", "run", "dev" ]