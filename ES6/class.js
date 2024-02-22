class teacher{
    versity = 'JU';
    constructor(name,dept){
        this.name = name;
        this.dept = dept;
    }
    lecturer(){
        console.log('Muri khao');
    }
}

const teacher1 = new teacher('Eva mam','IIT');
console.log(teacher1);
// teacher { versity: 'JU', name: 'Eva mam', dept: 'IIT' }
