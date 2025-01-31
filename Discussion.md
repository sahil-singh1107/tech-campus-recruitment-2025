solutions considered : 

1. first solution was to read the logs file, create the output and write the logs.

final solution : 
 to optimise this i used node streams, which breaks the data into chunks which are more manageable. on every "line" event if the line starts with the provided date write it using writeStram. this way memory usage is reduced.

steps to run :

1. cd src
2. npm i
download and paste the logs file in src folder. make sure logs file name is logs_2024.log
3 .node extract_logs.js input_date

final output will be in output folder.
