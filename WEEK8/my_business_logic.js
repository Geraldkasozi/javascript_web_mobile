const myDB = reqiure()



const getAllStudents = () => {
    
    db. 
    query('SELECT * FROM students',
        (err, results) =>{

            if (err){
                 return "ERROR CONNECTING TO DB";
        }else{
        console.log("Results from db", results);
        return results;
    }

    
});
}
module.exports = {getAllStudents};