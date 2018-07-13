FROM danlynn/ember-cli:3.2.0

WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app
RUN mkdir -p /app/dist
RUN rm -rf /app/dist/*
VOLUME /app/dist

CMD ember build --env=production

