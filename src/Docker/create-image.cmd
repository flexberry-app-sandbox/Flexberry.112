docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 11/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t 11/app ../..
