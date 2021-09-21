FROM public.ecr.aws/lambda/nodejs:14 as build

COPY package.json package-lock.json src/

WORKDIR ./src

RUN npm ci --verbose

COPY . .

RUN npm run build

FROM build AS test

# build arg used to invalidate cache so tests will run
ARG TIMESTAMP

RUN npm run test

FROM test AS run

RUN cp -rp ./build/src/* /var/task/
RUN cp -rp ./node_modules/* /var/task/
