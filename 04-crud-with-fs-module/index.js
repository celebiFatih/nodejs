const fs = require('fs');

const createFile = (name, salary) => {
    fs.writeFile('employees.json', `{"name": "${name}", "salary": "${salary}"}`, 'utf-8', (err) => {
        if (err) console.log(err);
        console.log('Dosya başarılı bir şekilde oluşturuldu');
    });
}

const readfile = () => {
    fs.readFile('employees.json', 'utf-8', (err, data) => {
        if (err) connsole.log(err);
        console.log('Dosya okundu');
        console.log(data);
    })
}

const updateFile = (name, salary) => {
    fs.appendFile('employees.json', `\n{"name": "${name}", "salary":"${salary}"}`, 'utf-8', (err) => {
        if (err) console.log(err);
        console.log('Veri başarılı bir şekilde eklendi');
        readfile();
    })
}

const deleteFile = (fileName) => {
    fs.unlink(`${fileName}`, (err) => {
        if (err) console.log(err);
        console.log('Dosya başarılı bir şekilde silindi')
    })
}

createFile('Fatih', 7000)
readfile()
updateFile("Özlem", 7500)
// deleteFile('employees.json')