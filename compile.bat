
call mvn clean

call mvn versions:set -DnewVersion=0.0.0.1
call mvn versions:commit

call mvn clean install

pause