# Use the official Node.js LTS image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Install expo-cli globally
RUN npm install -g expo-cli

# Copy your local project files into the container
COPY . .

# Install dependencies for your app
RUN npm install

# Expose the default Expo development port
EXPOSE 19000 19001 19002

# Default command
CMD ["npx", "expo", "start", "--tunnel"]
