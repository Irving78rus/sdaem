FROM node
WORKDIR /src/app
 ADD package.json package.json  
 
RUN npm install
EXPOSE 3000
ADD . .
RUN npm run build
CMD [ "npm" , "start"]
EXPOSE 3000