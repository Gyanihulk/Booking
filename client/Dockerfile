# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if using Yarn) to the working directory
COPY package*.json ./
# If using Yarn, uncomment the next line and comment out the `npm install` line
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# If you're using Yarn, use the following command instead
# RUN yarn install

# Copy the rest of the client code to the working directory
COPY . .

# # Build the React application
# RUN npm run build

# # Install serve to serve the production build
# RUN npm install -g serve

# Bind the React app to port 3000
EXPOSE 3000

# Serve the production build
CMD ["serve", "-s", "build"]