FROM node:alpine AS DEPS
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:alpine AS BUILDER
WORKDIR /app
COPY . .
COPY --from=DEPS /app/node_modules ./node_modules
RUN npm run build

FROM node:alpine
WORKDIR /app

ENV NODE_ENV production

COPY --from=BUILDER /app/public ./public
COPY --from=BUILDER /app/.next ./.next
COPY --from=BUILDER /app/node_modules ./node_modules
COPY --from=BUILDER /app/package.json ./package.json
COPY --from=BUILDER /app/next.config.js ./next.config.js
COPY --from=BUILDER /app/next-i18next.config.js ./next-i18next.config.js

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next
USER nextjs

EXPOSE 3000

CMD ["npm", "run", "start"]