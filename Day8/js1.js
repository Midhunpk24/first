let employee={empid:101,name:"Raj",Salary:20000,
incSalay:function(amount){
  this.Salary+=amount
  console.log("current Salary=",this.Salary);
}
}
employee.incSalay(3000)