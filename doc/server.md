
```shell
    $ npm i -g @nestjs/cli 
    $ nest new server


    # Generate secrets
    $ cd secrets
    $ openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem

    $ npm install --save @nestjs/serve-static
    $ npm install --save pg
    $ npm install --save nestjs-ldap
    $ npm i --save-dev webpack-node-externals run-script-webpack-plugin webpack
    $ npm install prisma --save-dev
    $ npx prisma init
    $ npm install @prisma/client
    $ npm install @nestjs/mapped-types
    $ npm install class-transformer

    $ npm run start:dev
    # open browser to https://localhost:443/

    # If port 443 got reject
    $ sudo setcap 'cap_net_bind_service=+ep' `which node`



    $ nest generate resource features/webproxy


```