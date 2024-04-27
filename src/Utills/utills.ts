const { promises: fs } = require('fs');

//read from text file function
async function read_from_file(path_file:string)
{
	const data = await fs.readFile(path_file);
  const new_data = JSON.parse(data); 
	return new_data; 
}

module.exports = {read_from_file};