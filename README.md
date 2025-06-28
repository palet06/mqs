npm config set ca=""
set NODE_TLS_REJECT_UNAUTHORIZED=0
npm config set strict-ssl false

npx prisma migrate dev --name init
npx prisma generate

