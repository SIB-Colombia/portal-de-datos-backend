import jsonfile from 'jsonfile';
const debug = require('debug')('dataportal-api:registries');

/*
  Returns dataportal departments list
 */
function departmentList(req, res) {
  jsonfile.readFile('api/data/department.json', (err, data) => {
    if (err) {
      res.status(400).json({ message: 'Error loading departments data file.' });
    }
    res.json(data.department);
  });
}

/*
  Returns dataportal counties list
 */
function countyList(req, res) {
  jsonfile.readFile('api/data/county.json', (err, data) => {
    if (err) {
      res.status(400).json({ message: 'Error loading counties data file.' });
    }
    res.json(data.counties);
  });
}

//issue 8
function searchList(req, res) {
  jsonfile.readFile('api/data/search.json', (err, data) => {
    if (err) {
      res.status(400).json({ message: 'Error loading search data file.' });
    }
    res.json(data.occurrences);
  });
}
//issue 9
function searchList2(req, res) {
  jsonfile.readFile('api/data/search2.json', (err, data) => {
    if (err) {
      res.status(400).json({ message: 'Error loading search data file.' });
    }
    res.json(data.occurrences);
  });
}
//issue 10
function searchList3(req, res) {
  jsonfile.readFile('api/data/search3.json', (err, data) => {
    if (err) {
      res.status(400).json({ message: 'Error loading search data file.' });
    }
    res.json(data.occurrences);
  });
}
//issue 6
function stats(req, res) {
var parametrosBusqueda = req.swagger.params.parametrosBusqueda.value;

  if(parametrosBusqueda== undefined){
  jsonfile.readFile('api/data/stats.json', (err, data) => {
    if (err) {
      res.status(400).json({ message: 'Error loading stats data file.' });
    }
    res.json(data.stats);
  });
}
else{
  jsonfile.readFile('api/data/stats.json', (err, data) => {
    if (err) {
      res.status(400).json({ message: 'Error loading stats data file.' });
    }
    res.json(data.stats);
  });
}
}
module.exports = {
  departmentList,
  countyList,
  providerList,
  searchList,
  searchList2,
  searchList3,
  stats
};
