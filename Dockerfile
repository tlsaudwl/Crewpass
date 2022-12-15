From ubuntu:20.04 as builder
ENV NODE_ENV="production"
COPY . /app
WORKDIR /app
RUN node main.js
FROM ubuntu:20.04
ENV NODE_ENV="production"
COPY --from=builder /app /app
WORKDIR /app
ENV PORT 5000
EXPOSE 5000
CMD ["npm", "start"]
