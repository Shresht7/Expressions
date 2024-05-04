# Use the official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json file to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the source code
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
