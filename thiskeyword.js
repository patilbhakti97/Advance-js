// Global 
console.log(this);

//local
let emp={
    name: 'Bhakti',
    salary: 25000,
    myfun: function()
    {
        console.log("Employee details:",this);
    }
}
emp.myfun()