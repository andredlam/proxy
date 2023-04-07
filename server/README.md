
# Server Reference

1. Update packages

``` shell
    $ nest --version
    $ npm install -g @nestjs/cli@latest npm-check-updates
    $ npm outdated
    $ ncu -u       (ncu = npm-check-updates command)
    $ npm install
```

2. Pull and push database
```shell
    $ npx prisma init
    >> .env file will be generated in /server folder
        >> add line
           DATABASE_URL="postgresql://postgres:@localhost:5432/guacamole_db?schema=public"

    $ npx prisma db pull
    $ npx prisma db push


    4. to execute
    $ npx prisma db seed
```

