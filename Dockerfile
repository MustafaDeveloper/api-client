# Use the official Node.js runtime as the base image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install
RUN npm install react-scripts@5.0.1 -g --silent
# Copy the entire application code to the container
COPY . ./



# Start app and db json server
CMD ["npm", "start"]
#CMD ["npm","run","server"]

# set working directory
#FROM node:16-alpine
#WORKDIR /app
#COPY package*.json .
#RUN npm install
#COPY . .
#EXPOSE 3000
#CMD [ "npm", "run", "dev" ]