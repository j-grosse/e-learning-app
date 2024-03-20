# reduced Docker image build time by caching Node modules, using a multi-stage build process
FROM node:20-alpine AS installer

WORKDIR /app/client

COPY package.json .
COPY package-lock.json .
RUN npm install

FROM node:20-alpine

WORKDIR /app/client

# Copying all the contents from previous stage(used --from) into current stage
COPY --from=installer /app/client/ /app/client/

COPY . .

# RUN npm run build

LABEL developer=pixelpause2000

EXPOSE 5173

# ENTRYPOINT echo "Frontend Container running!" // overwrites CMD
# CMD ["npm","run","preview"]
CMD ["npm","run","dev"]
