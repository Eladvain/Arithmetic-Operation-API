const { promises: fs } = require('fs');
async function read_from_file(path_file) {
    const data = await fs.readFile(path_file);
    const new_data = JSON.parse(data);
    return new_data;
}
module.exports = { read_from_file };
//# sourceMappingURL=utills.js.map