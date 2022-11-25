class mobile
{
    constructor(Brand,Model,OS,Memory,Price)
    {
        this.Brand=Brand,
        this.Model=Model,
        this.OS=OS,
        this.Memory=Memory,
        this.Price=Price
    }
    show()
    {
        console.log(this.Brand,this.Model,this.OS,this.Memory,this.Price);
    }
}
let t1=new mobile('Redmi','Redmi A1','Android Go','32 GB','Rs.6,499')
t1.show()
let t2=new mobile('Samsung','Galaxy M32 prime edition','Android 12','64 GB','Rs.13,499')
t2.show()
let t3=new mobile('OnePlus','OnePlus Nord CE 2','Oxygen OS','128 GB','Rs.18,999')
t3.show()