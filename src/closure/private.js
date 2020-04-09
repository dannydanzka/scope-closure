const person = () => {
    var saveName = 'Name';
    return {
        getname: () => {
            return saveName;
        },
        setName: name => {
            saveName = name;
        },
    }
}

newPerson = person();
newPerson.setName('Oscar');
console.log(newPerson.getname());