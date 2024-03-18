# reduced Docker image build time by caching Node modules, using a multi-stage build process
FROM node:20-alpine AS installer

WORKDIR /app/server

COPY package.json .
COPY package-lock.json .
RUN npm install

FROM node:20-alpine

WORKDIR /app/server

# Copying all the contents from previous stage(used --from) into current stage
COPY --from=installer /app/server/ /app/server/

COPY . .

# RUN npm run build

LABEL developer=pixelpause2000

EXPOSE 8000

# CMD ["node", "index.js"]
CMD ["npm","start"]

# docker build . -f Dockerfile.node  -t pixelpause2000/e-learning-app:0.0.1.RELEASE
